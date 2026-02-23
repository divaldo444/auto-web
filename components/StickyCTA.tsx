import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { Phone, Calendar } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { useLanguage } from '../context/LanguageContext';

export const StickyCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { openBooking } = useBooking();
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-40 bg-midnight/90 backdrop-blur-lg border-t border-white/10 p-4 md:hidden shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)]"
                >
                    <div className="flex gap-3">
                        <Button
                            variant="primary"
                            className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white border-0 shadow-lg shadow-green-900/20 whitespace-nowrap"
                            onClick={() => window.location.href = 'tel:5144215555'}
                        >
                            <Phone className="w-4 h-4 mr-2" /> {t('stickyCta.call')}
                        </Button>
                        <Button variant="primary" className="flex-1 whitespace-nowrap" withBeam onClick={openBooking}>
                            <Calendar className="w-4 h-4 mr-2" /> {t('stickyCta.button')}
                        </Button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};