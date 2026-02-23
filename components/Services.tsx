import React, { useState, useRef } from 'react';
import { Section } from './ui/Section';
import { ALL_SERVICES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { ChevronRight, Info, AlertCircle } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { useBooking } from '../context/BookingContext';
import { useLanguage } from '../context/LanguageContext';

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'Maintenance' | 'Repairs' | 'Tires & Wheels'>('Maintenance');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(ALL_SERVICES[0].id);
  const { openBooking, setPreselectedService } = useBooking();
  const { t } = useLanguage();
  const detailsPanelRef = useRef<HTMLDivElement>(null);

  const scrollToDetails = () => {
    // Only auto-scroll on mobile (below lg breakpoint = 1024px)
    if (window.innerWidth < 1024 && detailsPanelRef.current) {
      detailsPanelRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const filteredServices = ALL_SERVICES.filter(s => s.category === activeCategory);
  const activeService = ALL_SERVICES.find(s => s.id === selectedServiceId) || ALL_SERVICES[0];

  const categories: { key: 'Maintenance' | 'Repairs' | 'Tires & Wheels'; label: string }[] = [
    { key: 'Maintenance', label: t('services.categories.maintenance') },
    { key: 'Repairs', label: t('services.categories.repairs') },
    { key: 'Tires & Wheels', label: t('services.categories.tiresWheels') },
  ];

  const handleBookService = () => {
    setPreselectedService(activeService.id);
    openBooking();
  };

  return (
    <Section id="services" className="bg-midnight py-12 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
        <h2 className="text-electric text-sm font-bold tracking-widest uppercase mb-3">{t('services.badge')}</h2>
        <h3 className="text-5xl md:text-5xl font-serif font-bold text-silver mb-6">{t('services.title')}</h3>
        <p className="text-gunmetal text-lg px-4">{t('services.subtitle')}</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:h-[750px]">
        {/* LEFT COLUMN: Navigation & List */}
        <div className="lg:col-span-5 flex flex-col h-full min-h-[500px]">
          {/* Category Tabs */}
          <div className="flex p-1 bg-steel/20 rounded-xl mb-6 overflow-x-auto shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.key);
                  const firstInCat = ALL_SERVICES.find(s => s.category === cat.key);
                  if (firstInCat) setSelectedServiceId(firstInCat.id);
                }}
                className={twMerge(
                  "flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all whitespace-nowrap cursor-pointer",
                  activeCategory === cat.key
                    ? "bg-electric text-white shadow-lg"
                    : "text-gunmetal hover:text-silver hover:bg-white/5"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Service List */}
          <div className="flex-grow overflow-y-auto space-y-3 pr-2 custom-scrollbar">
            {filteredServices.map((service) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => {
                  setSelectedServiceId(service.id);
                  scrollToDetails();
                }}
                className={twMerge(
                  "w-full text-left p-4 rounded-xl border transition-all duration-300 group flex items-center justify-between cursor-pointer",
                  selectedServiceId === service.id
                    ? "bg-steel/40 border-electric/50 shadow-[0_0_20px_-5px_rgba(46,109,157,0.3)]"
                    : "bg-transparent border-white/5 hover:bg-white/5 hover:border-white/10"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={twMerge(
                    "w-10 h-10 rounded-lg flex items-center justify-center transition-colors shrink-0",
                    selectedServiceId === service.id ? "bg-electric text-white" : "bg-midnight text-gunmetal group-hover:text-silver"
                  )}>
                    {service.icon}
                  </div>
                  <div>
                    <h4 className={twMerge(
                      "font-bold transition-colors",
                      selectedServiceId === service.id ? "text-white" : "text-silver group-hover:text-white"
                    )}>
                      {t(`services.items.${service.id}.title`)}
                    </h4>
                    <p className="text-xs text-gunmetal hidden sm:block">{t(`services.items.${service.id}.short`)}</p>
                  </div>
                </div>
                <ChevronRight className={twMerge(
                  "w-5 h-5 transition-transform",
                  selectedServiceId === service.id ? "text-electric translate-x-1" : "text-gunmetal group-hover:text-silver"
                )} />
              </motion.button>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Educational Panel (The "Why") */}
        <div ref={detailsPanelRef} className="lg:col-span-7 h-full min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="h-full bg-gradient-to-br from-steel/30 to-midnight border border-white/10 rounded-3xl p-1 md:p-1 relative overflow-hidden flex flex-col"
            >
              {/* Inner Container to handle padding and scroll */}
              <div className="absolute inset-0 p-8 flex flex-col">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-electric/10 blur-[80px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brandBlue/10 blur-[80px] rounded-full pointer-events-none" />

                {/* Scrollable Content Area */}
                <div className="flex-grow overflow-y-auto custom-scrollbar pr-4 -mr-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="px-3 py-1 rounded-full bg-electric/20 border border-electric/30 text-electric text-xs font-bold uppercase tracking-wider shrink-0">
                      {t('services.whyItMatters')}
                    </div>
                    <div className="h-px bg-white/10 flex-grow" />
                  </div>

                  <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2 leading-tight">
                    {t(`services.items.${activeService.id}.title`)}
                  </h3>
                  <p className="text-xl text-electric mb-8 font-light">
                    {t(`services.items.${activeService.id}.short`)}
                  </p>

                  <div className="bg-midnight/50 border border-white/5 rounded-2xl p-6 backdrop-blur-sm mb-8">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-alert/20 p-2 rounded-full text-alert shrink-0">
                        <AlertCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="text-silver font-bold text-lg mb-2">{t('services.whyItMatters')}</h5>
                        <p className="text-gunmetal leading-relaxed">
                          {t(`services.items.${activeService.id}.why`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fixed Footer Area */}
                <div className="mt-6 pt-6 border-t border-white/10 shrink-0 z-10 relative">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {activeService.estimatedTime && (
                      <div className="bg-white/5 rounded-lg p-4">
                        <span className="block text-gunmetal text-xs uppercase tracking-widest mb-1">{t('services.estimatedTime')}</span>
                        <span className="text-silver font-mono">{activeService.estimatedTime}</span>
                      </div>
                    )}
                    <div className={twMerge("bg-white/5 rounded-lg p-4", !activeService.estimatedTime && "col-span-2")}>
                      <span className="block text-gunmetal text-xs uppercase tracking-widest mb-1">{t('services.badge')}</span>
                      <span className="text-silver font-mono">{categories.find(c => c.key === activeCategory)?.label}</span>
                    </div>
                  </div>
                  <Button fullWidth withBeam size="lg" onClick={handleBookService}>
                    {t('services.bookService')}
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile-Only Helper Text */}
      <div className="lg:hidden mt-4 text-center text-gunmetal text-sm flex items-center justify-center gap-2">
        <Info className="w-4 h-4" />
        <span>{t('services.subtitle')}</span>
      </div>
    </Section>
  );
};