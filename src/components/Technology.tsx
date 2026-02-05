
import { translations } from '../translations';

interface TechnologyProps {
    lang: 'sr' | 'en';
}

const Technology = ({ lang }: TechnologyProps) => {
    const t = translations[lang].technology;

    return (
        <section id="technology" className="py-24 px-4 md:px-8 bg-gray-50" aria-labelledby="technology-heading">
            <div className="max-w-[1400px] mx-auto">

                {/* Section Header - consistent with Services */}
                <header className="mb-24">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-[#ffce53]" aria-hidden="true"></div>
                        <span className="text-xs tracking-[0.3em] text-gray-400">{t.label}</span>
                    </div>
                    <h2 id="technology-heading" className="text-5xl md:text-7xl font-black tracking-tight text-black">
                        {t.title}<span className="inline-block w-2 h-2 rounded-full bg-[#ffce53] ml-1 align-top" aria-hidden="true"></span>
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

                        {/* Stats - elegant horizontal layout */}
                        <div className="flex gap-12 pt-8 border-t border-gray-200">
                            {t.stats.map((stat, index) => (
                                <div key={index} className="group">
                                    <div className="text-2xl md:text-3xl font-light text-black mb-1 tracking-tight">
                                        {stat.number}
                                    </div>
                                    <div className="text-xs text-gray-400 tracking-widest">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Side */}
                    <figure className="lg:col-span-7 relative order-1 lg:order-2">
                        <div className="relative">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src="/tehnologija.jpg"
                                    alt={lang === 'sr'
                                        ? "Najsavremenija oftalmološka oprema Topcon za preciznu dijagnostiku očiju u Blink ordinaciji Beograd"
                                        : "State-of-the-art Topcon ophthalmic equipment for precise eye diagnostics at Blink clinic Belgrade"}
                                    width={700}
                                    height={525}
                                    loading="lazy"
                                    decoding="async"
                                    style={{ contentVisibility: 'auto', containIntrinsicSize: '700px 525px' }}
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            {/* Subtle accent line */}
                            <div className="absolute -bottom-4 left-0 w-24 h-[2px] bg-[#ffce53]" aria-hidden="true"></div>
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
