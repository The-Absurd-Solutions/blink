import { useState, useEffect, useRef } from 'react';
import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';

const Technology = () => {
    const { lang } = useLanguage();
    const t = translations[lang].technology;
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="technology" className="relative py-24 px-4 md:px-8 bg-gray-50" aria-labelledby="technology-heading">
            <div className="relative max-w-350 mx-auto">

                {/* Section Header - consistent with Services */}
                <header className="mb-24">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-px bg-[#ffce53]" aria-hidden="true"></div>
                        <span className="text-xs tracking-[0.3em] text-gray-400">{t.label}</span>
                    </div>
                    <h2 id="technology-heading" className="text-5xl md:text-7xl font-black tracking-tight text-black">
                        {t.title}<span className="inline-block w-4 h-4 rounded-full bg-[#ffce53] ml-1 align-top" aria-hidden="true"></span>
                    </h2>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Text Side */}
                    <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
                        <h3 className="text-2xl md:text-3xl font-medium text-black tracking-tight mb-6 leading-tight">
                            {t.subtitle}
                        </h3>

                        <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-12">
                            {t.text}
                        </p>

                        {/* Stats - glassmorphism cards */}
                        <div ref={sectionRef} className="flex flex-wrap gap-4 md:gap-6 pt-8 border-t border-gray-200">
                            {t.stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`group relative px-6 py-5
                                        transition-all duration-700 ease-out
                                        min-w-30 text-center cursor-default
                                        hover:-translate-y-1
                                        ${visible
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-6'
                                        }`}
                                    style={{ transitionDelay: `${index * 150}ms` }}
                                >
                                    <div className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-2 transition-colors duration-300 group-hover:text-[#c9a227]">
                                        {stat.number}
                                    </div>
                                    <div className="text-xs text-gray-600 tracking-widest font-medium">
                                        {stat.label}
                                    </div>
                                    <div className="w-12 h-px bg-[#ffce53] mx-auto mt-3 transition-all duration-500 group-hover:w-full" aria-hidden="true"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Side */}
                    <figure className="lg:col-span-7 relative order-1 lg:order-2">
                        <div className="relative">
                            <div className="aspect-4/3 overflow-hidden">
                                <img
                                    src="/tehnologija.jpg"
                                    alt={lang === 'sr'
                                        ? "Najsavremenija oftalmološka oprema Topcon za preciznu dijagnostiku očiju u Blink ordinaciji Novi Pazar"
                                        : "State-of-the-art Topcon ophthalmic equipment for precise eye diagnostics at Blink clinic Novi Pazar"}
                                    width={700}
                                    height={525}
                                    loading="lazy"
                                    decoding="async"
                                    style={{ contentVisibility: 'auto', containIntrinsicSize: '700px 525px' }}
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            {/* Subtle accent line */}
                            <div className="absolute -bottom-4 left-0 w-24 h-0.5 bg-[#ffce53]" aria-hidden="true"></div>
                        </div>
                        <figcaption className="sr-only">
                            {lang === 'sr'
                                ? 'Oftalmološka oprema najnovije generacije za dijagnostiku vida'
                                : 'Latest generation ophthalmic equipment for vision diagnostics'}
                        </figcaption>
                    </figure>

                </div>
            </div>
        </section>
    );
};

export default Technology;
