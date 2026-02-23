import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Users, MapPin, ArrowRight, Wrench, Globe, Flag, Truck, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useBooking } from '../context/BookingContext';

// ── Brand category config ─────────────────────────────────────────────────────
const brandCategories = [
    {
        key: 'german',
        icon: <Globe className="w-5 h-5" />,
        color: 'from-blue-500/20 to-blue-600/5',
        borderColor: 'border-blue-500/30',
        iconColor: 'text-blue-400',
        glowColor: 'bg-blue-500/10',
    },
    {
        key: 'japanese',
        icon: <Wrench className="w-5 h-5" />,
        color: 'from-red-500/20 to-red-600/5',
        borderColor: 'border-red-500/30',
        iconColor: 'text-red-400',
        glowColor: 'bg-red-500/10',
    },
    {
        key: 'american',
        icon: <Flag className="w-5 h-5" />,
        color: 'from-amber-500/20 to-amber-600/5',
        borderColor: 'border-amber-500/30',
        iconColor: 'text-amber-400',
        glowColor: 'bg-amber-500/10',
    },
    {
        key: 'trucks',
        icon: <Truck className="w-5 h-5" />,
        color: 'from-emerald-500/20 to-emerald-600/5',
        borderColor: 'border-emerald-500/30',
        iconColor: 'text-emerald-400',
        glowColor: 'bg-emerald-500/10',
    },
    {
        key: 'evs',
        icon: <Zap className="w-5 h-5" />,
        color: 'from-purple-500/20 to-purple-600/5',
        borderColor: 'border-purple-500/30',
        iconColor: 'text-purple-400',
        glowColor: 'bg-purple-500/10',
    },
];

// ── Marquee scroll strip brands ───────────────────────────────────────────────
const allBrands = [
    'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Porsche',
    'Toyota', 'Honda', 'Nissan', 'Mazda', 'Subaru', 'Lexus',
    'Ford', 'Chevrolet', 'GMC', 'Dodge', 'Jeep', 'RAM',
];

