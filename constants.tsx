import React from 'react';
import { NavItem, ServiceItem, DetailedServiceItem, Testimonial, Partner } from './types';
import { Wrench, Car, ShieldCheck, Activity, Key, Gauge, Disc, Zap, Move, Droplets, Wind, Layers, RotateCw, Anchor, Warehouse, Sparkles, Cog, Settings, Thermometer } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Concierge', href: '#concierge' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

// Google Maps Universal Link (Mobile/Desktop/Android optimized)
export const MAPS_URL = 'https://www.google.com/maps/dir/?api=1&destination=10361+Boul+Gouin+Ouest+Roxboro+QC+H8Y+1S1';

// Featured services for the top highlights (if needed elsewhere)
export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Diagnostic & Repairs',
    description: 'Advanced computer diagnostics to pinpoint issues accurately. No guesswork, just precision fixes.',
    icon: <Activity className="w-6 h-6" />,
    price: 'Starting at $120',
    features: ['Check Engine Light', 'Electrical Systems', 'Suspension & Steering', 'Brake Systems']
  },
  {
    id: '2',
    title: 'Routine Maintenance',
    description: 'Keep your warranty intact and your car running smoothly with manufacturer-approved schedules.',
    icon: <Gauge className="w-6 h-6" />,
    price: 'Packages from $89',
    features: ['Oil Changes', 'Fluid Flushes', 'Filter Replacements', 'Tire Rotation']
  },
  {
    id: '3',
    title: 'Tire & Wheel Service',
    description: 'Premium tire selection and precision alignment for a smoother, safer ride.',
    icon: <Car className="w-6 h-6" />,
    features: ['Tire Installation', 'Laser Alignment', 'Seasonal Storage', 'Wheel Balancing']
  }
];

