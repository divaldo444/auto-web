import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Calendar, User, Car, Wrench, MessageSquare, ChevronRight, Clock, Gauge, Truck } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { Button } from './ui/Button';
import { ALL_SERVICES } from '../constants';
import { twMerge } from 'tailwind-merge';
import { useLanguage } from '../context/LanguageContext';
import { submitBooking } from '../services/bookingService';

// ── Time slots ──────────────────────────────────────────────────────
const TIME_SLOTS = [
    { value: '08:00', label: '8:00 AM' }, { value: '08:30', label: '8:30 AM' },
    { value: '09:00', label: '9:00 AM' }, { value: '09:30', label: '9:30 AM' },
    { value: '10:00', label: '10:00 AM' }, { value: '10:30', label: '10:30 AM' },
    { value: '11:00', label: '11:00 AM' }, { value: '11:30', label: '11:30 AM' },
    { value: '12:00', label: '12:00 PM' }, { value: '12:30', label: '12:30 PM' },
    { value: '13:00', label: '1:00 PM' }, { value: '13:30', label: '1:30 PM' },
    { value: '14:00', label: '2:00 PM' }, { value: '14:30', label: '2:30 PM' },
    { value: '15:00', label: '3:00 PM' }, { value: '15:30', label: '3:30 PM' },
    { value: '16:00', label: '4:00 PM' }, { value: '16:30', label: '4:30 PM' },
    { value: '17:00', label: '5:00 PM' },
];

// ── Min date = today ────────────────────────────────────────────────
const getTodayISO = () => new Date().toISOString().split('T')[0];

type Step = 'form' | 'success' | 'error';

