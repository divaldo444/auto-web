import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface HolographicEngineProps {
    mobileLayout?: boolean;
}

export const HolographicEngine: React.FC<HolographicEngineProps> = ({ mobileLayout = false }) => {
    const [scanStep, setScanStep] = useState(0);
    const { t } = useLanguage();

    useEffect(() => {
        const interval = setInterval(() => {
            setScanStep((prev) => (prev + 1) % 6);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const stepKeys = ['s1', 's2', 's3', 's4', 's5', 's6'] as const;

    const uniqueId = mobileLayout ? 'mobile' : 'desktop';

    return (
        <div className="relative w-full aspect-[4/3] max-w-[900px] mx-auto flex items-center justify-center">
            {/* Environment: Scanning Bay */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Floor Grid */}
                <div className="absolute top-[55%] -left-[50%] -right-[50%] h-[150%] bg-[linear-gradient(transparent_0%,rgba(56,189,248,0.08)_1px,transparent_2px),linear-gradient(90deg,transparent_0%,rgba(56,189,248,0.08)_1px,transparent_2px)] bg-[size:50px_50px] [transform:perspective(500px)_rotateX(65deg)] opacity-50 animate-pulse-slow" />
                {/* Ambient glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-electric/5 via-transparent to-transparent" />
            </div>

            {/* SVG SCENE */}
            <div className="absolute inset-0 z-10">
                <svg viewBox="0 0 900 700" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                    {/* === SCANNER BEAM (HORIZONTAL ENHANCED) === */}
                    <defs>
                        <linearGradient id={`scan-beam-h-${uniqueId}`} x1="1" y1="0" x2="0" y2="0">
                            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.8)" />
                            <stop offset="20%" stopColor="rgba(56, 189, 248, 0.4)" />
                            <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
                        </linearGradient>

                        <filter id={`glow-soft-${uniqueId}`} x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>

                        <mask id={`wireframe-mask-${uniqueId}`}>
                            <rect x="0" y="0" width="900" height="700" fill="black" />
                            <motion.rect
                                x="-400" y="0" width="400" height="700"
                                fill="white"
                                animate={{ x: [-400, 1200] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            />
                        </mask>
                    </defs>

                    {/* === LAYER 1: BASE GHOST (Dark, subtle outlines) === */}
                    <g className="opacity-20 stroke-gunmetal fill-none" strokeWidth="1">
                        <ModernSUV />
                        <InternalComponents />
                    </g>

                    {/* === LAYER 2: HOLOGRAPHIC REVEAL (Active scan, bright blue) === */}
                    <g mask={`url(#wireframe-mask-${uniqueId})`} className="stroke-electric fill-none" strokeWidth="1.5" filter={`url(#glow-soft-${uniqueId})`}>
                        <ModernSUV />
                        <InternalComponents detailed />
                    </g>

                    {/* === LAYER 3: BODY VOLUME (Faint fill for presence) === */}
                    <g mask={`url(#wireframe-mask-${uniqueId})`} className="fill-electric/[0.03] stroke-none">
                        <ModernSUVFill />
                    </g>

                    {/* === SCANNER BEAM (HORIZONTAL RESTORED - NO WHITE LINES) === */}
                    <motion.g
                        animate={{ x: [-400, 1200] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    >
                        {/* Just the Glow/Trail - No hard lines */}
                        <rect x="-400" y="0" width="400" height="700" fill={`url(#scan-beam-h-${uniqueId})`} opacity="0.4" /> {/* Reduced opacity to 0.4 to match refined subtleness */}

                        {/* Subtle Leading Edge Glow (No hard white line) */}
                        <line x1="0" y1="0" x2="0" y2="700" stroke="#38BDF8" strokeWidth="2" strokeOpacity="0.5" className="blur-sm" />

                        {/* Particles REMOVED per user request */}
                    </motion.g>

                    {/* === HOTSPOTS === */}

                    {/* FRONT: Engine (h2) - FLIPPED BACK TO LEFT */}
                    <Hotspot x={220} y={420} label={t('holographic.hotspots.h2.label')} sub={t('holographic.hotspots.h2.sub')} delay={0.5} direction="left" />

                    {/* FRONT: Oil (h4) - EXTENDED LINE to left */}
                    <Hotspot x={220} y={490} label={t('holographic.hotspots.h4.label')} sub={t('holographic.hotspots.h4.sub')} delay={1.5} direction="left" lineLength={80} />

                    {/* REAR: Suspension (h3) */}
                    <Hotspot x={660} y={460} label={t('holographic.hotspots.h3.label')} sub={t('holographic.hotspots.h3.sub')} delay={2.5} direction="right" />

                    {/* REAR: Brakes (h1) */}
                    <Hotspot x={630} y={530} label={t('holographic.hotspots.h1.label')} sub={t('holographic.hotspots.h1.sub')} delay={3.5} direction="right" />

                    {/* REAR: Exhaust (h5) */}
                    <Hotspot x={770} y={525} label={t('holographic.hotspots.h5.label')} sub={t('holographic.hotspots.h5.sub')} delay={4.5} direction="right" />

                    {/* CENTER: Transmission/drivetrain (h6) - TOUCHING FRAME (540), LABEL BOTTOM */}
                    <Hotspot x={450} y={540} label={t('holographic.hotspots.h6.label')} sub={t('holographic.hotspots.h6.sub')} delay={5.5} direction="right" labelPosition="bottom" />

                </svg>
            </div>

            {/* === HUD OVERLAY === */}
            <div className={`absolute z-20 flex flex-col pointer-events-none p-2 sm:p-6 scale-50 sm:scale-100 transition-all duration-500
                ${mobileLayout
                    ? 'top-[10%] right-2 items-end origin-top-right'
                    : 'top-2 right-2 items-end origin-top-right'
                }`}
            >
                <div className="flex items-center gap-2 mb-2">
                    <div className="flex space-x-1">
                        <span className="animate-ping h-2 w-2 rounded-full bg-electric opacity-75"></span>
                        <span className="relative h-2 w-2 rounded-full bg-electric"></span>
                    </div>
                    <span className="text-[10px] text-electric font-bold font-mono tracking-widest uppercase">{t('holographic.liveAnalysis')}</span>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={scanStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className={`bg-midnight/80 backdrop-blur-md border border-electric/20 rounded-sm p-4 shadow-[0_0_30px_-10px_rgba(56,189,248,0.3)] min-w-[180px] ${mobileLayout ? 'text-center' : 'text-right'}`}
                    >
                        <div className="text-[10px] text-silver/60 font-mono tracking-widest mb-1">{t(`holographic.steps.${stepKeys[scanStep]}.label`)}</div>
                        <div className="text-xl text-white font-bold tracking-tight mb-2 drop-shadow-md">
                            {t(`holographic.steps.${stepKeys[scanStep]}.value`)}
                        </div>
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-electric/40 to-transparent mb-2" />
                        <div className="text-[9px] text-electric font-bold tracking-wider uppercase">{t(`holographic.steps.${stepKeys[scanStep]}.sub`)}</div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Decorative Corner UI — bottom-left */}
            <div className="absolute bottom-6 left-6 z-20">
                <div className="flex items-center gap-1 mb-1 opacity-60">
                    <div className="w-0.5 h-4 bg-electric" />
                    <div className="w-0.5 h-3 bg-electric/60" />
                    <div className="w-0.5 h-2 bg-electric/30" />
                </div>
                <div className="text-[9px] font-mono text-electric/60 tracking-widest uppercase">
                    {t('holographic.secureConnection')}
                </div>
            </div>
        </div>
    );
};

// ─── MODERN SUV SILHOUETTE (Clean, Range-Rover-esque lines) ───
const ModernSUV = () => (
    <g strokeLinecap="round" strokeLinejoin="round">
        {/* Chassis / Ground Clearance line */}
        <path d="M120 540 L170 540" />
        <path d="M300 540 L590 540" />
        <path d="M730 540 L790 540" />

        {/* Front Fascia */}
        <path d="M120 540 L115 515 L112 490 Q115 460 130 445 L150 435" />

        {/* Hood */}
        <path d="M150 435 L260 415 Q310 405 350 400" />

        {/* Windshield & A-Pillar */}
        <path d="M350 400 L420 310" />

        {/* Roofline (Flat/Sporty) */}
        <path d="M420 310 L680 300 Q710 302 730 320" />

        {/* Rear Hatch / C-Pillar */}
        <path d="M730 320 L760 380 L765 440 L760 480" />

        {/* Rear Bumper */}
        <path d="M760 480 L765 500 L790 515 L790 540" />

        {/* Wheel Arches (Clean rounded) */}
        <path d="M170 540 A 65 65 0 0 1 300 540" />
        <path d="M590 540 A 70 70 0 0 1 730 540" />

        {/* Character Lines (Detailing) */}
        <path d="M150 440 L760 410" opacity="0.4" /> {/* Shoulder line */}
        <path d="M130 500 L760 490" opacity="0.2" /> {/* Lower rocker crease */}

        {/* Windows */}
        <path d="M430 320 L540 315 L540 400 L410 405 Z" opacity="0.4" /> {/* Front window */}
        <path d="M550 315 L660 312 L690 325 L710 395 L550 400 Z" opacity="0.4" /> {/* Rear window */}
        <path d="M545 310 L545 405" opacity="0.3" /> {/* B-Pillar */}

        {/* Headlights (Slim, modern) */}
        <path d="M130 450 L160 445 L155 460 Z" strokeWidth="1.5" />

        {/* Taillights (Connected bar style) */}
        <path d="M760 420 L755 435" strokeWidth="2" />

        {/* Side Mirror */}
        <path d="M410 390 L400 375 L420 375 L425 390 Z" />
    </g>
);

const ModernSUVFill = () => (
    <path d="M120 540 L115 515 L112 490 Q115 460 130 445 L150 435 L260 415 Q310 405 350 400 L420 310 L680 300 Q710 302 730 320 L760 380 L765 440 L760 480 L765 500 L790 515 L790 540 L730 540 A 70 70 0 0 0 590 540 L300 540 A 65 65 0 0 0 170 540 Z" />
);

// ─── INTERNAL COMPONENTS (Accurate placement) ───
const InternalComponents = ({ detailed = false }: { detailed?: boolean }) => (
    <g>
        {/* === ENGINE (Moved to FRONT X~200) === */}
        <g transform="translate(180, 420)">
            {/* Engine Block */}
            <path d="M0 0 L90 0 L85 55 L5 55 Z" opacity={detailed ? 0.8 : 0.4} strokeDasharray={detailed ? "0" : "4 2"} />
            {/* Cylinder Heads */}
            <path d="M10 10 L80 5" opacity="0.5" />
            <path d="M10 25 L80 20" opacity="0.5" />

            {/* Pulleys/Belts (Front) */}
            <circle cx="5" cy="15" r="4" opacity="0.6" />
            <circle cx="5" cy="35" r="5" opacity="0.6" />
            <path d="M5 15 L5 35" strokeWidth="2" opacity="0.4" />

            {/* Air Intake */}
            <path d="M40 -5 Q60 -15 70 5" fill="none" opacity="0.4" />
        </g>

        {/* === TRANSMISSION (Center tunnel) === */}
        <path d="M260 445 L400 480" opacity="0.3" strokeWidth="8" strokeLinecap="round" />
        <path d="M400 480 L590 540" opacity="0.2" strokeWidth="5" /> {/* Driveshaft to rear */}

        {/* === RADIATOR / COOLING (Front) === */}
        <rect x="130" y="440" width="12" height="40" rx="2" opacity="0.3" />

        {/* === SUSPENSION STRUTS (Improved Visuals) === */}
        {/* Front Strut */}
        <path d="M235 540 L235 480" strokeWidth="3" opacity="0.4" /> {/* Shock body */}
        <g transform="translate(235, 460)">
            <rect x="-12" y="0" width="24" height="4" rx="1" fill="#38BDF8" opacity="0.6" /> {/* Top Mount */}
            <path d="M-8 4 L8 8 L-8 12 L8 16 L-8 20 L8 24 L-8 28 L0 30" fill="none" stroke="#38BDF8" strokeWidth="1.5" opacity="0.8" /> {/* Stylized Spring */}
        </g>

        {/* Rear Strut */}
        <path d="M660 540 L660 490" strokeWidth="3" opacity="0.4" /> {/* Shock body */}
        <g transform="translate(660, 465)">
            <rect x="-12" y="0" width="24" height="4" rx="1" fill="#38BDF8" opacity="0.6" /> {/* Top Mount */}
            <path d="M-8 4 L8 8 L-8 12 L8 16 L-8 20 L8 24 L-8 28 L0 30" fill="none" stroke="#38BDF8" strokeWidth="1.5" opacity="0.8" /> {/* Stylized Spring */}
        </g>

        {/* === BRAKES (Calipers & Rotors) === */}
        {/* Front Wheel Center ~235, 540 */}
        <circle cx="235" cy="540" r="30" opacity="0.4" strokeDasharray="3 2" />
        {/* Front Caliper Highlight - RESTORED & LIT UP when detailed */}
        <path d="M210 525 Q200 535 210 545 L220 535 Z" fill={detailed ? "#38BDF8" : "none"} className="stroke-electric" opacity={detailed ? 0.8 : 0.3} />

        {/* Rear Wheel Center ~660, 540 */}
        <circle cx="660" cy="540" r="28" opacity="0.4" strokeDasharray="3 2" />
        <path d="M630 525 Q620 535 630 545 L640 535 Z" fill={detailed ? "#38BDF8" : "none"} opacity="0.8" /> {/* Highlighted Rear Caliper */}

        {/* === EXHAUST SYSTEM === */}
        <path d="M260 470 L760 520" fill="none" strokeWidth="2" opacity="0.2" strokeDasharray="4 4" />
        <path d="M760 520 L780 525" opacity="0.5" strokeWidth="3" /> {/* Tailpipe */}

    </g>
);

const Hotspot = ({ x, y, label, sub, delay, direction = 'right', lineLength = 40, labelPosition = 'top' }: { x: number, y: number, label: string, sub: string, delay: number, direction?: 'left' | 'right', lineLength?: number, labelPosition?: 'top' | 'bottom' }) => {
    const isRight = direction === 'right';
    const isTop = labelPosition === 'top';
    const lineEnd = isRight ? x + lineLength : x - lineLength;
    const labelX = isRight ? x + lineLength + 5 : x - lineLength - 105;
    const labelY = isTop ? y - 35 : y + 15;

    // Vertical line segment: Up (-15) or Down (+15)
    const verticalOffset = isTop ? -15 : 15;

    return (
        <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay, duration: 1 }}
        >
            <circle cx={x} cy={y} r="2" fill="#38BDF8" className="animate-pulse" />
            <motion.circle
                cx={x} cy={y} r="8"
                stroke="#38BDF8" strokeWidth="0.5" fill="none"
                opacity="0.4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.8, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Line: Horizontal -> Vertical Step */}
            <path d={`M${isRight ? x + 4 : x - 4} ${y} L${lineEnd} ${y} L${lineEnd + (isRight ? 10 : -10)} ${y + verticalOffset}`}
                fill="none" stroke="#38BDF8" strokeWidth="0.5" opacity="0.4"
            />

            <g transform={`translate(${labelX}, ${labelY})`}>
                <rect x="0" y="0" width="100" height="24" rx="2" fill="rgba(56, 189, 248, 0.05)" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="0.5" />
                <text x="6" y="10" fill="#fff" fontSize="7" fontWeight="bold" fontFamily="sans-serif">{label}</text>
                <text x="6" y="19" fill="#38BDF8" fontSize="6" fontFamily="monospace" opacity="0.8">{sub}</text>
            </g>
        </motion.g>
    );
};
