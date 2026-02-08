import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { lang } = useLanguage();
    const t = translations[lang].about;

    return (
        <section id="about" className="py-24 px-4 md:px-8 bg-white" aria-labelledby="about-heading">
            <div className="max-w-350 mx-auto">
                {/* Section Header */}
                <header className="mb-20">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-px bg-(--color-gold)" aria-hidden="true"></div>
                        <span className="text-xs tracking-[0.3em] text-gray-400 uppercase">
                            {t.label}
                        </span>
                    </div>
                    <h2 id="about-heading" className="text-5xl md:text-7xl font-black tracking-tight text-black">
                        {t.title}<span className="inline-block w-4 h-4 rounded-full bg-(--color-gold) ml-1 align-top" aria-hidden="true"></span>
                    </h2>
                </header>

                {/* Doctor Profile */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
                    {/* Name Card */}
                    <div className="md:col-span-4 md:sticky md:top-32 md:self-start">
                        <div className="border-l-2 border-(--color-gold) pl-6">
                            <p className="text-3xl md:text-4xl font-black text-black tracking-tight leading-tight">
                                {t.name}
                            </p>
                            <p className="text-sm tracking-[0.15em] text-(--color-gold-dark) mt-3 uppercase font-medium">
                                {t.role}
                            </p>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="md:col-span-8 space-y-6">
                        {t.bio.map((paragraph, i) => (
                            <p
                                key={i}
                                className={`text-sm leading-relaxed ${i === 0 ? 'text-gray-800 text-base md:text-lg font-medium' : 'text-gray-500'}`}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
