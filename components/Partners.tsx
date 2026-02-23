import React from 'react';
import { PARTNERS } from '../constants';
import { useLanguage } from '../context/LanguageContext';

export const Partners: React.FC = () => {
    const { t } = useLanguage();
    return (
        <div className="py-12 bg-midnight border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
                <p className="text-gunmetal text-sm uppercase tracking-widest">{t('partners.title')}</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
                    {/* Duplicate logic for infinite scroll */}
                    {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, idx) => (
                        <div key={`${partner.id}-${idx}`} className="inline-flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                            {/* Since we don't have real logos, using stylized text */}
                            <span className="text-2xl font-serif font-bold text-silver">{partner.name}</span>
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 items-center ml-16">
                    {/* Second set for seamless loop - Simplified for this demo, usually handled by css animation keyframes in tailwind config */}
                </div>
            </div>

            <style>{`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                animation: marquee 30s linear infinite;
            }
        `}</style>
        </div>
    );
};
