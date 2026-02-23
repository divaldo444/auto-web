import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Dynamic import of translations
import { translations } from '../translations';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [lang, setLangState] = useState<Language>(() => {
        const saved = localStorage.getItem('garazen-lang');
        return (saved === 'fr' ? 'fr' : 'en') as Language;
    });

    const setLang = useCallback((newLang: Language) => {
        setLangState(newLang);
        localStorage.setItem('garazen-lang', newLang);
        document.documentElement.lang = newLang === 'fr' ? 'fr-CA' : 'en-CA';
    }, []);

    // Set initial lang attribute
    useEffect(() => {
        document.documentElement.lang = lang === 'fr' ? 'fr-CA' : 'en-CA';
    }, []);

    const t = useCallback((key: string): any => {
        const keys = key.split('.');
        let value: any = translations[lang];
        for (const k of keys) {
            value = value?.[k];
        }
        return value ?? key;
    }, [lang]);

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within LanguageProvider');
    return context;
};
