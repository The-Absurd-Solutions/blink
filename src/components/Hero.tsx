import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';
import Navbar from './Navbar';
import EyeDot from './EyeDot';
import HeroImage from './HeroImage';
import ArtisticAccent from './ArtisticAccent';
import MouseGlow from './MouseGlow';

interface HeroProps {
    lensEnabled: boolean;
    setLensEnabled: (enabled: boolean) => void;
}

const Hero = ({ lensEnabled, setLensEnabled }: HeroProps) => {
    const { lang } = useLanguage();
    const t = translations[lang].hero;

    return (
        <header className="relative w-full min-h-[85vh] flex flex-col overflow-hidden bg-gray-50" role="banner">
            <MouseGlow isEnabled={lensEnabled} />
            <Navbar lensEnabled={lensEnabled} setLensEnabled={setLensEnabled} />

            <div className="grow flex flex-col relative w-full max-w-400 mx-auto px-4 md:px-8 pt-6 pb-8 justify-center">

                {/* Giant Title */}
                <div className="w-full text-center relative z-60 mb-4 md:mb-8" style={{ isolation: 'isolate' }}>
                    <p className="text-sm md:text-base tracking-[0.3em] text-gray-500 mb-2">
                        {t.clinic}
                    </p>
                    <h1 className="text-giant font-black text-black tracking-tighter select-none">
                        Blink<EyeDot />
                        <span className="sr-only">
                            {lang === 'sr'
                                ? ' — Oftalmološka ordinacija Novi Pazar | Očni pregled, dioptrija, okulista'
                                : ' — Eye Clinic Novi Pazar | Eye exam, vision diagnostics, ophthalmologist'}
                        </span>
                    </h1>
                </div>

                {/* Main Content Grid */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center md:items-start h-full">

                    {/* Left Column */}
                    <div className="col-span-1 md:col-span-3 flex flex-col justify-start pt-4 space-y-8 order-2 md:order-1">
                        <p className="text-base md:text-lg leading-relaxed text-gray-800 font-medium max-w-xs">
                            {t.left}
                        </p>
                        <ArtisticAccent />
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
                        <ArtisticAccent align="right" />
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Hero;
