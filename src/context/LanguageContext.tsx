import { createContext, useContext } from 'react';

interface LanguageContextType {
    lang: 'sr' | 'en';
    setLang: (lang: 'sr' | 'en') => void;
}

export const LanguageContext = createContext<LanguageContextType>({
    lang: 'sr',
    setLang: () => {},
});

export const useLanguage = () => useContext(LanguageContext);
