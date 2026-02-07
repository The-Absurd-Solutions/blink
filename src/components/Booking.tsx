import { translations } from '../translations';

interface BookingProps {
    lang: 'sr' | 'en';
}

const Booking = ({ lang }: BookingProps) => {
    const t = translations[lang].booking;

    return (
        <section id="contact" className="py-24 px-4 md:px-8 bg-gray-50" aria-labelledby="booking-heading">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header - consistent with other sections */}
                <header className="mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-[1px] bg-[#ffce53]" aria-hidden="true"></div>
                            <span className="text-xs tracking-[0.3em] text-gray-400">
                                {t.label}
                            </span>
                        </div>
                        <h2 id="booking-heading" className="text-5xl md:text-7xl font-black tracking-tight text-black">
                            {lang === 'sr' ? 'Zakažite ' : 'Book '}
                            <span className="whitespace-nowrap">
                                {lang === 'sr' ? 'pregled' : 'appointment'}<span className="inline-block w-4 h-4 rounded-full bg-[#ffce53] ml-1 align-top" aria-hidden="true"></span>
                            </span>
                        </h2>
                    </div>
                    <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
                        {t.description}
                    </p>
                </header>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[900px] ml-0">
                    {/* Phone */}
                    <div className="bg-white rounded-lg p-6 group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <p className="text-[10px] tracking-[0.15em] text-gray-400 mb-2 uppercase">
                            {lang === 'sr' ? 'telefon' : 'phone'}
                        </p>
                        <a
                            href="tel:+38162572222"
                            className="text-xl font-bold text-gray-900 group-hover:text-[#c9a227] transition-colors"
                        >
                            +381 62 572 222
                        </a>
                    </div>

                    {/* Email */}
                    <div className="bg-white rounded-lg p-6 group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <p className="text-[10px] tracking-[0.15em] text-gray-400 mb-2 uppercase">email</p>
                        <a
                            href="mailto:drmemicenisa@gmail.com"
                            className="text-xl font-bold text-gray-900 group-hover:text-[#c9a227] transition-colors break-all"
                        >
                            drmemicenisa@gmail.com
                        </a>
                    </div>

                    {/* Address */}
                    <div className="bg-white rounded-lg p-6 group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:col-span-2 lg:col-span-1">
                        <p className="text-[10px] tracking-[0.15em] text-gray-400 mb-2 uppercase">
                            {lang === 'sr' ? 'adresa' : 'address'}
                        </p>
                        <a
                            href="https://maps.google.com/?q=Lug+32+Novi+Pazar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl font-bold text-gray-900 group-hover:text-[#c9a227] transition-colors"
                        >
                            Lug 32, Novi Pazar
                        </a>
                    </div>

                    {/* Working Hours */}
                    <div className="bg-white rounded-lg p-6 sm:col-span-2 lg:col-span-3">
                        <p className="text-[10px] tracking-[0.15em] text-gray-400 mb-3 uppercase">
                            {lang === 'sr' ? 'radno vreme' : 'working hours'}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#ffce53] shrink-0"></span>
                                <span className="text-xs text-gray-400 whitespace-nowrap">
                                    {lang === 'sr' ? 'pon–pet' : 'mon–fri'}
                                </span>
                                <span className="text-sm font-medium whitespace-nowrap">08–20h</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#ffce53] shrink-0"></span>
                                <span className="text-xs text-gray-400 whitespace-nowrap">
                                    {lang === 'sr' ? 'sub' : 'sat'}
                                </span>
                                <span className="text-sm font-medium whitespace-nowrap">09–14h</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking;
