import { ArrowRight, Instagram, Facebook } from 'lucide-react';
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
            <section className="py-24 px-4 md:px-8 bg-gray-50">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-[1px] bg-[#ffce53]"></div>
                                <span className="text-xs tracking-[0.3em] text-gray-400">
                                    {t.ready}
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-black tracking-tight leading-tight max-w-xl">
                                {t.ctaTitle}<span className="inline-block w-2 h-2 rounded-full bg-[#ffce53] ml-1 align-top"></span>
                            </h2>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-4">
                            <p className="text-gray-500 text-base max-w-xs md:text-right">{t.ctaSubtitle}</p>
                            <a
                                href="tel:+381211234567"
                                className="group bg-black text-white px-8 py-4 text-sm font-medium flex items-center gap-3 hover:bg-[#ffce53] hover:text-black transition-all duration-300"
                                aria-label={lang === 'sr' ? 'Zakažite pregled pozivom' : 'Book appointment by calling'}
                            >
                                {t.ctaButton}
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                            </a>
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
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                            <span className="w-1 h-1 rounded-full bg-[#ffce53]"></span>
                            <span>{t.location}</span>
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
