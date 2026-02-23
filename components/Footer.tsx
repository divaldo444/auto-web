import React, { useState } from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { MAPS_URL } from '../constants';
import { BrandLogo } from './ui/BrandLogo';
import { useLanguage } from '../context/LanguageContext';
import { PrivacyPolicy } from './PrivacyPolicy';

/* Custom TikTok icon — lucide-react doesn't include it */
const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.18 8.18 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.13z" />
  </svg>
);

export const Footer: React.FC = () => {
  const { t, lang } = useLanguage();
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const serviceLinks = lang === 'fr'
    ? ['Diagnostics', 'Entretien', 'Freins & Suspension', 'Pneus & Roues', 'Navette']
    : ['Diagnostics', 'Maintenance', 'Brakes & Suspension', 'Tires & Wheels', 'Concierge'];

  /* Careers mailto with pre-filled template */
  const careersMailto = `mailto:garazenauto@gmail.com?subject=${encodeURIComponent(
    lang === 'fr' ? 'Demande de Carrière — Garazen Auto' : 'Career Inquiry — Garazen Auto'
  )}&body=${encodeURIComponent(
    lang === 'fr'
      ? 'Bonjour Garazen Auto,\n\nJe suis intéressé(e) par les opportunités de carrière.\n\nVeuillez trouver mon CV ci-joint.\n\nNom : \nTéléphone : \nPoste souhaité : '
      : 'Hi Garazen Auto,\n\nI am interested in career opportunities.\n\nPlease find my resume attached.\n\nName: \nPhone: \nPosition of Interest: '
  )}`;

  const companyLinks = lang === 'fr'
    ? [
      { label: 'Notre Histoire', href: '#about' },
      { label: 'Carrières', href: careersMailto },
      { label: 'Politique de confidentialité', href: '#', onClick: () => setPrivacyOpen(true) },
    ]
    : [
      { label: 'Our Story', href: '#about' },
      { label: 'Careers', href: careersMailto },
      { label: 'Privacy Policy', href: '#', onClick: () => setPrivacyOpen(true) },
    ];

  /* Social links — placeholders until user provides URLs */
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <TikTokIcon className="w-5 h-5" />, href: '#', label: 'TikTok' },
  ];

  return (
    <>
      <footer className="bg-midnight border-t border-white/5 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1 text-center md:text-left">
              <a href="#" className="inline-block mb-6 mx-auto md:mx-0">
                <BrandLogo />
              </a>
              <p className="text-gunmetal text-sm leading-relaxed mb-6">
                {t('footer.description')}
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                {socialLinks.map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target={social.href !== '#' ? '_blank' : undefined}
                    rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                    className="text-gunmetal hover:text-electric transition-colors cursor-pointer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-silver font-bold mb-6">{t('nav.services')}</h4>
              <ul className="space-y-4 text-sm text-gunmetal">
                {serviceLinks.map(link => (
                  <li key={link}><a href="#services" className="hover:text-electric transition-colors cursor-pointer">{link}</a></li>
                ))}
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-silver font-bold mb-6">{lang === 'fr' ? 'Entreprise' : 'Company'}</h4>
              <ul className="space-y-4 text-sm text-gunmetal">
                {companyLinks.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={link.onClick ? (e) => { e.preventDefault(); link.onClick!(); } : undefined}
                      className="hover:text-electric transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-silver font-bold mb-6">{t('footer.contactUs')}</h4>
              <ul className="space-y-4 text-sm text-gunmetal flex flex-col items-center md:items-start text-left">
                <li className="flex flex-col items-center md:flex-row md:items-start gap-2 md:gap-3 w-full max-w-xs md:max-w-none text-center md:text-left">
                  <Phone className="w-5 h-5 text-electric shrink-0" />
                  <a href="tel:5144215555" className="hover:text-electric transition-colors">514-421-5555</a>
                </li>
                <li className="flex flex-col items-center md:flex-row md:items-start gap-2 md:gap-3 w-full max-w-xs md:max-w-none text-center md:text-left">
                  <MapPin className="w-5 h-5 mt-1 text-electric shrink-0" />
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-electric transition-colors">
                    10361 Boul Gouin O,<br />Roxboro, QC H8Y 1S1
                  </a>
                </li>
                <li className="flex flex-col items-center md:flex-row md:items-start gap-2 md:gap-3 w-full max-w-xs md:max-w-none text-center md:text-left">
                  <Mail className="w-5 h-5 text-electric shrink-0" />
                  <a href="mailto:garazenauto@gmail.com" className="hover:text-electric transition-colors">garazenauto@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-4 text-xs text-gunmetal w-full">
            <p className="font-bold tracking-wide text-silver/80">{t('footer.concierge')}</p>
            <div className="flex flex-col md:flex-row gap-4 text-center">
              <p>&copy; {new Date().getFullYear()} Garazen Auto. {t('footer.allRights')}</p>
              <p>{t('footer.madeWith')} {t('footer.roxboro')}.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <PrivacyPolicy isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
};