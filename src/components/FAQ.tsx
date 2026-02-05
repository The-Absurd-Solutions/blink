import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { translations } from '../translations';

interface FAQProps {
    lang: 'sr' | 'en';
}

const FAQ = ({ lang }: FAQProps) => {
    const t = translations[lang].faq;
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 px-4 md:px-8 bg-gray-50" aria-labelledby="faq-heading">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header - consistent with Services */}
                <header className="mb-24">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-[1px] bg-[#ffce53]" aria-hidden="true"></div>
                        <span className="text-xs tracking-[0.3em] text-gray-400">
                            {t.label}
                        </span>
                    </div>
                    <h2 id="faq-heading" className="text-5xl md:text-7xl font-black tracking-tight text-black">
                        {t.title}<span className="inline-block w-2 h-2 rounded-full bg-[#ffce53] ml-1 align-top" aria-hidden="true"></span>
                    </h2>
                </header>

                <div className="max-w-[800px]">

                    {/* FAQ Items */}
                    <dl className="space-y-4">
                        {t.items.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border border-gray-200"
                            >
                                <dt>
                                    <button
                                        className="w-full px-6 py-5 flex items-center justify-between text-left"
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        aria-expanded={openIndex === index}
                                        aria-controls={`faq-answer-${index}`}
                                    >
                                        <span className="font-bold text-black pr-4">{item.question}</span>
                                        <ChevronDown
                                            size={20}
                                            className={`text-[#ffce53] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                            aria-hidden="true"
                                        />
                                    </button>
                                </dt>
                                <dd
                                    id={`faq-answer-${index}`}
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-48' : 'max-h-0'}`}
                                    aria-hidden={openIndex !== index}
                                >
                                    <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                                        {item.answer}
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