// The comprehensive interactive list
export const ALL_SERVICES: DetailedServiceItem[] = [
  // Maintenance
  {
    id: 'm1',
    category: 'Maintenance',
    title: 'Oil & Filter Change',
    shortDescription: 'The lifeblood of your engine.',
    whyItMatters: 'Regular oil changes reduce friction, prevent overheating, and remove sludge. Neglecting this is the #1 cause of premature engine failure. Fresh oil ensures your engine runs efficiently and lasts longer.',
    icon: <Droplets className="w-5 h-5" />,
    estimatedTime: '30 - 90 Mins'
  },
  {
    id: 'm2',
    category: 'Maintenance',
    title: 'Fluid Flush & Exchange',
    shortDescription: 'Coolant, Brake, Transmission, & Power Steering.',
    whyItMatters: 'Fluids break down over time, losing their ability to lubricate, cool, or transfer force. Old brake fluid absorbs moisture leading to rust; old coolant becomes acidic. Fresh fluids protect expensive internal components.',
    icon: <Zap className="w-5 h-5" />,
    estimatedTime: '30 - 90 Mins'
  },
  {
    id: 'm3',
    category: 'Maintenance',
    title: 'Filter Replacement',
    shortDescription: 'Engine Air & Cabin Air Filters.',
    whyItMatters: 'A clogged engine filter strangles performance and reduces fuel economy. A dirty cabin filter circulates dust and allergens inside your car. Changing them allows your car (and you) to breathe easier.',
    icon: <Wind className="w-5 h-5" />,
    estimatedTime: '10 - 30 Mins'
  },
  {
    id: 'm4',
    category: 'Maintenance',
    title: 'Rust Proofing',
    shortDescription: 'Protect vs Salt & Rust.',
    whyItMatters: 'Montreal winters are brutal on cars. Salt and moisture accelerate corrosion on your frame and body panels. Our premium rust proofing application seals potential trouble spots, extending your vehicle’s life and preserving its resale value.',
    icon: <ShieldCheck className="w-5 h-5" />,
    estimatedTime: '45 - 60 Mins'
  },
  {
    id: 'm5',
    category: 'Maintenance',
    title: 'Engine Tune-Up',
    shortDescription: 'Spark plugs, ignition & performance.',
    whyItMatters: 'Restores lost power and fuel economy. Worn plugs cause misfires and wasted gas. A tune-up keeps your engine running smooth like the day it was built.',
    icon: <Sparkles className="w-5 h-5" />,
    estimatedTime: '60 - 120 Mins'
  },

  // Repairs
  {
    id: 'r1',
    category: 'Repairs',
    title: 'Computer Diagnostics',
    shortDescription: 'Check engine lights & electrical issues.',
    whyItMatters: 'Modern cars are complex computers. A warning light is a cry for help. Our advanced scanners pinpoint the exact issue, saving you money on trial-and-error repairs and preventing small problems from becoming catastrophic failures.',
    icon: <Activity className="w-5 h-5" />,
    estimatedTime: '45 - 90 Mins'
  },
  {
    id: 'r2',
    category: 'Repairs',
    title: 'Brake System',
    shortDescription: 'Pads, Rotors, Calipers & Lines.',
    whyItMatters: 'Your safety depends on stopping power. Worn pads increase stopping distance, while warped rotors cause vibration. Ignoring squeaks or grinding can damage calipers, doubling your repair bill and endangering your life.',
    icon: <Disc className="w-5 h-5" />,
    estimatedTime: '1.5 - 3 Hours'
  },
  {
    id: 'r3',
    category: 'Repairs',
    title: 'Suspension & Steering',
    shortDescription: 'Shocks, Struts, Ball Joints & Tie Rods.',
    whyItMatters: 'Suspension isn’t just about comfort; it keeps your tires on the road. Worn shocks cause bouncing and poor handling, while loose steering components can cause your vehicle to wander. Maintain control and ride quality.',
    icon: <Move className="w-5 h-5" />,
    estimatedTime: '2 - 5 Hours'
  },
  {
    id: 'r4',
    category: 'Repairs',
    title: 'Engine Mechanical',
    shortDescription: 'Head gaskets, timing chains & internal repairs.',
    whyItMatters: 'Deep engine work that saves the car when others say "scrap it." From timing chains to head gaskets, we handle the heavy-duty internal repairs that restore your vehicle’s heart.',
    icon: <Cog className="w-5 h-5" />,
    estimatedTime: 'Varies'
  },
  {
    id: 'r5',
    category: 'Repairs',
    title: 'Transmission & Drivetrain',
    shortDescription: 'Fluid, clutch, differential & 4WD.',
    whyItMatters: 'The power needs to get to the wheels. We fix slipping gears, grinding differentials, and transfer case issues to ensure smooth shifting and reliable power delivery.',
    icon: <Settings className="w-5 h-5" />,
    estimatedTime: 'Varies'
  },
  {
    id: 'r6',
    category: 'Repairs',
    title: 'Electrical System',
    shortDescription: 'Battery, Alternator, Starter & Wiring.',
    whyItMatters: 'If it won’t start or lights flicker, it’s usually here. We trace the invisible demons in your wiring, protecting your car’s sensitive electronics from voltage spikes and failures.',
    icon: <Zap className="w-5 h-5" />,
    estimatedTime: '60 - 180 Mins'
  },
  {
    id: 'r7',
    category: 'Repairs',
    title: 'A/C & Heating',
    shortDescription: 'Climate control & comfort systems.',
    whyItMatters: 'Montreal winters are hot, winters are freezing. A working A/C isn’t just luxury; it defogs your windows for safety. We fix leaks, compressors, and heater cores to keep you comfortable year-round.',
    icon: <Thermometer className="w-5 h-5" />,
    estimatedTime: '2 - 4 Hours'
  },
  {
    id: 'r8',
    category: 'Repairs',
    title: 'Exhaust & Mufflers',
    shortDescription: 'Emissions, catalytic converters & welding.',
    whyItMatters: 'A loud exhaust is annoying and often illegal. But more importantly, leaks can let dangerous carbon monoxide into the cabin. We fix the noise, ensure you pass emissions, and keep the air you breathe safe.',
    icon: <Wind className="w-5 h-5" />,
    estimatedTime: '1 - 3 Hours'
  },

  // Tires & Wheels
  {
    id: 't1',
    category: 'Tires & Wheels',
    title: 'Wheel Alignment',
    shortDescription: 'Laser precision for straight driving.',
    whyItMatters: 'Potholes throw your wheels out of alignment. This causes your car to pull to one side and shreds your tires unevenly. Proper alignment extends tire life significantly and improves fuel efficiency.',
    icon: <Layers className="w-5 h-5" />,
    estimatedTime: '60 - 90 Mins'
  },
  {
    id: 't2',
    category: 'Tires & Wheels',
    title: 'Tire Rotation',
    shortDescription: 'Even wear for longer life.',
    whyItMatters: 'Front and rear tires wear differently due to steering and weight distribution. Rotating them regularly ensures they wear evenly, maximizing their lifespan and maintaining balanced handling.',
    icon: <RotateCw className="w-5 h-5" />,
    estimatedTime: '20 - 40 Mins'
  },
  {
    id: 't3',
    category: 'Tires & Wheels',
    title: 'Tire Installation',
    shortDescription: 'Mounting & Balancing.',
    whyItMatters: 'We don’t just slap tires on. We precise-balance them to eliminate high-speed vibrations that can damage your suspension and annoy you on the highway.',
    icon: <Car className="w-5 h-5" />,
    estimatedTime: '30 - 90 Mins'
  },
  {
    id: 't4',
    category: 'Tires & Wheels',
    title: 'Tire Storage',
    shortDescription: 'Seasonal Hotel for your wheels.',
    whyItMatters: 'Save space in your garage and save your back from heavy lifting. We store your off-season tires in a climate-controlled environment to prevent rubber degradation.',
    icon: <Warehouse className="w-5 h-5" />
    // No estimatedTime for storage
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Audi Q5 Owner',
    content: "I usually dread going to the mechanic, but Garazen is different. They explained everything clearly and the 'stress to zen' promise is real. My car feels brand new.",
    rating: 5,
    image: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: '2',
    name: 'Marc Tremblay',
    role: 'Local Business Owner',
    content: "Professional, clean, and modern. The digital inspection report they sent to my phone was a game changer. I knew exactly what I was paying for.",
    rating: 5,
    image: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Commuter',
    content: "The concierge service saved my day. They picked up my car while I was at work and brought it back fixed. Worth every penny for the peace of mind.",
    rating: 5,
    image: 'https://picsum.photos/100/100?random=3'
  }
];

