import { Instagram, Facebook, Phone, Mail, Clock } from 'lucide-react';
import { translations } from '../translations';

interface FooterProps {
    lang: 'sr' | 'en';
}

const Footer = ({ lang }: FooterProps) => {
    const t = translations[lang].footer;
    const nav = translations[lang].nav;

    return (
        <>
            {/* CTA Section */}
            <section className="py-28 px-4 md:px-8 bg-gray-50">
                <div className="max-w-[1400px] mx-auto">
                    {/* Title */}
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-12 h-px bg-[#ffce53]"></div>
                            <span className="text-xs tracking-[0.3em] text-gray-400">
                                {t.ready}
                            </span>
                            <div className="w-12 h-px bg-[#ffce53]"></div>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-black tracking-tight leading-none">
                            {t.ctaTitle}<span className="inline-block w-3 h-3 rounded-full bg-[#ffce53] ml-2 align-top"></span>
                        </h2>
                    </div>

                    {/* Contact Row */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-5xl mx-auto">
                        {/* Phone */}
                        <a
                            href="tel:+38162572222"
                            className="group flex items-center gap-4 bg-white rounded-2xl px-8 py-5 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full md:w-auto"
                        >
                            <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-[#ffce53]/20 flex items-center justify-center transition-colors">
                                <Phone size={20} className="text-[#c9a227]" />
                            </div>
                            <div>
                                <p className="text-[10px] tracking-[0.2em] text-gray-400 uppercase">
                                    {lang === 'sr' ? 'telefon' : 'phone'}
                                </p>
                                <p className="text-lg font-medium text-gray-700 group-hover:text-black transition-colors">
                                    +381 62 572 222
                                </p>
                            </div>
                        </a>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-12 bg-gray-200"></div>

                        {/* Email */}
                        <a
                            href="mailto:drmemicenisa@gmail.com"
                            className="group flex items-center gap-4 bg-white rounded-2xl px-8 py-5 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full md:w-auto"
                        >
                            <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-[#ffce53]/20 flex items-center justify-center transition-colors">
                                <Mail size={20} className="text-[#c9a227]" />
                            </div>
                            <div>
                                <p className="text-[10px] tracking-[0.2em] text-gray-400 uppercase">
                                    email
                                </p>
                                <p className="text-lg font-medium text-gray-700 group-hover:text-black transition-colors">
                                    drmemicenisa@gmail.com
                                </p>
                            </div>
                        </a>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-12 bg-gray-200"></div>

                        {/* Hours */}
                        <div className="flex items-center gap-4 bg-white rounded-2xl px-8 py-5 w-full md:w-auto">
                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                                <Clock size={20} className="text-[#c9a227]" />
                            </div>
                            <div>
                                <p className="text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-2">
                                    {lang === 'sr' ? 'radno vrijeme' : 'hours'}
                                </p>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3 text-sm">
                                        <span className="text-gray-400 w-16">{lang === 'sr' ? 'pon–pet' : 'mon–fri'}</span>
                                        <span className="font-medium text-gray-700">08–20h</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <span className="text-gray-400 w-16">{lang === 'sr' ? 'sub' : 'sat'}</span>
                                        <span className="font-medium text-gray-700">09–14h</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="border-t border-gray-200 pt-20 pb-8 px-4 md:px-8 bg-gray-50" role="contentinfo">
                <div className="max-w-[1400px] mx-auto">

                    {/* Top section */}
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-16 mb-20">

                        {/* Logo & tagline */}
                        <div className="lg:max-w-sm relative z-[60]" style={{ isolation: 'isolate' }}>
                            <h3 className="text-4xl font-black tracking-tight mb-3 text-black">
                                Blink<span className="inline-block w-2 h-2 rounded-full bg-[#ffce53] ml-0.5 align-middle"></span>
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {t.tagline}
                            </p>
                        </div>

                        {/* Links Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-20">
                            {/* Navigation */}
                            <div>
                                <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">
                                    {t.navigation}
                                </h4>
                                <ul className="space-y-4">
                                    <li><a href="#services" className="text-gray-600 hover:text-black transition-colors text-sm">{nav.services}</a></li>
                                    <li><a href="#technology" className="text-gray-600 hover:text-black transition-colors text-sm">{nav.tech}</a></li>
                                    <li><a href="#faq" className="text-gray-600 hover:text-black transition-colors text-sm">FAQ</a></li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div>
                                <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">
                                    {t.contact}
                                </h4>
                                <ul className="space-y-4 text-sm text-gray-600">
                                    <li>
                                        <a
                                            href="tel:+381211234567"
                                            className="hover:text-black transition-colors"
                                            aria-label={lang === 'sr' ? 'Pozovite nas' : 'Call us'}
                                        >
                                            {t.phone}
                                        </a>
                                    </li>
                                    <li className="leading-relaxed">
                                        <a
                                            href="https://maps.google.com/?q=Bulevar+Mihajla+Pupina+10+Beograd"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-black transition-colors"
                                            aria-label={lang === 'sr' ? 'Pogledaj na mapi' : 'View on map'}
                                        >
                                            {t.address}
                                        </a>
                                    </li>
                                    <li>{t.hours}</li>
                                </ul>
                            </div>

                            {/* Social */}
                            <div>
                                <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">Social</h4>
                                <div className="flex gap-3">
                                    <a
                                        href="https://instagram.com/blink.ordinacija"
                                        target="_blank"
                                        rel="noopener noreferrer nofollow"
                                        className="text-gray-500 hover:text-black transition-colors"
                                        aria-label="Instagram"
                                    >
                                        <Instagram size={20} />
                                    </a>
                                    <a
                                        href="https://facebook.com/blink.ordinacija"
                                        target="_blank"
                                        rel="noopener noreferrer nofollow"
                                        className="text-gray-500 hover:text-black transition-colors"
                                        aria-label="Facebook"
                                    >
                                        <Facebook size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                        <span className="text-gray-400 text-xs tracking-wide">{t.copyright}</span>
                        <div className="flex items-center gap-6 text-gray-400 text-xs">
                            <a href="/privacy.html" className="hover:text-gray-600 transition-colors">{t.privacy}</a>
                            <a href="/terms.html" className="hover:text-gray-600 transition-colors">{t.terms}</a>
                            <div className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-[#ffce53]"></span>
                                <span>{t.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Absurd Solution Credit */}
                    <div className="mt-12 flex justify-end">
                        <a
                            href="https://absurdsolution.com/"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="inline-block bg-[#1c2321] px-5 py-2 rounded-full hover:bg-[#2a3330] transition-colors relative z-[60]"
                            style={{ isolation: 'isolate' }}
                        >
                            <span style={{ fontFamily: "'Nanum Pen Script', cursive" }} className="text-white text-base">
                                This was forced into existence by <span className="text-white">The Absurd Solution</span>
                            </span>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
