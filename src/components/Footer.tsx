import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';

function useLazyNanumFont(ref: React.RefObject<HTMLElement | null>) {
    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let loaded = false;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !loaded) {
                    loaded = true;
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = 'https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap';
                    document.head.appendChild(link);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [ref]);
}

const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.668 1.0745-1.3367 1.3802-2.1272.2957-.7637.4958-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.8981-1.3783-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.8988.4227-.1641 1.0573-.3633 2.227-.4196 1.2645-.0595 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.8988 1.3783.1645.4217.3633 1.0578.4196 2.2278.0602 1.2645.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.2456 1.8054-.408 2.2282-.216.5613-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.8988-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
    </svg>
);

const FacebookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 7.834 7.834 0 0 0-.567-.01c-.808 0-1.397.131-1.805.392-.397.254-.68.634-.843 1.136-.107.329-.16.744-.16 1.247v1.206h3.86l-.526 3.667h-3.334v7.98C18.396 22.912 22 18.212 22 12.68c0-5.946-4.82-10.764-10.764-10.764-5.946 0-10.764 4.818-10.764 10.764 0 4.903 3.278 9.043 7.763 10.337.248.063.496.113.744.172l.122.029z" />
    </svg>
);

const Footer = () => {
    const footerRef = useRef<HTMLElement>(null);
    useLazyNanumFont(footerRef);
    const { lang } = useLanguage();
    const t = translations[lang].footer;
    const nav = translations[lang].nav;

    return (
        <footer ref={footerRef} className="border-t border-gray-200 pt-20 pb-8 px-4 md:px-8 bg-gray-50" role="contentinfo">
            <div className="max-w-350 mx-auto">

                {/* Top section */}
                <div className="flex flex-col lg:flex-row lg:justify-between gap-16 mb-20">

                    {/* Logo & tagline */}
                    <div className="lg:max-w-sm relative z-60" style={{ isolation: 'isolate' }}>
                        <h3 className="text-4xl font-black tracking-tight mb-3 text-black">
                            Blink<span className="inline-block w-2 h-2 rounded-full bg-(--color-gold) ml-0.5 align-middle"></span>
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
                                <li><a href="#conditions" className="text-gray-600 hover:text-black transition-colors text-sm">{nav.conditions}</a></li>
                                <li><a href="#technology" className="text-gray-600 hover:text-black transition-colors text-sm">{nav.tech}</a></li>
                                <li><a href="#gallery" className="text-gray-600 hover:text-black transition-colors text-sm">{nav.gallery}</a></li>
                                <li><a href="#about" className="text-gray-600 hover:text-black transition-colors text-sm">{nav.about}</a></li>
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
                                        href="tel:+38162572222"
                                        className="hover:text-black transition-colors"
                                        aria-label={lang === 'sr' ? 'Pozovite nas' : 'Call us'}
                                    >
                                        {t.phone}
                                    </a>
                                </li>
                                <li className="leading-relaxed">
                                    <a
                                        href="https://maps.google.com/?q=Lug+32+Novi+Pazar"
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
                                    <InstagramIcon />
                                </a>
                                <a
                                    href="https://facebook.com/blink.ordinacija"
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    className="text-gray-500 hover:text-black transition-colors"
                                    aria-label="Facebook"
                                >
                                    <FacebookIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="text-gray-400 text-xs tracking-wide">{t.copyright}</span>
                    <div className="flex items-center gap-4 text-xs">
                        <Link to="/privacy" className="text-gray-400 hover:text-black transition-colors">{t.privacy}</Link>
                        <span className="text-gray-300">|</span>
                        <Link to="/terms" className="text-gray-400 hover:text-black transition-colors">{t.terms}</Link>
                        <span className="w-1 h-1 rounded-full bg-(--color-gold)"></span>
                        <span className="text-gray-400">{t.location}</span>
                    </div>
                </div>

                {/* Absurd Solution Credit */}
                <div className="mt-12 flex justify-end">
                    <a
                        href="https://absurdsolution.com/"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-block bg-[#1c2321] px-5 py-2 rounded-full hover:bg-[#2a3330] transition-colors relative z-60"
                        style={{ isolation: 'isolate' }}
                    >
                        <span style={{ fontFamily: "'Nanum Pen Script', cursive" }} className="text-white text-base">
                            This was forced into existence by <span className="text-white">The Absurd Solution</span>
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
