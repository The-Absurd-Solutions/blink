import { useLanguage } from '../context/LanguageContext';

const HeroImage = () => {
    const { lang } = useLanguage();

    const altText = lang === 'sr'
        ? "Moderna oftalmološka oprema u Blink ordinaciji za preciznu dijagnostiku vida - najsavremeniji uređaji za pregled očiju u Novom Pazaru"
        : "Modern ophthalmic equipment at Blink clinic for precise vision diagnostics - state-of-the-art eye examination devices in Novi Pazar";

    return (
        <figure className="relative w-full max-w-125 md:max-w-xl lg:max-w-2xl overflow-hidden mx-auto group">
            <picture>
                <source
                    type="image/webp"
                    srcSet="/hero-672w.webp 672w, /hero-1152w.webp 1152w"
                    sizes="(max-width: 768px) 500px, (max-width: 1024px) 576px, 672px"
                />
                <img
                    src="/hero.png"
                    alt={altText}
                    width={672}
                    height={522}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-auto object-cover transition-all duration-700 transform group-hover:scale-105"
                />
            </picture>
        </figure>
    );
};

export default HeroImage;