export const BookingModal: React.FC = () => {
    const { isBookingOpen, closeBooking, preselectedService } = useBooking();
    const [step, setStep] = useState<Step>('form');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const { t, lang } = useLanguage();

    // ── Form state ──────────────────────────────────────────────────
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        // Vehicle
        make: '',
        model: '',
        year: '',
        mileage: '',
        // Appointment
        preferredDate: '',
        preferredTime: '',
        // Services & notes
        selectedServices: preselectedService ? [preselectedService] : [] as string[],
        comments: '',
        needsConcierge: false,
    });

    const set = (field: string, value: unknown) =>
        setFormData(prev => ({ ...prev, [field]: value }));

    // ── Submit ──────────────────────────────────────────────────────
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg('');

        const result = await submitBooking({
            ...formData,
            locale: lang,
            timestamp: new Date().toISOString(),
        });

        setIsLoading(false);
        if (result.success) {
            setStep('success');
        } else {
            setErrorMsg(result.error ?? 'Something went wrong.');
            setStep('error');
        }
    };

    const handleTryAgain = () => {
        setStep('form');
        setErrorMsg('');
    };

    const toggleService = (id: string) =>
        set('selectedServices',
            formData.selectedServices.includes(id)
                ? formData.selectedServices.filter(s => s !== id)
                : [...formData.selectedServices, id]
        );

    return (
        <AnimatePresence>
            {isBookingOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeBooking}
                        className="fixed inset-0 bg-midnight/80 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-midnight border border-white/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl pointer-events-auto custom-scrollbar flex flex-col">

                            {/* Header */}
                            <div className="sticky top-0 bg-midnight/95 backdrop-blur z-10 border-b border-white/5 p-6 flex justify-between items-center">
                                <div>
                                    <h2 className="text-2xl font-serif font-bold text-silver">
                                        {step === 'form' ? t('booking.title') : step === 'success' ? t('booking.successTitle') : (lang === 'fr' ? 'Une erreur est survenue' : 'Something went wrong')}
                                    </h2>
                                    <p className="text-gunmetal text-sm">
                                        {step === 'form'
                                            ? (lang === 'fr' ? 'Parlez-nous de vos besoins.' : 'Tell us about your vehicle needs.')
                                            : step === 'success'
                                                ? (lang === 'fr' ? 'Nous vous contacterons sous peu.' : 'We will be in touch shortly.')
                                                : (lang === 'fr' ? 'Veuillez réessayer ou nous appeler.' : 'Please try again or call us directly.')}
                                    </p>
                                </div>
                                <button onClick={closeBooking} className="p-2 hover:bg-white/5 rounded-full text-gunmetal hover:text-white transition-colors cursor-pointer" aria-label="Close booking modal">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6 md:p-8">

                                {/* ── FORM ────────────────────────────────────── */}
                                {step === 'form' && (
                                    <form onSubmit={handleSubmit} className="space-y-8">

                                        {/* Section 1: Contact Info */}
                                        <div className="space-y-4">
                                            <h3 className="text-electric text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                                <User className="w-4 h-4" /> {lang === 'fr' ? 'Vos coordonnées' : 'Your Details'}
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <Input
                                                    label={t('booking.name')}
                                                    placeholder={lang === 'fr' ? 'Jean Dupont' : 'John Doe'}
                                                    required
                                                    value={formData.name}
                                                    onChange={e => set('name', e.target.value)}
                                                />
                                                <Input
                                                    label={t('booking.phone')}
                                                    placeholder="(514) 555-0123"
                                                    required
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={e => set('phone', e.target.value)}
                                                />
                                                <Input
                                                    label={`${t('booking.email')} (${lang === 'fr' ? 'Facultatif' : 'Optional'})`}
                                                    placeholder="jean@example.com"
                                                    type="email"
                                                    className="md:col-span-2"
                                                    value={formData.email}
                                                    onChange={e => set('email', e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        {/* Section 2: Appointment Date & Time */}
                                        <div className="space-y-4">
                                            <h3 className="text-electric text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                                <Calendar className="w-4 h-4" /> {lang === 'fr' ? 'Date & Heure' : 'Appointment Date & Time'}
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <Input
                                                    label={lang === 'fr' ? 'Date préférée' : 'Preferred Date'}
                                                    type="date"
                                                    required
                                                    min={getTodayISO()}
                                                    value={formData.preferredDate}
                                                    onChange={e => set('preferredDate', e.target.value)}
                                                />
                                                <div className="space-y-1.5 group relative">
                                                    <label className="block text-xs font-bold text-gunmetal uppercase tracking-wide group-focus-within:text-electric transition-colors">
                                                        {lang === 'fr' ? 'Heure préférée' : 'Preferred Time'} *
                                                    </label>
                                                    <div className="relative">
                                                        <select
                                                            required
                                                            value={formData.preferredTime}
                                                            onChange={e => set('preferredTime', e.target.value)}
                                                            className="w-full bg-midnight border border-white/10 rounded-lg px-4 py-3 text-silver focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-all appearance-none cursor-pointer"
                                                        >
                                                            <option value="" disabled>{lang === 'fr' ? 'Choisir une heure' : 'Select a time'}</option>
                                                            {TIME_SLOTS.map(slot => (
                                                                <option key={slot.value} value={slot.value} className="bg-midnight">{slot.label}</option>
                                                            ))}
                                                        </select>
                                                        <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gunmetal pointer-events-none" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Section 3: Vehicle Info */}
                                        <div className="space-y-4">
                                            <h3 className="text-electric text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                                <Car className="w-4 h-4" /> {lang === 'fr' ? 'Information du véhicule' : 'Vehicle Information'}
                                            </h3>
                                            <div className="grid grid-cols-3 gap-4">
                                                <Input
                                                    label={lang === 'fr' ? 'Année' : 'Year'}
                                                    placeholder="2018"
                                                    required
                                                    value={formData.year}
                                                    onChange={e => set('year', e.target.value)}
                                                />
                                                <Input
                                                    label={lang === 'fr' ? 'Marque' : 'Make'}
                                                    placeholder="Honda"
                                                    required
                                                    value={formData.make}
                                                    onChange={e => set('make', e.target.value)}
                                                />
                                                <Input
                                                    label={lang === 'fr' ? 'Modèle' : 'Model'}
                                                    placeholder="Civic"
                                                    required
                                                    value={formData.model}
                                                    onChange={e => set('model', e.target.value)}
                                                />
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <Input
                                                    label={`${lang === 'fr' ? 'Kilométrage' : 'Mileage'} (km) (${lang === 'fr' ? 'Facultatif' : 'Optional'})`}
                                                    placeholder={lang === 'fr' ? 'ex: 85000' : 'e.g. 85000'}
                                                    type="number"
                                                    value={formData.mileage}
                                                    onChange={e => set('mileage', e.target.value)}
                                                />
                                                {/* Concierge toggle */}
                                                <div className="flex items-end pb-0.5">
                                                    <button
                                                        type="button"
                                                        onClick={() => set('needsConcierge', !formData.needsConcierge)}
                                                        className={twMerge(
                                                            "w-full flex items-center gap-3 p-3 rounded-lg border text-left transition-all cursor-pointer",
                                                            formData.needsConcierge
                                                                ? "bg-electric/20 border-electric text-white"
                                                                : "bg-steel/10 border-white/5 text-gunmetal hover:bg-steel/20"
                                                        )}
                                                    >
                                                        <Truck className="w-5 h-5 shrink-0" />
                                                        <div>
                                                            <p className="text-sm font-semibold leading-tight">
                                                                {lang === 'fr' ? 'Cueillette Conciergerie' : 'Concierge Pick-up'}
                                                            </p>
                                                            <p className="text-xs opacity-70 mt-0.5">
                                                                {lang === 'fr' ? 'On vient chercher votre auto' : "We come to you"}
                                                            </p>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Section 4: Services */}
                                        <div className="space-y-4">
                                            <h3 className="text-electric text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                                <Wrench className="w-4 h-4" /> {lang === 'fr' ? 'Services demandés' : 'Requested Services'}
                                            </h3>
                                            {(['Maintenance', 'Repairs', 'Tires & Wheels'] as const).map(category => {
                                                const categoryServices = ALL_SERVICES.filter(s => s.category === category);
                                                if (categoryServices.length === 0) return null;
                                                const categoryLabels: Record<string, { en: string; fr: string }> = {
                                                    'Maintenance': { en: 'Maintenance', fr: 'Entretien' },
                                                    'Repairs': { en: 'Repairs', fr: 'Réparations' },
                                                    'Tires & Wheels': { en: 'Tires & Wheels', fr: 'Pneus & Roues' },
                                                };
                                                return (
                                                    <div key={category} className="space-y-2">
                                                        <p className="text-gunmetal text-[11px] font-semibold uppercase tracking-wider">
                                                            {lang === 'fr' ? categoryLabels[category].fr : categoryLabels[category].en}
                                                        </p>
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                            {categoryServices.map(service => (
                                                                <button
                                                                    key={service.id}
                                                                    type="button"
                                                                    onClick={() => toggleService(service.id)}
                                                                    className={twMerge(
                                                                        "flex items-center gap-3 p-3 rounded-lg border text-left transition-all cursor-pointer",
                                                                        formData.selectedServices.includes(service.id)
                                                                            ? "bg-electric/20 border-electric text-white"
                                                                            : "bg-steel/10 border-white/5 text-gunmetal hover:bg-steel/20"
                                                                    )}
                                                                >
                                                                    <div className={twMerge(
                                                                        "w-4 h-4 rounded border flex items-center justify-center shrink-0",
                                                                        formData.selectedServices.includes(service.id)
                                                                            ? "bg-electric border-electric"
                                                                            : "border-gunmetal"
                                                                    )}>
                                                                        {formData.selectedServices.includes(service.id) && <CheckCircle className="w-3 h-3 text-white" />}
                                                                    </div>
                                                                    <span className="text-sm font-medium">{t(`services.items.${service.id}.title`)}</span>
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* Section 5: Problem Description */}
                                        <div className="space-y-4">
                                            <h3 className="text-electric text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                                <MessageSquare className="w-4 h-4" /> {lang === 'fr' ? 'Décrivez le problème' : 'Describe the Problem'}
                                            </h3>
                                            <div className="relative group">
                                                <textarea
                                                    rows={3}
                                                    className="w-full bg-midnight border border-white/10 rounded-lg px-4 py-3 text-silver placeholder:text-gunmetal/50 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-all resize-none"
                                                    placeholder={lang === 'fr'
                                                        ? 'Ex: Bruit de craquement à gauche sur les bosses, voyant moteur allumé depuis 3 jours...'
                                                        : 'E.g. Knocking noise from front left on bumps, check engine light on for 3 days...'}
                                                    value={formData.comments}
                                                    onChange={e => set('comments', e.target.value)}
                                                />
                                                <div className="absolute inset-0 rounded-lg bg-electric/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <Button
                                                type="submit"
                                                fullWidth
                                                withBeam
                                                size="lg"
                                                disabled={isLoading}
                                                className="disabled:opacity-70"
                                            >
                                                {isLoading ? (
                                                    <span className="flex items-center gap-2">
                                                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        {lang === 'fr' ? 'Envoi en cours...' : 'Booking...'}
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center gap-2">
                                                        {t('booking.submit')} <ChevronRight className="w-4 h-4" />
                                                    </span>
                                                )}
                                            </Button>
                                        </div>
                                    </form>
                                )}

                                {/* ── SUCCESS ─────────────────────────────────── */}
                                {step === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center text-center py-12"
                                    >
                                        <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mb-6 ring-1 ring-success/30">
                                            <CheckCircle className="w-10 h-10 text-success" />
                                        </div>
                                        <h3 className="text-3xl font-serif font-bold text-white mb-4">{t('booking.successTitle')}</h3>
                                        <p className="text-gunmetal max-w-md mb-2">
                                            {lang === 'fr' ? (
                                                <>Merci, <span className="text-silver font-bold">{formData.name}</span>. Votre rendez-vous pour votre <span className="text-silver font-bold">{formData.year} {formData.make} {formData.model}</span> est confirmé.</>
                                            ) : (
                                                <>Thanks, <span className="text-silver font-bold">{formData.name}</span>. Your appointment for your <span className="text-silver font-bold">{formData.year} {formData.make} {formData.model}</span> is confirmed.</>
                                            )}
                                        </p>
                                        <p className="text-gunmetal/70 text-sm max-w-md mb-8">
                                            {lang === 'fr'
                                                ? `📅 ${formData.preferredDate} à ${TIME_SLOTS.find(s => s.value === formData.preferredTime)?.label ?? formData.preferredTime} · Notre équipe vous appellera au ${formData.phone} pour confirmer.`
                                                : `📅 ${formData.preferredDate} at ${TIME_SLOTS.find(s => s.value === formData.preferredTime)?.label ?? formData.preferredTime} · Our team will call you at ${formData.phone} to confirm.`
                                            }
                                        </p>
                                        <Button onClick={closeBooking} variant="outline">{t('booking.successCta')}</Button>
                                    </motion.div>
                                )}

                                {/* ── ERROR ───────────────────────────────────── */}
                                {step === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center text-center py-12"
                                    >
                                        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6 ring-1 ring-red-500/30">
                                            <AlertCircle className="w-10 h-10 text-red-400" />
                                        </div>
                                        <h3 className="text-2xl font-serif font-bold text-white mb-4">
                                            {lang === 'fr' ? 'Une erreur est survenue' : 'Booking failed'}
                                        </h3>
                                        <p className="text-gunmetal max-w-md mb-2">{errorMsg}</p>
                                        <p className="text-gunmetal/70 text-sm max-w-md mb-8">
                                            {lang === 'fr'
                                                ? "Vous pouvez réessayer ou nous appeler directement au (514) 696-9303."
                                                : "You can try again or call us directly at (514) 696-9303."}
                                        </p>
                                        <div className="flex gap-3">
                                            <Button onClick={handleTryAgain} variant="outline">
                                                {lang === 'fr' ? 'Réessayer' : 'Try Again'}
                                            </Button>
                                            <Button as="a" href="tel:+15146969303">
                                                {lang === 'fr' ? 'Nous appeler' : 'Call Us'}
                                            </Button>
                                        </div>
                                    </motion.div>
                                )}

                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

// ── Input component ──────────────────────────────────────────────────
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input: React.FC<InputProps> = ({ label, className, ...props }) => (
    <div className={twMerge("space-y-1.5 group relative", className)}>
        <label className="block text-xs font-bold text-gunmetal uppercase tracking-wide group-focus-within:text-electric transition-colors">
            {label}
        </label>
        <div className="relative">
            <input
                className="w-full bg-midnight border border-white/10 rounded-lg px-4 py-3 text-silver placeholder:text-gunmetal/50 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-all"
                {...props}
            />
            <div className="absolute inset-0 rounded-lg bg-electric/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity" />
        </div>
    </div>
);