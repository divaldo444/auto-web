import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/Button';
import { BrandLogo } from './ui/BrandLogo';
import { useBooking } from '../context/BookingContext';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openBooking } = useBooking();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.concierge'), href: '#concierge' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.reviews'), href: '#reviews' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav
      className={`fixed z-50 transition-all duration-500 border ${isScrolled
        ? 'top-4 left-4 right-4 bg-midnight/90 backdrop-blur-lg border-white/10 py-3 rounded-2xl shadow-2xl shadow-black/30'
        : 'top-0 left-0 right-0 bg-transparent border-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="block group">
            <BrandLogo />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-white/90 hover:text-electric transition-all duration-300 uppercase tracking-wider cursor-pointer hover:scale-105"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA & Language Toggle & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* ── Language Toggle (Desktop & Mobile) ── */}
            {/* ── Language Toggle (Desktop Only) ── */}
            <div className="relative hidden md:flex items-center bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/10 shadow-inner">
              {(['en', 'fr'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`relative z-10 px-3 py-1.5 text-xs font-bold rounded-full transition-colors duration-300 outline-none ${lang === l ? 'text-white' : 'text-silver hover:text-white'
                    }`}
                >
                  {l.toUpperCase()}
                  {lang === l && (
                    <motion.div
                      layoutId="active-lang"
                      className="absolute inset-0 bg-electric rounded-full shadow-[0_0_15px_rgba(46,109,157,0.5)] -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Desktop Phone - Styled Box format */}
            <a
              href="tel:5144215555"
              className="hidden lg:flex items-center gap-3 px-4 py-2 rounded-lg bg-steel/20 border border-white/5 hover:border-electric/30 hover:bg-steel/40 transition-all group"
            >
              <div className="w-8 h-8 rounded-md bg-electric/10 flex items-center justify-center text-electric group-hover:bg-electric group-hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gunmetal uppercase tracking-wider leading-none mb-0.5">{t('nav.callUs')}</span>
                <span className="text-sm font-bold text-silver group-hover:text-white transition-colors leading-none">514-421-5555</span>
              </div>
            </a>

            <Button variant="secondary" size="sm" className="hidden sm:flex" onClick={openBooking}>
              {t('nav.bookNow')}
            </Button>

            {/* Mobile Animated Call Button (Quick Access) */}
            <a
              href="tel:5144215555"
              className="md:hidden relative flex items-center justify-center w-10 h-10 rounded-full bg-electric text-white shadow-lg shadow-electric/40 active:scale-95 transition-transform"
              aria-label="Call Garazen Auto"
            >
              {/* Pulsing Ring Effect */}
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-75 duration-1000"></span>
              <Phone className="w-5 h-5 relative z-10 fill-current" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-silver hover:bg-white/10 rounded-lg transition-colors ml-1 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-midnight border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      const targetId = item.href.replace('#', '');
                      const element = document.getElementById(targetId);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState(null, '', item.href);
                      } else {
                        window.location.href = item.href;
                      }
                    }, 300);
                  }}
                  className="block text-lg font-medium text-silver hover:text-electric py-2 border-b border-white/5 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile Menu Actions */}
              <div className="pt-6 flex flex-col gap-6">
                {/* Language Toggle (Mobile) */}
                <div className="flex justify-center">
                  <div className="relative flex items-center bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/10 shadow-inner">
                    {(['en', 'fr'] as const).map((l) => (
                      <button
                        key={l}
                        onClick={() => setLang(l)}
                        className={`relative z-10 px-6 py-2 text-sm font-bold rounded-full transition-colors duration-300 outline-none ${lang === l ? 'text-white' : 'text-silver hover:text-white'
                          }`}
                      >
                        {l.toUpperCase()}
                        {lang === l && (
                          <motion.div
                            layoutId="active-lang-mobile"
                            className="absolute inset-0 bg-electric rounded-full shadow-[0_0_15px_rgba(46,109,157,0.5)] -z-10"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Mobile Phone - Centered & Green (Zen/Go) */}
                <a
                  href="tel:5144215555"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all group"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  <span className="text-lg font-bold">514-421-5555</span>
                </a>

                <Button fullWidth size="lg" onClick={() => { setMobileMenuOpen(false); openBooking(); }}>
                  {t('nav.bookAppointment')}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};