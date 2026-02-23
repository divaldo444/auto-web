import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Key, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useBooking } from '../context/BookingContext';

export const Concierge: React.FC = () => {
    const { t } = useLanguage();
    const { openBooking } = useBooking();

    return (
        <Section id="concierge" className="bg-steel/10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Desktop Image - Left */}
                <div className="relative order-2 lg:order-1 hidden lg:block">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] group border border-white/5"
                    >
                        <motion.img
                            src="/concierge-keys.jpg"
                            alt="Luxury Car Keys Handover"
                            animate={{
                                scale: [1, 1.05, 1],
                                rotate: [0, 0.5, 0]
                            }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="w-full h-full object-cover filter brightness-90 group-hover:brightness-110 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-60" />

                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                        {/* Floating Interaction Card */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                                x: { delay: 0.4, type: "spring", stiffness: 100 }
                            }}
                            className="absolute bottom-8 left-8 right-8 bg-midnight/40 backdrop-blur-2xl p-6 rounded-2xl border border-electric/40 shadow-[0_20px_50px_-15px_rgba(56,189,248,0.4)] z-20"
                        >
                            <div className="flex items-center gap-5">
                                <motion.div
                                    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="bg-electric/20 p-4 rounded-2xl text-electric ring-1 ring-electric/30 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                                >
                                    <Key className="w-7 h-7" />
                                </motion.div>
                                <div>
                                    <p className="text-white font-bold text-xl tracking-tight leading-none mb-2">{t('concierge.steps.s2.title')}</p>
                                    <div className="flex items-center gap-2">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                                        </span>
                                        <p className="text-sm text-silver/80 font-medium">8:00 AM • 10361 Boul Gouin O</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Glowing Decoration Behind */}
                    <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-electric/20 blur-[120px] rounded-full opacity-60" />
                    <div className="absolute -z-10 top-10 right-10 w-48 h-48 bg-success/10 blur-[100px] rounded-full opacity-40" />
                </div>

                {/* Content - Right */}
                <div className="order-1 lg:order-2 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-serif font-bold text-silver mb-6 drop-shadow-sm">{t('concierge.title')}</h2>
                        <p className="text-2xl text-electric font-medium mb-12 italic tracking-tight">{t('concierge.subtitle')}</p>

                        <div className="space-y-10 mb-12">
                            {/* Step 3: Expert Service */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 group">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="w-14 h-14 bg-steel rounded-2xl flex items-center justify-center text-electric shrink-0 border border-white/5 group-hover:border-electric/50 transition-all shadow-lg group-hover:shadow-electric/10"
                                >
                                    <Clock className="w-6 h-6" />
                                </motion.div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-2 tracking-wide uppercase">{t('concierge.steps.s3.title')}</h4>
                                    <p className="text-gunmetal leading-relaxed max-w-md">{t('concierge.steps.s3.desc')}</p>
                                </div>
                            </div>

                            {/* Step 2: We Pick Up */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 group">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: -5 }}
                                    className="w-14 h-14 bg-steel rounded-2xl flex items-center justify-center text-electric shrink-0 border border-white/5 group-hover:border-electric/50 transition-all shadow-lg group-hover:shadow-electric/10"
                                >
                                    <MapPin className="w-6 h-6" />
                                </motion.div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-2 tracking-wide uppercase">{t('concierge.steps.s2.title')}</h4>
                                    <p className="text-sm text-gunmetal leading-relaxed max-w-md">{t('concierge.steps.s2.desc')}</p>
                                </div>
                            </div>

                            {/* Mobile-Only Image Insert with Floating Card */}
                            <div className="lg:hidden relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl my-10 border border-white/10 group">
                                <motion.img
                                    src="/concierge-keys.jpg"
                                    alt="Concierge Valet Service"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    className="w-full h-full object-cover filter brightness-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-transparent to-transparent" />

                                {/* Floating Card (Mobile) */}
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{
                                        y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                                        x: { delay: 0.3 }
                                    }}
                                    className="absolute bottom-6 left-6 right-6 bg-midnight/50 backdrop-blur-xl p-5 rounded-2xl border border-electric/30 shadow-2xl"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="bg-electric/20 p-3 rounded-xl text-electric">
                                            <Key className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-base leading-none mb-1">{t('concierge.steps.s2.title')}</p>
                                            <p className="text-xs text-silver/60">8:00 AM • 10361 Boul Gouin O</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Mobile CTA */}
                            <div className="lg:hidden flex justify-center mt-10">
                                <Button variant="primary" size="lg" className="w-full text-lg py-6" onClick={openBooking}>{t('concierge.cta')}</Button>
                            </div>
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex justify-start">
                            <Button variant="primary" size="lg" className="px-10 text-lg py-6" onClick={openBooking}>{t('concierge.cta')}</Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};