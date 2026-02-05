import { ArrowRight } from 'lucide-react';
import { translations } from '../translations';

interface ServicesProps {
    lang: 'sr' | 'en';
}

const Services = ({ lang }: ServicesProps) => {
    const t = translations[lang].services;

    return (
        <section id="services" className="py-24 px-4 md:px-8 bg-gray-50 overflow-hidden" aria-labelledby="services-heading">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <header className="mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-[1px] bg-[#ffce53]" aria-hidden="true"></div>
                            <span className="text-xs tracking-[0.3em] text-gray-400">
                                {t.label}
                            </span>
                        </div>
                        <h2 id="services-heading" className="text-5xl md:text-7xl font-black tracking-tight text-black">
                            {t.title}<span className="inline-block w-2 h-2 rounded-full bg-[#ffce53] ml-1 align-top" aria-hidden="true"></span>
                        </h2>
                    </div>
                    <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
                        {t.description}
                    </p>
                </header>

                {/* Services List */}
                <ul className="space-y-0" role="list">
                    {t.items.map((service, index) => (
                        <li
                            key={index}
                            className="group cursor-pointer border-t border-gray-100 first:border-t-0"
                        >
                            <article className="py-8 md:py-14 flex flex-col md:flex-row md:items-center gap-4 md:gap-16">
                                {/* Number & Title Row */}
                                <div className="flex items-center gap-4 md:gap-8 flex-1">
                                    {/* Number */}
                                    <span className="text-sm font-medium text-gray-300 w-8 shrink-0" aria-hidden="true">
                                        {service.number}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-xl md:text-3xl font-bold text-black group-hover:text-gray-600 tracking-tight transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description - Shown on mobile below, hover on desktop */}
                                <p className="text-gray-400 text-sm max-w-xs pl-12 md:pl-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:transform md:translate-x-4 md:group-hover:translate-x-0">
                                    {service.description}
                                </p>

                                {/* Arrow - Hidden on mobile */}
                                <div className="hidden md:flex items-center gap-4" aria-hidden="true">
                                    <div className="w-0 group-hover:w-8 h-[1px] bg-[#ffce53] transition-all duration-300"></div>
                                    <ArrowRight
                                        size={20}
                                        className="text-gray-300 group-hover:text-[#ffce53] transition-all duration-300 transform group-hover:translate-x-1"
                                    />
                                </div>
                            </article>

                            {/* Yellow underline on hover */}
                            <div className="h-[2px] bg-[#ffce53] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" aria-hidden="true"></div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Services;