export const About: React.FC = () => {
    const { t } = useLanguage();
    const { openBooking } = useBooking();

    const stats = [
        { icon: <Award className="w-6 h-6" />, value: t('about.statYears'), label: t('about.statYearsLabel') },
        { icon: <Star className="w-6 h-6" />, value: t('about.statRating'), label: t('about.statRatingLabel') },
        { icon: <Users className="w-6 h-6" />, value: t('about.statCustomers'), label: t('about.statCustomersLabel') },
    ];

    const brandList = t('about.brandList');

    return (
        <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
            {/* ── Ambient background ── */}
            <div className="absolute inset-0 bg-gradient-to-b from-midnight via-steel/20 to-midnight" />

            {/* Animated orbs */}
            <motion.div
                animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-20 left-10 w-96 h-96 bg-electric/5 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
                animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
                className="absolute bottom-40 right-0 w-80 h-80 bg-success/5 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
                animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/4 rounded-full blur-3xl pointer-events-none"
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Badge ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-6"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 text-electric text-sm font-medium">
                        <Award className="w-4 h-4" />
                        {t('about.badge')}
                    </span>
                </motion.div>

                {/* ── Headline ── */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-headline font-bold text-center mb-8"
                >
                    {t('about.headline')}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-success">
                        {t('about.headlineHighlight')}
                    </span>
                </motion.h2>

                {/* ── Story + Stats grid ── */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mt-16">

                    {/* Left — Story + Desktop CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 flex flex-col h-full"
                    >
                        <p className="text-lg text-silver/90 leading-relaxed text-center lg:text-left">
                            {t('about.intro')}
                        </p>

                        {/* Mobile Stats & CTA */}
                        <div className="lg:hidden flex flex-col gap-6 py-6">
                            <div className="grid grid-cols-3 gap-2">
                                {stats.map((stat, i) => (
                                    <motion.div
                                        key={`mobile-stat-${i}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex flex-col items-center justify-center text-center gap-1 p-2 rounded bg-steel/5 border border-white/5 h-full"
                                    >
                                        <div className="text-electric mb-1">
                                            {React.cloneElement(stat.icon as React.ReactElement, { className: 'w-4 h-4' })}
                                        </div>
                                        <div className="text-lg font-bold text-silver leading-none mb-1">{stat.value}</div>
                                        <div className="text-[9px] text-gunmetal font-medium uppercase tracking-wider leading-tight">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                            <motion.button
                                onClick={openBooking}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center gap-2 py-4 px-8 bg-gradient-to-r from-electric to-[#0369A1] text-white font-semibold rounded-xl shadow-lg shadow-electric/20 hover:shadow-electric/40 transition-shadow duration-300"
                            >
                                {t('about.cta')}
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </div>

                        <p className="text-gunmetal leading-relaxed text-center lg:text-left mb-4 lg:mb-0">
                            {t('about.story')}
                        </p>

                        {/* Mobile Location Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative group mt-4 lg:hidden"
                        >
                            <div className="absolute inset-0 bg-electric/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-electric/30 transition-colors duration-300">
                                <div className="shrink-0 p-3 bg-electric/10 rounded-xl">
                                    <MapPin className="w-6 h-6 text-electric" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">{t('about.badgeDesktop')}</h4>
                                    <p className="text-silver/80 text-sm leading-relaxed"><span className="text-success font-medium mr-1">{t('about.neighborhoodsTitle')}:</span>{t('about.neighborhoods')}</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:block mt-auto pt-6">
                            <motion.button
                                onClick={openBooking}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full xl:w-4/5 flex items-center justify-center gap-2 py-4 px-8 bg-gradient-to-r from-electric to-[#0369A1] text-white font-semibold rounded-xl shadow-lg shadow-electric/20 hover:shadow-electric/40 transition-shadow duration-300"
                            >
                                {t('about.cta')}
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Right — Stats + Desktop Location Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="hidden lg:flex flex-col h-full"
                    >
                        {/* Desktop Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="relative group text-center p-6 sm:p-8 rounded-2xl bg-steel/30 backdrop-blur-sm border border-white/5 hover:border-electric/50 transition-all duration-300 cursor-default flex flex-col justify-center items-center h-full min-h-[180px]"
                                >
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-electric/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                    <div className="relative z-10">
                                        <div className="text-electric mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                            {React.cloneElement(stat.icon as React.ReactElement, { className: 'w-8 h-8' })}
                                        </div>
                                        <div className="text-3xl sm:text-4xl font-headline font-bold text-silver mb-2 group-hover:text-white transition-colors duration-300">{stat.value}</div>
                                        <div className="text-xs sm:text-sm text-gunmetal font-medium group-hover:text-electric/80 transition-colors duration-300 uppercase tracking-wide">{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Desktop Location Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative group mt-auto pt-6"
                        >
                            <div className="absolute inset-0 bg-electric/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-electric/30 transition-colors duration-300">
                                <div className="shrink-0 p-3 bg-electric/10 rounded-xl">
                                    <MapPin className="w-6 h-6 text-electric" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">{t('about.badgeDesktop')}</h4>
                                    <p className="text-silver/80 text-sm leading-relaxed"><span className="text-success font-medium mr-1">{t('about.neighborhoodsTitle')}:</span>{t('about.neighborhoods')}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* ════════════════════════════════════════════════════════
                    BRAND AUTHORITY SHOWCASE — full width below the story
                ════════════════════════════════════════════════════════ */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-24"
                >
                    {/* Section header */}
                    <div className="text-center mb-12">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 text-success text-sm font-medium mb-4"
                        >
                            <Wrench className="w-4 h-4" />
                            {t('about.brandsTitle')}
                        </motion.span>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-silver/50 text-sm uppercase tracking-widest"
                        >
                            {t('about.brandsSub')}
                        </motion.p>
                    </div>

                    {/* Brand category glass cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
                        {brandCategories.map((cat, i) => {
                            const text = typeof brandList === 'object' ? brandList[cat.key as keyof typeof brandList] as string : '';
                            const [label, makes] = text.split(':');
                            return (
                                <motion.div
                                    key={cat.key}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                                    whileHover={{ y: -6, scale: 1.02 }}
                                    className={`relative group overflow-hidden rounded-2xl border ${cat.borderColor} bg-gradient-to-br ${cat.color} backdrop-blur-sm p-6 cursor-default transition-all duration-300`}
                                >
                                    {/* Hover glow pulse */}
                                    <div className={`absolute inset-0 ${cat.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                                    {/* Top icon */}
                                    <div className={`relative z-10 inline-flex items-center justify-center w-10 h-10 rounded-xl ${cat.glowColor} border ${cat.borderColor} ${cat.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        {cat.icon}
                                    </div>

                                    {/* Label */}
                                    <h5 className={`relative z-10 font-bold text-sm uppercase tracking-widest ${cat.iconColor} mb-2`}>
                                        {label?.trim()}
                                    </h5>

                                    {/* Makes list */}
                                    <p className="relative z-10 text-silver/60 text-xs leading-relaxed">
                                        {makes?.trim()}
                                    </p>

                                    {/* Corner decoration */}
                                    <div className={`absolute -bottom-4 -right-4 w-20 h-20 rounded-full ${cat.glowColor} blur-xl group-hover:scale-150 transition-transform duration-500`} />
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* ── Marquee brand scroll strip ── */}
                    <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/3 py-5">
                        {/* Fade edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-midnight to-transparent pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-midnight to-transparent pointer-events-none" />

                        <motion.div
                            animate={{ x: ['0%', '-50%'] }}
                            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                            className="flex gap-10 whitespace-nowrap"
                        >
                            {[...allBrands, ...allBrands].map((brand, i) => (
                                <span key={i} className="text-sm font-bold text-silver/30 uppercase tracking-[0.2em] shrink-0">
                                    {brand}
                                    <span className="ml-10 text-electric/40">·</span>
                                </span>
                            ))}
                        </motion.div>
                    </div>


                </motion.div>

            </div>
        </section>
    );
};
