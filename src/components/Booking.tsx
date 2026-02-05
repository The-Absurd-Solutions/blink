import { ArrowLeft } from 'lucide-react';
import { translations } from '../translations';

interface BookingProps {
    lang: 'sr' | 'en';
    onClose: () => void;
}

const Booking = ({ lang, onClose }: BookingProps) => {
    const t = translations[lang];

    return (
        <section className="flex-1 flex flex-col px-4 md:px-8 pb-8">
            {/* Mobile back button */}
            <div className="md:hidden py-4">
                <button
                    onClick={onClose}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors"
                >
                    <ArrowLeft size={16} />
                    {lang === 'sr' ? 'nazad' : 'back'}
                </button>
            </div>

            <div className="flex-1 flex items-center">
                <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left side - Title */}
                <div>
                    <p className="text-xs tracking-[0.25em] text-gray-400 mb-3">
                        {lang === 'sr' ? 'kontakt' : 'contact'}
                    </p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-4">
                        {lang === 'sr' ? 'Zakažite' : 'Book an'}<br />
                        {lang === 'sr' ? 'pregled' : 'appointment'}
                    </h1>
                    <p className="text-base text-gray-500 font-light leading-relaxed max-w-sm">
                        {lang === 'sr' 
                            ? 'Vaš vid zaslužuje pažnju. Javite nam se i zakažite termin.'
                            : 'Your vision deserves attention. Contact us and schedule your appointment.'
                        }
                    </p>
                </div>

                {/* Right side - Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="bg-white rounded-2xl p-6 hover:-translate-y-0.5 transition-transform">
                        <p className="text-[10px] tracking-[0.15em] text-gray-400 mb-2">
                            {lang === 'sr' ? 'telefon' : 'phone'}
                        </p>
                        <a 
                            href="tel:+38162572222" 
                            className="text-xl font-medium text-gray-900 hover:text-[#c9a227] transition-colors"
                        >
                            +381 62 572 222
                        </a>
                    </div>

                    {/* Email */}
                    <div className="bg-white rounded-2xl p-6 hover:-translate-y-0.5 transition-transform">
                        <p className="text-[10px] tracking-[0.15em] text-gray-400 mb-2">email</p>
                        <a 
                            href="mailto:drmemicenisa@gmail.com" 
                            className="text-xl font-medium text-gray-900 hover:text-[#c9a227] transition-colors"
                        >
                            drmemicenisa@gmail.com
                        </a>
                    </div>

                    {/* Address + Hours */}
                    <div className="bg-white rounded-2xl p-6 sm:col-span-2 flex flex-col gap-4">
                        <div>
                            <p className="text-[10px] tracking-[0.15em] text-gray-400 mb-2">
                                {lang === 'sr' ? 'adresa' : 'address'}
                            </p>
                            <a 
                                href="https://maps.google.com/?q=Lug+32+Novi+Pazar" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-lg sm:text-xl font-medium text-gray-900 hover:text-[#c9a227] transition-colors"
                            >
                                Lug 32, Novi Pazar
                            </a>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-2 border-t border-gray-100">
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
            </div>
        </section>
    );
};

export default Booking;
