import { translations } from '../translations';
import Navbar from './Navbar';
import FloatingBlobs from './FloatingBlobs';
import EyeDot from './EyeDot';
import HeroImage from './HeroImage';
import ArtisticAccent from './ArtisticAccent';
import ArtisticAccentRight from './ArtisticAccentRight';
import MouseGlow from './MouseGlow';

interface HeroProps {
    lang: 'sr' | 'en';
    setLang: (l: 'sr' | 'en') => void;
    lensEnabled: boolean;
    setLensEnabled: (enabled: boolean) => void;
    showBooking?: boolean;
    setShowBooking?: (show: boolean) => void;
}

const Hero = ({ lang, setLang, lensEnabled, setLensEnabled, showBooking, setShowBooking }: HeroProps) => {
    const t = translations[lang].hero;

    return (
        <header className="relative w-full min-h-[85vh] flex flex-col overflow-hidden bg-gray-50" role="banner">
            <MouseGlow isEnabled={lensEnabled} lang={lang} />
            <FloatingBlobs />
            <Navbar lang={lang} setLang={setLang} lensEnabled={lensEnabled} setLensEnabled={setLensEnabled} showBooking={showBooking} setShowBooking={setShowBooking} />

            <main id="main-content" className="flex-grow flex flex-col relative w-full max-w-[1600px] mx-auto px-4 md:px-8 pt-6 pb-8 justify-center">

                {/* Giant Title */}
                <div className="w-full text-center relative z-[60] mb-4 md:mb-8" style={{ isolation: 'isolate' }}>
                    <p className="text-sm md:text-base tracking-[0.3em] text-gray-500 mb-2">
                        {t.clinic}
                    </p>
                    <h1 className="text-giant font-black text-black tracking-tighter select-none">
                        Blink<EyeDot />
                    </h1>
                </div>

                {/* Main Content Grid */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center md:items-start h-full">

                    {/* Left Column */}
                    <div className="col-span-1 md:col-span-3 flex flex-col justify-start pt-4 space-y-8 order-2 md:order-1">
                        <p className="text-base md:text-lg leading-relaxed text-gray-800 font-medium max-w-xs">
                            {t.left}
                        </p>
                        <ArtisticAccent lang={lang} />
                    </div>

                    {/* Center Image Column */}
                    <div className="col-span-1 md:col-span-6 flex justify-center items-start relative order-1 md:order-2">
                        <HeroImage />
                    </div>

                    {/* Right Column */}
                    <div className="col-span-1 md:col-span-3 flex flex-col justify-start pt-4 items-end text-right space-y-8 order-3">
                        <p className="text-base md:text-lg leading-relaxed text-gray-800 font-medium max-w-xs">
                            {t.right}
                        </p>
                        <ArtisticAccentRight lang={lang} />
                    </div>

                </div>
            </main>
        </header>
    );
};

export default Hero;