export const PARTNERS: Partner[] = [
  { id: '1', name: 'NAPA', logoUrl: '' },
  { id: '2', name: 'Liqui Moly', logoUrl: '' },
  { id: '3', name: 'Mobil 1', logoUrl: '' },
  { id: '4', name: 'Brembo', logoUrl: '' },
  { id: '5', name: 'Bosch', logoUrl: '' },
  { id: '6', name: 'Mahle', logoUrl: '' },
  { id: '7', name: 'Mann-Filter', logoUrl: '' },
  { id: '8', name: 'Michelin', logoUrl: '' },
  { id: '9', name: 'Pirelli', logoUrl: '' },
  { id: '10', name: 'Bridgestone', logoUrl: '' },
  { id: '11', name: 'Continental', logoUrl: '' },
  { id: '12', name: 'ZF', logoUrl: '' },
  { id: '13', name: 'Hella', logoUrl: '' },
  { id: '14', name: 'Lemförder', logoUrl: '' },
  { id: '15', name: 'Castrol', logoUrl: '' },
  { id: '16', name: 'Valvoline', logoUrl: '' },
  { id: '17', name: 'NGK', logoUrl: '' },
  { id: '18', name: 'Denso', logoUrl: '' },
  { id: '19', name: 'Bilstein', logoUrl: '' },
  { id: '20', name: 'KYB', logoUrl: '' },
];