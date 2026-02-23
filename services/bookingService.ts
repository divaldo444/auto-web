/**
 * bookingService.ts
 * Sends booking data to the Supabase Edge Function, which then
 * routes it to Torque360 + Google Calendar + Supabase table.
 */

export interface BookingPayload {
    // Customer
    name: string;
    phone: string;
    email: string;
    // Vehicle
    year: string;
    make: string;
    model: string;
    mileage?: string;
    // Appointment
    preferredDate: string;  // YYYY-MM-DD
    preferredTime: string;  // HH:mm (24h)
    // Services
    selectedServices: string[];
    comments: string;
    // Options
    needsConcierge: boolean;
    locale: string;
    timestamp: string;
}

export interface BookingResult {
    success: boolean;
    bookingId?: string;
    error?: string;
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export async function submitBooking(payload: BookingPayload): Promise<BookingResult> {
    try {
        const res = await fetch(`${SUPABASE_URL}/functions/v1/create-booking`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            },
            body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (!res.ok) {
            console.error('[BookingService] Error:', data);
            return { success: false, error: data.error || 'Submission failed. Please call us directly.' };
        }

        return { success: true, bookingId: data.bookingId };
    } catch (err) {
        console.error('[BookingService] Network error:', err);
        return { success: false, error: 'Network error. Please check your connection and try again.' };
    }
}
