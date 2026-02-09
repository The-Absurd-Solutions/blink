import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';

const FAQ = () => {
    const { lang } = useLanguage();
    const t = translations[lang].faq;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-18 md:py-24 px-4 md:px-8 bg-gray-50" aria-labelledby="faq-heading">
            <div className="max-w-350 mx-auto">
                {/* Section Header */}
                <header className="mb-18 md:mb-24">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-px bg-(--color-gold)" aria-hidden="true"></div>
                        <span className="text-xs tracking-[0.3em] text-gray-400">
                            {t.label}
                        </span>
                    </div>
                    <h2 id="faq-heading" className="text-5xl md:text-7xl font-black tracking-tight text-black">
                        {t.title}<span className="inline-block w-4 h-4 rounded-full bg-(--color-gold) ml-1 align-top" aria-hidden="true"></span>
                    </h2>
                </header>

                {/* FAQ 2x2 Grid */}
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-225 ml-0">
                    {t.items.map((item, index) => (
                        <div
                            key={index}
                            className={`group bg-white rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${openIndex === index ? 'ring-1 ring-(--color-gold)' : ''} ${item.sections ? 'md:col-span-2' : ''}`}
                        >
                            <dt>
                                <button
                                    type="button"
                                    className="flex items-start justify-between gap-4 cursor-pointer w-full text-left"
                                    onClick={() => toggle(index)}
                                    aria-expanded={openIndex === index}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    <span className="font-bold text-black text-sm md:text-base leading-snug">
                                        {item.question}
                                    </span>
                                    <span className="shrink-0 w-6 h-6 rounded-full bg-(--color-gold-light) flex items-center justify-center transition-transform duration-300 border border-(--color-gold)" aria-hidden="true">
                                        {openIndex === index
                                            ? <EyeOff size={15} className="text-(--color-gold-dark) opacity-70" />
                                            : <Eye size={15} className="text-(--color-gold-dark) opacity-70" />
                                        }
                                    </span>
                                </button>
                            </dt>
                            <dd
                                id={`faq-answer-${index}`}
                                className={`grid transition-all duration-300 ${openIndex === index ? 'grid-rows-[1fr] mt-4' : 'grid-rows-[0fr]'}`}
                                aria-hidden={openIndex !== index}
                            >
                                <div className="overflow-hidden">
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {item.answer}
                                    </p>
                                    {item.sections && (
                                        <div className="mt-4 space-y-4">
                                            {item.sections.map((section, i) => (
                                                <div key={i}>
                                                    <h4 className="text-sm font-semibold text-black mb-1">
                                                        {section.title}
                                                    </h4>
                                                    <p className="text-gray-500 text-sm leading-relaxed">
                                                        {section.text}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
};

export default FAQ;
