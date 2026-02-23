import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PrivacyPolicyProps {
    isOpen: boolean;
    onClose: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen, onClose }) => {
    const { t } = useLanguage();

    const sections = [
        { title: t('privacy.collectTitle'), body: t('privacy.collectBody') },
        { title: t('privacy.useTitle'), body: t('privacy.useBody') },
        { title: t('privacy.protectTitle'), body: t('privacy.protectBody') },
        { title: t('privacy.cookiesTitle'), body: t('privacy.cookiesBody') },
        { title: t('privacy.rightsTitle'), body: t('privacy.rightsBody') },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.95 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed inset-4 sm:inset-8 lg:inset-16 z-50 bg-midnight border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-steel/20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-electric" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-headline font-bold text-silver">
                                        {t('privacy.title')}
                                    </h2>
                                    <p className="text-xs text-gunmetal">{t('privacy.lastUpdated')}</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-lg hover:bg-white/5 transition-colors text-gunmetal hover:text-silver"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Scrollable content */}
                        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8">
                            {/* Intro */}
                            <p className="text-silver/90 text-lg leading-relaxed">
                                {t('privacy.intro')}
                            </p>

                            {/* Sections */}
                            {sections.map((section, i) => (
                                <div key={i} className="space-y-3">
                                    <h3 className="text-lg font-semibold text-silver flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-electric" />
                                        {section.title}
                                    </h3>
                                    <p className="text-gunmetal leading-relaxed pl-4 border-l-2 border-white/5">
                                        {section.body}
                                    </p>
                                </div>
                            ))}

                            {/* Contact section */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold text-silver flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-electric" />
                                    {t('privacy.contactTitle')}
                                </h3>
                                <p className="text-gunmetal leading-relaxed pl-4 border-l-2 border-white/5 mb-4">
                                    {t('privacy.contactBody')}
                                </p>
                                <div className="pl-4 space-y-3">
                                    <div className="flex items-center gap-3 text-sm text-gunmetal">
                                        <Mail className="w-4 h-4 text-electric" />
                                        <a href="mailto:garazenauto@gmail.com" className="hover:text-electric transition-colors">
                                            garazenauto@gmail.com
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gunmetal">
                                        <Phone className="w-4 h-4 text-electric" />
                                        <a href="tel:5144215555" className="hover:text-electric transition-colors">
                                            (514) 421-5555
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gunmetal">
                                        <MapPin className="w-4 h-4 text-electric" />
                                        <span>10361 Boul Gouin Ouest, Roxboro, QC H8Y 1S1</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-4 border-t border-white/10 bg-steel/10">
                            <button
                                onClick={onClose}
                                className="w-full py-3 rounded-xl bg-electric/10 text-electric font-semibold hover:bg-electric/20 transition-colors"
                            >
                                {t('privacy.close')}
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
