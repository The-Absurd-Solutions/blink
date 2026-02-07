import { useState, useEffect, useRef } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';
import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
    lensEnabled: boolean;
    setLensEnabled: (enabled: boolean) => void;
}

const Navbar = ({ lensEnabled, setLensEnabled }: NavbarProps) => {
    const { lang, setLang } = useLanguage();
    const t = translations[lang].nav;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Focus trap for mobile menu
    useEffect(() => {
        if (!mobileMenuOpen) return;

        const menuEl = menuRef.current;
        if (!menuEl) return;

        const focusableElements = menuEl.querySelectorAll<HTMLElement>(
            'a[href], button, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) return;

        const firstEl = focusableElements[0];
        const lastEl = focusableElements[focusableElements.length - 1];

        firstEl.focus();

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setMobileMenuOpen(false);
                return;
            }

            if (e.key !== 'Tab') return;

            if (e.shiftKey) {
                if (document.activeElement === firstEl) {
                    e.preventDefault();
                    lastEl.focus();
                }
            } else {
                if (document.activeElement === lastEl) {
                    e.preventDefault();
                    firstEl.focus();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [mobileMenuOpen]);

    return (
        <>
            {/* Skip to main content link for accessibility */}
            <a href="#services" className="skip-link">
                {lang === 'sr' ? 'Preskoči na sadržaj' : 'Skip to content'}
            </a>
            <nav className="w-full flex justify-between items-start p-4 md:p-8 relative z-50" role="navigation" aria-label={lang === 'sr' ? 'Glavna navigacija' : 'Main navigation'}>
                {/* Left Navigation */}
                <div className="px-6 py-3 gap-6 items-center text-sm font-medium tracking-wide text-gray-800 hidden md:flex">
                    <a href="#services" className="nav-link hover:text-black transition-colors">{t.services}</a>
                    <a href="#technology" className="nav-link hover:text-black transition-colors">{t.tech}</a>
                    <a href="#faq" className="nav-link hover:text-black transition-colors">{t.faq || 'FAQ'}</a>
                    <a href="#contact" className="nav-link hover:text-black transition-colors">{t.contact}</a>

                    {/* Language Switcher */}
                    <div className="w-px h-4 bg-gray-300 mx-2"></div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setLang('sr')}
                            className={`hover:text-black transition-colors ${lang === 'sr' ? 'text-black font-bold' : 'text-gray-400'}`}
                        >
                            sr
                        </button>
                        <button
                            onClick={() => setLang('en')}
                            className={`hover:text-black transition-colors ${lang === 'en' ? 'text-black font-bold' : 'text-gray-400'}`}
                        >
                            en
                        </button>
                    </div>

                    {/* Lens Toggle */}
                    <div className="w-px h-4 bg-gray-300 mx-3"></div>
                    <button
                        onClick={() => setLensEnabled(!lensEnabled)}
                        className={`flex items-center gap-1.5 text-xs tracking-wider transition-all duration-300 ${lensEnabled
                            ? 'text-gray-400 hover:text-gray-600'
                            : 'text-[#c9a227] hover:text-[#b08d1f]'
                            }`}
                        aria-label={lensEnabled
                            ? (lang === 'sr' ? 'Isključi efekat lupe' : 'Disable lens effect')
                            : (lang === 'sr' ? 'Uključi efekat lupe' : 'Enable lens effect')}
                    >
                        {lensEnabled ? <EyeOff size={13} strokeWidth={1.5} /> : <Eye size={13} strokeWidth={1.5} />}
                        <span className="font-medium">{lensEnabled ? '+2.00' : '0.00'}</span>
                        <span className="font-light text-[10px] uppercase">dpt</span>
                    </button>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden p-3 flex items-center gap-3"
                    onClick={() => setMobileMenuOpen(true)}
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-menu"
                    aria-label={lang === 'sr' ? 'Otvori meni' : 'Open menu'}
                >
                    <div className="space-y-1.5">
                        <div className="w-6 h-0.5 bg-black"></div>
                        <div className="w-6 h-0.5 bg-black"></div>
                        <div className="w-6 h-0.5 bg-black"></div>
                    </div>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-100 transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div
                ref={menuRef}
                id="mobile-menu"
                className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-50 z-101 transform transition-transform duration-300 ease-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                aria-hidden={!mobileMenuOpen}
            >
                <div className="flex flex-col h-full p-6">
                    {/* Close Button */}
                    <button
                        className="self-end p-2 mb-8"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-label={lang === 'sr' ? 'Zatvori meni' : 'Close menu'}
                    >
                        <X size={24} />
                    </button>

                    {/* Navigation Links */}
                    <div className="flex flex-col gap-6 text-lg font-medium text-gray-800">
                        <a href="#services" className="hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)}>{t.services}</a>
                        <a href="#technology" className="hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)}>{t.tech}</a>
                        <a href="#faq" className="hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)}>{t.faq || 'FAQ'}</a>
                        <a href="#contact" className="hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)}>{t.contact}</a>
                    </div>

                    {/* Language Switcher */}
                    <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
                        <button
                            onClick={() => setLang('sr')}
                            className={`text-sm font-medium transition-colors ${lang === 'sr' ? 'text-black font-bold' : 'text-gray-400'}`}
                        >
                            sr
                        </button>
                        <button
                            onClick={() => setLang('en')}
                            className={`text-sm font-medium transition-colors ${lang === 'en' ? 'text-black font-bold' : 'text-gray-400'}`}
                        >
                            en
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
