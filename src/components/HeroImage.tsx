import { useLanguage } from '../context/LanguageContext';

const HeroImage = () => {
    const { lang } = useLanguage();

    const altText = lang === 'sr'
        ? "Moderna oftalmološka oprema u Blink ordinaciji za preciznu dijagnostiku vida - najsavremeniji uređaji za pregled očiju u Novom Pazaru"
        : "Modern ophthalmic equipment at Blink clinic for precise vision diagnostics - state-of-the-art eye examination devices in Novi Pazar";

    return (
        <figure className="relative w-full max-w-125 md:max-w-xl lg:max-w-2xl overflow-hidden mx-auto group">
            <img
                src="/hero.png"
                alt={altText}
                width={672}
                height={896}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto object-cover transition-all duration-700 transform group-hover:scale-105"
            />
        </figure>
    );
};

export default HeroImage;
