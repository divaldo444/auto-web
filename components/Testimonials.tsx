import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { Quote, Star, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Testimonials: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const testimonialKeys = ['t1', 't2', 't3', 't4', 't5', 't6'] as const;

    // Handle resize to update mobile state
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.firstElementChild?.clientWidth || 0;
            const gap = 24; // standard gap-6 is 1.5rem = 24px
            const scrollAmount = cardWidth + gap;

            let newIndex = activeIndex;

            if (direction === 'left') {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                newIndex = Math.max(0, activeIndex - 1);
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                newIndex = Math.min(testimonialKeys.length - 1, activeIndex + 1);
            }
            setActiveIndex(newIndex);
        }
    };

    // Update active index on scroll
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.firstElementChild?.clientWidth || 0;
            const gap = 24;
            const scrollPosition = container.scrollLeft;
            const index = Math.round(scrollPosition / (cardWidth + gap));
            setActiveIndex(index);
        }
    };

    return (
        <Section id="reviews" className="bg-midnight py-20 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-electric/5 to-transparent pointer-events-none" />

            {/* Soft Glow Behind Cards */}
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-electric/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl text-center md:text-left mx-auto md:mx-0"
                >
                    <h2 className="text-electric text-sm font-bold tracking-widest uppercase mb-3 flex items-center justify-center md:justify-start gap-2">
                        <Star className="w-4 h-4" /> {t('testimonials.badge')}
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-serif font-bold text-silver leading-tight">
                        {t('testimonials.title')} <br className="hidden md:block" /> {t('testimonials.titleBreak')}
                    </h3>
                </motion.div>

                {/* Desktop Rating Badge */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hidden md:flex shrink-0"
                >
                    <div className="bg-steel/30 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/5 flex flex-col items-center gap-2 shadow-xl ring-1 ring-white/10">
                        <div className="flex items-center gap-3">
                            <span className="text-3xl font-bold text-white font-sans">★</span>
                            <div className="flex flex-col items-start">
                                <span className="text-sm font-bold text-silver">{t('testimonials.badgeDesktop')}</span>
                                <span className="text-[10px] text-gunmetal uppercase tracking-wider font-bold mt-1">{t('testimonials.badgeDesktopSub')}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Carousel Container */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative group"
            >

                {/* Navigation Buttons (Desktop) */}
                <div className="hidden md:flex justify-end gap-3 mb-4 absolute -top-20 right-0 z-20">
                    {/* Moved these out or keep them floaty? Let's keep them floaty on sides or standard nav top right?
                        Design choice: Floating on sides for "immersive" feel mentioned in prompt.
                     */}
                </div>


                {/* Cards Scroll Area */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex gap-6 overflow-x-auto pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth"
                >
                    {testimonialKeys.map((key, idx) => (
                        <div key={key} className="min-w-[85vw] sm:min-w-[400px] md:min-w-[calc(33.333%-16px)] snap-center">
                            <Card
                                delay={idx * 0.1}
                                className={`bg-steel/10 border-white/5 h-full flex flex-col justify-between transition-all duration-500 hover:bg-steel/20 group/card ${idx === activeIndex ? 'ring-1 ring-electric/30' : ''}`}
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-10 h-10 rounded-full bg-electric/10 flex items-center justify-center group-hover/card:bg-electric/20 transition-colors">
                                            <Quote className="w-5 h-5 text-electric" />
                                        </div>
                                        <div className="flex text-[#F4B400] gap-0.5 text-xs">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-3 h-3 fill-current" />
                                            ))}
                                        </div>
                                    </div>

                                    <p className="text-silver/90 leading-relaxed mb-6 font-medium text-lg italic">
                                        "{t(`testimonials.items.${key}.content`)}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                    <div className="relative">
                                        <img
                                            src={`https://picsum.photos/100/100?random=${idx + 10}`}
                                            alt={t(`testimonials.items.${key}.name`)}
                                            className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10 group-hover/card:ring-electric/50 transition-all"
                                        />
                                        <div className="absolute -bottom-1 -right-1 bg-midnight rounded-full p-0.5">
                                            <ShieldCheck className="w-3.5 h-3.5 text-success" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm tracking-wide">{t(`testimonials.items.${key}.name`)}</h4>
                                        <p className="text-gunmetal text-xs font-semibold uppercase tracking-wider mt-0.5">{t(`testimonials.items.${key}.role`)}</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}

                    {/* End Spacer for Mobile to allow last card to be centered easily */}
                    <div className="min-w-[4vw] md:hidden snap-start" />
                </div>

                {/* Premium Navigation Indicator */}
                <div className="flex justify-center items-center mt-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-steel/10 backdrop-blur-xl border border-white/5 shadow-lg shadow-black/20">
                        <button
                            onClick={() => scroll('left')}
                            disabled={activeIndex === 0}
                            className="w-10 h-10 rounded-full flex items-center justify-center text-gunmetal hover:text-electric hover:bg-electric/10 transition-all duration-300 disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-gunmetal"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-1.5 px-2">
                            {testimonialKeys.slice(0, isMobile ? testimonialKeys.length : testimonialKeys.length - 2).map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        if (scrollContainerRef.current) {
                                            const container = scrollContainerRef.current;
                                            const cardWidth = container.firstElementChild?.clientWidth || 0;
                                            const gap = 24;
                                            container.scrollTo({ left: idx * (cardWidth + gap), behavior: 'smooth' });
                                            setActiveIndex(idx);
                                        }
                                    }}
                                    className={`rounded-full transition-all duration-500 ease-out ${idx === activeIndex
                                        ? 'w-8 h-2 bg-gradient-to-r from-electric to-electric/80 shadow-[0_0_12px_rgba(56,189,248,0.5)]'
                                        : 'w-2 h-2 bg-white/15 hover:bg-white/30'
                                        }`}
                                    aria-label={`Go to review ${idx + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => scroll('right')}
                            disabled={activeIndex >= testimonialKeys.length - 1}
                            className="w-10 h-10 rounded-full flex items-center justify-center text-gunmetal hover:text-electric hover:bg-electric/10 transition-all duration-300 disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-gunmetal"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
};