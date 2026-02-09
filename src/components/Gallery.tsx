import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';

const images = [
    { src: '/ordinacija1.png', srcSet: '/ordinacija1-512w.webp 512w, /ordinacija1-1022w.webp 1022w', width: 1022, height: 646 },
    { src: '/ordinacija1.png', srcSet: '/ordinacija1-512w.webp 512w, /ordinacija1-1022w.webp 1022w', width: 1022, height: 646 },
];

const Gallery = () => {
    const { lang } = useLanguage();
    const t = translations[lang].gallery;

    return (
        <section id="gallery" className="py-18 md:py-24 px-4 md:px-8 bg-gray-50" aria-labelledby="gallery-heading">
            <div className="max-w-350 mx-auto">
                {/* Section Header */}
                <header className="mb-18 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-px bg-(--color-gold)" aria-hidden="true"></div>
                            <span className="text-xs tracking-[0.3em] text-gray-400">
                                {t.label}
                            </span>
                        </div>
                        <h2 id="gallery-heading" className="text-5xl md:text-7xl font-black tracking-tight text-black">
                            {t.title}<span className="inline-block w-4 h-4 rounded-full bg-(--color-gold) ml-1 align-top" aria-hidden="true"></span>
                        </h2>
                    </div>
                    <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
                        {t.description}
                    </p>
                </header>

                {/* Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {images.map((img, i) => (
                        <div key={i} className="overflow-hidden rounded-lg group aspect-video">
                            <picture>
                                <source
                                    type="image/webp"
                                    srcSet={img.srcSet}
                                    sizes="(max-width: 768px) calc(100vw - 2rem), calc(50vw - 3rem)"
                                />
                                <img
                                    src={img.src}
                                    alt={lang === 'sr'
                                        ? `Unutrašnjost Blink oftalmološke ordinacije u Novom Pazaru — moderna dijagnostička oprema ${i + 1}`
                                        : `Interior of Blink eye clinic in Novi Pazar — modern diagnostic equipment ${i + 1}`}
                                    width={img.width}
                                    height={img.height}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </picture>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
