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

    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle(index);
        }
    };

    return (
        <section id="faq" className="py-24 px-4 md:px-8 bg-gray-50" aria-labelledby="faq-heading">
            <div className="max-w-350 mx-auto">
                {/* Section Header */}
                <header className="mb-24">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-px bg-[#ffce53]" aria-hidden="true"></div>
                        <span className="text-xs tracking-[0.3em] text-gray-400">
                            {t.label}
                        </span>
                    </div>
                    <h2 id="faq-heading" className="text-5xl md:text-7xl font-black tracking-tight text-black">
                        {t.title}<span className="inline-block w-4 h-4 rounded-full bg-[#ffce53] ml-1 align-top" aria-hidden="true"></span>
                    </h2>
                </header>

                {/* FAQ 2x2 Grid */}
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-225 ml-0">
                    {t.items.map((item, index) => (
                        <div
                            key={index}
                            role="button"
                            tabIndex={0}
                            className={`group bg-white rounded-lg p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${openIndex === index ? 'ring-1 ring-[#ffce53]' : ''}`}
                            onClick={() => toggle(index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            aria-expanded={openIndex === index}
                            aria-controls={`faq-answer-${index}`}
                        >
                            <dt className="flex items-start justify-between gap-4">
                                <span className="font-bold text-black text-sm md:text-base leading-snug">
                                    {item.question}
                                </span>
                                <span className="shrink-0 w-6 h-6 rounded-full bg-[#fff8e1] flex items-center justify-center transition-transform duration-300 border border-[#ffce53]" aria-hidden="true">
                                    {openIndex === index
                                        ? <EyeOff size={15} className="text-[#c9a227] opacity-70" />
                                        : <Eye size={15} className="text-[#c9a227] opacity-70" />
                                    }
                                </span>
                            </dt>
                            <dd
                                id={`faq-answer-${index}`}
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-48 mt-4' : 'max-h-0'}`}
                                aria-hidden={openIndex !== index}
                            >
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {item.answer}
                                </p>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
};

export default FAQ;
