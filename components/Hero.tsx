
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CalendarDays, MapPin } from 'lucide-react';
import { Button } from './ui/Button';
import { HolographicEngine } from './HolographicEngine';
import { useBooking } from '../context/BookingContext';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { openBooking } = useBooking();
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-midnight">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mesh Gradient Background */}
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] bg-steel/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-electric/10 rounded-full blur-[100px]" />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Mobile Holographic Background */}
      <div className="absolute inset-0 lg:hidden pointer-events-none z-[1]">
        <div className="absolute inset-0 flex items-start justify-center pt-40 lg:items-center opacity-40">
          <HolographicEngine mobileLayout={true} />
        </div>
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/90 via-midnight/40 to-midnight/90" />
      </div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Top Badges */}
            <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 border border-electric/20 backdrop-blur-sm">
                <MapPin className="w-3 h-3 text-electric" />
                <span className="text-xs font-bold tracking-wider text-electric uppercase whitespace-nowrap">{t('hero.badgeLeft')}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/20 backdrop-blur-sm">
                <CalendarDays className="w-3 h-3 text-success" />
                <span className="text-xs font-bold tracking-wider text-success uppercase whitespace-nowrap">{t('hero.badgeRight')}</span>
              </div>
            </div>

            {/* Mobile: Stacked & Big */}
            <h1 className="lg:hidden flex flex-col items-center font-serif font-bold text-silver mb-8 leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl text-white tracking-wide mb-2"
              >
                {t('hero.headlinePrefix')}
              </motion.span>

              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                className="relative inline-block mb-4"
              >
                <span className="text-6xl text-silver/50 line-through decoration-alert decoration-2">
                  {t('hero.headlineHighlight')}
                </span>
                <span className="text-6xl text-white">.</span>
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-2xl text-white tracking-wide mb-2"
              >
                {t('hero.headlineSubPrefix')}
              </motion.span>

              <motion.span
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-electric to-success drop-shadow-[0_0_25px_rgba(74,222,128,0.4)]"
              >
                Zen<span className="text-white">.</span>
              </motion.span>
            </h1>

            {/* Desktop: Original inline */}
            <h1 className="hidden lg:block text-4xl lg:text-[3.5rem] xl:text-7xl font-serif font-bold text-silver leading-tight mb-6">
              <span className="sr-only">{t('hero.srOnly')}</span>
              {t('hero.headlinePrefix')}
              <span className="text-gunmetal line-through decoration-alert decoration-2">
                {t('hero.headlineHighlight')}
              </span>. <br />
              {t('hero.headlineSubPrefix')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-success">Zen</span>.
            </h1>

            <p className={`text-base lg:text-lg text-gunmetal leading-relaxed max-w-lg font-medium pl-4 pr-4 lg:p-0 ${language === 'fr' ? 'mt-8 lg:mt-0 mb-8' : 'mb-8'}`}>
              {t('hero.subtext')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-6">
              <Button size="lg" withBeam onClick={openBooking} className="w-full sm:w-auto px-8 py-6 text-base font-semibold shadow-xl shadow-electric/20 group">
                {t('hero.ctaPrimary')} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-6 text-base text-silver border-white/20 hover:bg-white/5 hover:text-white transition-colors"
              >
                {t('nav.services')}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right Visual - Holographic Engine (Desktop Only) */}
        < motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <HolographicEngine />
        </motion.div >
      </div >

      {/* Scroll Indicator */}
      < motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gunmetal"
      >
        <div className="w-6 h-10 border-2 border-gunmetal/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-1 bg-electric rounded-full" />
        </div>
      </motion.div >
    </section >
  );
};