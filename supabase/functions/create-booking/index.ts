import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

// ── Config ──
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
// Provided Make.com Webhook URL
const WEBHOOK_URL = "https://hook.us2.make.com/dskw6c975yrguww0rng8wlwctmtf40na";

// ── Service ID → Name Lookup ──
const SERVICE_NAMES: Record<string, string> = {
  m1: "Oil & Filter Change",
  m2: "Fluid Flush & Exchange",
  m3: "Filter Replacement",
  m4: "Rust Proofing",
  m5: "Engine Tune-Up",
  r1: "Computer Diagnostics",
  r2: "Brake System",
  r3: "Suspension & Steering",
  r4: "Engine Mechanical",
  r5: "Transmission & Drivetrain",
  r6: "Electrical System",
  r7: "A/C & Heating",
  r8: "Exhaust & Mufflers",
  t1: "Wheel Alignment",
  t2: "Tire Rotation",
  t3: "Tire Installation",
  t4: "Tire Storage",
};

function resolveServiceNames(ids: string[]): string {
  if (!ids || ids.length === 0) return "General Service";
  return ids
    .map((id) => SERVICE_NAMES[id.trim()] ?? id.trim())
    .filter(Boolean)
    .join(", ");
}

// ── Main Handler ──
Deno.serve(async (req: Request) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
    });
  }

  const cors = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" };

  try {
    const body = await req.json();
    const {
      name, phone, email, year, make, model, mileage,
      preferredDate, preferredTime, selectedServices,
      needsConcierge, comments, locale,
    } = body;

    // Validate required fields
    if (!name || !phone || !make || !model || !preferredDate || !preferredTime) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: name, phone, make, model, date, time" }),
        { status: 400, headers: cors },
      );
    }

    // Resolve service IDs → human-readable names
    const servicesLabel = Array.isArray(selectedServices) && selectedServices.length > 0
      ? resolveServiceNames(selectedServices)
      : (typeof selectedServices === "string" && selectedServices ? selectedServices : "General Service");

    console.log(`📋 New booking: ${name} — ${servicesLabel}`);

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

    // 1️⃣ Save to Supabase DB First
    const { data: booking, error: dbErr } = await supabase
      .from("bookings")
      .insert({
        customer_name: name,
        customer_phone: phone,
        customer_email: email || "",
        vehicle_year: year ? parseInt(year) : null,
        vehicle_make: make || null,
        vehicle_model: model || null,
        mileage: mileage ? parseInt(mileage) : null,
        service_name: servicesLabel,
        preferred_date: preferredDate,
        preferred_time: preferredTime,
        needs_concierge: !!needsConcierge,
        notes: comments || null,
        locale: locale || "en",
        status: "pending",
        zapier_synced: false,
      })
      .select()
      .single();

    if (dbErr) throw new Error(`DB insert failed: ${dbErr.message}`);
    console.log(`✅ Booking saved: ${booking.id}`);

    // 2️⃣ Send payload to Webhook (Make.com)
    let webhookStatus = "skipped";
    try {
      // We pass the full mapped data + the new ID from Supabase
      const webhookPayload = {
        booking_id: booking.id,
        customer_name: name,
        customer_phone: phone,
        customer_email: email || "",
        vehicle_year: year,
        vehicle_make: make,
        vehicle_model: model,
        vehicle_mileage: mileage || "",
        services_requested: servicesLabel,
        preferred_date: preferredDate,
        preferred_time: preferredTime,
        start_datetime: `${preferredDate}T${preferredTime}:00`,
        end_datetime: (() => {
          const [h, m] = preferredTime.split(":").map(Number);
          const end = new Date(`${preferredDate}T${String(h + 1).padStart(2, "0")}:${String(m).padStart(2, "0")}:00`);
          return end.toISOString().slice(0, 19);
        })(),
        needs_concierge: !!needsConcierge ? "Yes" : "No",
        notes: comments || "",
        locale: locale || "en"
      };

      const webhookRes = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(webhookPayload)
      });

      if (!webhookRes.ok) {
        throw new Error(`Webhook failed with status: ${webhookRes.status}`);
      }

      // Mark as synced in Supabase
      await supabase
        .from("bookings")
        .update({ zapier_synced: true, zapier_synced_at: new Date().toISOString() })
        .eq("id", booking.id);

      webhookStatus = "sent";
      console.log(`✅ Webhook triggered successfully for ${booking.id}`);

    } catch (hookErr) {
      const msg = hookErr instanceof Error ? hookErr.message : String(hookErr);
      console.error("❌ Webhook error:", msg);
      webhookStatus = `error: ${msg}`;
    }

    return new Response(JSON.stringify({
      success: true,
      bookingId: booking.id,
      webhook: webhookStatus,
      message: "Booking confirmed! We'll be in touch shortly.",
    }), { headers: cors });

  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("❌ Booking error:", msg);
    return new Response(JSON.stringify({ error: msg }), { status: 500, headers: cors });
  }
});

