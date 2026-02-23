import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { MAPS_URL } from '../constants';
import { Button } from './ui/Button';
import { MapPin, Phone, Mail, Clock, ArrowRight, CalendarDays, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PreFooterCTA: React.FC = () => {
   const { t, lang } = useLanguage();

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1
         }
      }
   };

   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
   };

   return (
      <Section id="contact" className="py-12 md:py-24">
         <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-steel/20 to-midnight border border-white/5 shadow-2xl"
         >
            {/* Background Atmosphere */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brandBlue/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-12 p-6 md:p-12 items-center">

               {/* LEFT: Emotional Hook & Action (Takes 8/12 space = 66%) */}
               <motion.div variants={itemVariants} className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left w-full mx-auto lg:mx-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/20 text-success text-xs font-bold uppercase tracking-wider mb-4 md:mb-6">
                     <CalendarDays className="w-3 h-3" />
                     <span>{t('hero.badgeRight').split('·')[0].trim()}</span>
                  </div>

                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 md:mb-6 leading-tight max-w-2xl mx-auto lg:mx-0">
                     {t('preCta.title')} <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-brandBlue">{t('preCta.titleHighlight')}</span>
                  </h2>
                  <p className="text-base md:text-lg text-gunmetal mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                     {t('preCta.subtitle')}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center lg:justify-start">
                     <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                        <a
                           href="tel:5144215555"
                           className="relative inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-midnight disabled:opacity-50 disabled:cursor-not-allowed uppercase font-sans cursor-pointer bg-steel text-silver hover:bg-electric shadow-lg shadow-black/40 px-8 py-4 text-base w-full group"
                        >
                           <span className="absolute inset-0 w-full h-full overflow-hidden rounded-lg pointer-events-none">
                              <span className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-beam" />
                           </span>
                           <span className="relative z-10 flex items-center gap-2">
                              {t('preCta.ctaSecondary')} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                           </span>
                        </a>
                     </motion.div>
                     <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                        <Button variant="outline" size="lg" onClick={() => window.open(MAPS_URL, '_blank')} className="w-full">
                           {lang === 'fr' ? 'Obtenir l\'itinéraire' : 'Get Directions'}
                        </Button>
                     </motion.div>
                  </div>
               </motion.div>

               {/* RIGHT: Interactive Info Card (Takes 4/12 space = 33% - Much more compact) */}
               <motion.div variants={itemVariants} className="lg:col-span-4 bg-midnight/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-inner flex flex-col gap-6 text-center w-full max-w-sm mx-auto lg:mr-0">

                  {/* Contact Info Row */}
                  <div className="space-y-4 w-full">
                     <h3 className="text-white/90 font-bold text-sm uppercase tracking-widest flex items-center justify-center lg:justify-start gap-2 border-b border-white/10 pb-3">
                        <MapPin className="w-4 h-4 text-electric" /> {t('footer.contactUs')}
                     </h3>
                     <div className="flex flex-col gap-2 w-full">
                        <InteractiveRow
                           icon={<Phone className="w-4 h-4" />}
                           title="514-421-5555"
                           subtitle={t('nav.callUs')}
                           href="tel:5144215555"
                        />
                        <InteractiveRow
                           icon={<MapPin className="w-4 h-4" />}
                           title="10361 Boul Gouin Ouest"
                           subtitle="Roxboro, QC"
                           href={MAPS_URL}
                        />
                        <InteractiveRow
                           icon={<Mail className="w-4 h-4" />}
                           title="garazenauto@gmail.com"
                           subtitle={t('nav.contact')}
                           href="mailto:garazenauto@gmail.com"
                        />
                     </div>
                  </div>

                  {/* Availability - Compact */}
                  {/* Walk-ins Welcome - The "Green Section" */}
                  {/* Walk-ins Welcome - The "Green Section" */}
                  <motion.div
                     whileHover={{ scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
                     className="bg-gradient-to-r from-emerald-500/20 to-success/10 border border-emerald-500/20 rounded-xl p-3 shadow-[0_0_15px_rgba(16,185,129,0.1)] cursor-default hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] transition-shadow duration-300"
                  >
                     <div className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-white font-bold text-sm tracking-wide uppercase">
                           {lang === 'fr' ? 'Sans rendez-vous bienvenue' : 'Walk-ins Welcome'}
                        </span>
                     </div>
                     <p className="text-[10px] text-emerald-100/80 mt-1 uppercase tracking-wider">
                        {lang === 'fr' ? 'Aucun rendez-vous nécessaire' : 'No appointment needed'}
                     </p>
                  </motion.div>

                  {/* Hours - Detailed List */}
                  <div className="space-y-2 w-full text-center">
                     <div className="flex items-center justify-center gap-2 mb-2">
                        <Clock className="w-3 h-3 text-silver" />
                        <span className="text-silver font-bold text-xs uppercase tracking-widest">
                           {lang === 'fr' ? 'Heures d\'ouverture' : 'Opening Hours'}
                        </span>
                     </div>
                     <div className="flex flex-col gap-1 text-xs text-gunmetal">
                        <div className="flex justify-between px-6 border-b border-white/5 pb-1">
                           <span>{t('footer.weekdays')}</span>
                           <span className="font-semibold text-white">8:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between px-6 border-b border-white/5 pb-1">
                           <span>{t('footer.saturday')}</span>
                           <span className="font-semibold text-white">8:00 AM - 3:00 PM</span>
                        </div>
                        <div className="flex justify-between px-6">
                           <span>{t('footer.sunday')}</span>
                           <span className="font-semibold text-white">9:00 AM - 3:00 PM</span>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>

         </motion.div>

      </Section >
   );
};

const InteractiveRow = ({ icon, title, subtitle, href }: { icon: React.ReactNode, title: string, subtitle: string, href: string }) => {
   return (
      <motion.a
         href={href}
         whileHover={{ scale: 1.02, x: 5 }}
         whileTap={{ scale: 0.98 }}
         className="group flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300 cursor-pointer w-full text-left"
      >
         <div className="relative shrink-0">
            <div className="relative w-8 h-8 rounded-full bg-steel/50 border border-white/10 flex items-center justify-center text-electric group-hover:text-white group-hover:bg-electric transition-colors duration-300">
               {icon}
            </div>
         </div>
         <div className="min-w-0 flex-1">
            <p className="text-silver font-semibold text-sm group-hover:text-white transition-colors duration-300 truncate">{title}</p>
            <p className="text-[10px] text-gunmetal group-hover:text-electric/80 transition-colors duration-300 truncate uppercase tracking-wide">{subtitle}</p>
         </div>
         <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRight className="w-3 h-3 text-electric" />
         </div>
      </motion.a>
   );
};