import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';

const Conditions = () => {
    const { lang } = useLanguage();
    const t = translations[lang].conditions;

    return (
        <section id="conditions" className="py-24 px-4 md:px-8 bg-white" aria-labelledby="conditions-heading">
            <div className="max-w-350 mx-auto">
                {/* Section Header */}
                <header className="mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-px bg-(--color-gold)" aria-hidden="true"></div>
                            <span className="text-xs tracking-[0.3em] text-gray-400">
                                {t.label}
                            </span>
                        </div>
                        <h2 id="conditions-heading" className="text-5xl md:text-7xl font-black tracking-tight text-black">
                            {t.title}<span className="inline-block w-4 h-4 rounded-full bg-(--color-gold) ml-1 align-top" aria-hidden="true"></span>
                        </h2>
                    </div>
                    <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
                        {t.description}
                    </p>
                </header>

                {/* Conditions — editorial rows */}
                <div>
                    {t.items.map((item, index) => (
                        <article
                            key={index}
                            className="group border-t border-gray-100 first:border-t-0 py-10 md:py-14"
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                                <span className="text-5xl md:text-7xl font-black text-gray-100 group-hover:text-(--color-gold-light) transition-colors duration-500 leading-none md:w-28 shrink-0" aria-hidden="true">
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold text-black mb-3 group-hover:text-gray-600 transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed max-w-2xl border-l-2 border-gray-200 group-hover:border-(--color-gold) pl-4 transition-colors duration-500">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Conditions;
