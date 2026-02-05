import { useState } from 'react';
import { ArrowRight, X, Eye, EyeOff } from 'lucide-react';
import { translations } from '../translations';

interface NavbarProps {
    lang: 'sr' | 'en';
    setLang: (l: 'sr' | 'en') => void;
    lensEnabled: boolean;
    setLensEnabled: (enabled: boolean) => void;
    showBooking?: boolean;
    setShowBooking?: (show: boolean) => void;
}

const Navbar = ({ lang, setLang, lensEnabled, setLensEnabled, showBooking, setShowBooking }: NavbarProps) => {
    const t = translations[lang].nav;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Skip to main content link for accessibility */}
            <a href="#services" className="skip-link">
                {lang === 'sr' ? 'Preskoči na sadržaj' : 'Skip to content'}
            </a>
            <nav className="w-full flex justify-between items-start p-4 md:p-8 relative z-50" role="navigation" aria-label={lang === 'sr' ? 'Glavna navigacija' : 'Main navigation'}>
                {/* Left Navigation */}
                <div className="px-6 py-3 flex gap-6 items-center text-sm font-medium tracking-wide text-gray-800 hidden md:flex">
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
                                ? 'text-[#c9a227] hover:text-[#b08d1f]'
                                : 'text-gray-400 hover:text-gray-600'
                            }`}
                        aria-label={lensEnabled ? 'Isključi efekat lupe' : 'Uključi efekat lupe'}
                    >
                        {lensEnabled ? <EyeOff size={13} strokeWidth={1.5} /> : <Eye size={13} strokeWidth={1.5} />}
                        <span className="font-light">{lang === 'sr' ? 'progledaj' : 'clear view'}</span>
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

                {/* CTA Button - Desktop only */}
                <button
                    onClick={() => setShowBooking?.(!showBooking)}
                    className="hidden md:flex bg-[#ffce53] text-black px-6 py-3 rounded-full text-sm font-medium items-center gap-2 hover:bg-[#ffd970] transition-all duration-300"
                    aria-label={lang === 'sr' ? 'Zakažite pregled' : 'Book appointment'}
                >
                    {showBooking ? (lang === 'sr' ? '← nazad' : '← back') : t.cta} {!showBooking && <ArrowRight size={16} aria-hidden="true" />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div
                id="mobile-menu"
                className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-50 z-[101] transform transition-transform duration-300 ease-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
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

                    {/* CTA Button */}
                    <button
                        className="mt-auto bg-[#ffce53] text-black px-6 py-4 rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#ffd970] transition-all duration-300"
                        onClick={() => { setMobileMenuOpen(false); setShowBooking?.(!showBooking); }}
                        aria-label={lang === 'sr' ? 'Zakažite pregled' : 'Book appointment'}
                    >
                        {showBooking ? (lang === 'sr' ? '← nazad' : '← back') : t.cta} {!showBooking && <ArrowRight size={16} aria-hidden="true" />}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
