import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
    const { lang } = useLanguage();
    const t = translations[lang].services;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="services" className="relative py-24 px-4 md:px-8 bg-gray-50 overflow-hidden" aria-labelledby="services-heading">
            <div className="relative max-w-350 mx-auto">
                {/* Section Header */}
                <header className="mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-px bg-(--color-gold)" aria-hidden="true"></div>
                            <span className="text-xs tracking-[0.3em] text-gray-400">
                                {t.label}
                            </span>
                        </div>
                        <h2 id="services-heading" className="text-5xl md:text-7xl font-black tracking-tight text-black">
                            {t.title}<span className="inline-block w-4 h-4 rounded-full bg-(--color-gold) ml-1 align-top" aria-hidden="true"></span>
                        </h2>
                    </div>
                    <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
                        {t.description}
                    </p>
                </header>

                {/* Services List */}
                <ul className="space-y-0" role="list">
                    {t.items.map((service, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <li
                                key={index}
                                className="group border-t border-gray-100 first:border-t-0"
                            >
                                <article
                                    className="py-8 md:py-14 cursor-pointer"
                                    onClick={() => toggle(index)}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16">
                                        {/* Number & Title */}
                                        <div className="flex items-center gap-4 md:gap-8 flex-1">
                                            <span className="text-sm font-medium text-gray-300 w-8 shrink-0" aria-hidden="true">
                                                {service.number}
                                            </span>
                                            <h3 className="text-xl md:text-3xl font-bold text-black group-hover:text-gray-600 tracking-tight transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                        </div>

                                        {/* Short description - hover animation on desktop */}
                                        <p className="text-gray-400 text-sm md:w-64 shrink-0 pl-12 md:pl-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:transform md:translate-x-4 md:group-hover:translate-x-0">
                                            {service.description}
                                        </p>

                                        {/* Chevron */}
                                        <div className="flex items-center shrink-0 pl-12 md:pl-0" aria-hidden="true">
                                            <ChevronDown
                                                size={20}
                                                className={`text-gray-300 group-hover:text-(--color-gold) transition-all duration-300 ${isOpen ? 'rotate-180 text-(--color-gold)' : ''}`}
                                            />
                                        </div>
                                    </div>

                                    {/* Expandable Details */}
                                    <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] mt-6' : 'grid-rows-[0fr]'}`}>
                                        <div className="overflow-hidden">
                                            <p className="text-gray-500 text-sm leading-relaxed pl-12 md:pl-16 max-w-2xl border-l-2 border-(--color-gold) ml-0 md:ml-4 py-1">
                                                {service.details}
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                {/* Yellow underline */}
                                <div className={`h-0.5 bg-(--color-gold) transform transition-transform duration-500 origin-left ${isOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} aria-hidden="true"></div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Services;
