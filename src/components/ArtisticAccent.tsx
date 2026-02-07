import { useLanguage } from '../context/LanguageContext';

interface ArtisticAccentProps {
    align?: 'left' | 'right';
}

const ArtisticAccent = ({ align = 'left' }: ArtisticAccentProps) => {
    const { lang } = useLanguage();
    const isRight = align === 'right';

    return (
        <div className={`flex flex-col gap-4 ${isRight ? 'items-end' : ''}`}>
            <div className="flex items-center gap-3">
                {isRight && <div className="w-2 h-2 rounded-full bg-(--color-gold) animate-pulse"></div>}
                <div className="w-12 h-0.5 bg-(--color-gold)"></div>
                {!isRight && <div className="w-2 h-2 rounded-full bg-(--color-gold) animate-pulse"></div>}
            </div>
            <p className="text-xs tracking-[0.25em] text-gray-400">
                {isRight
                    ? (lang === 'sr' ? 'Preciznost. Poverenje.' : 'Precision. Trust.')
                    : (lang === 'sr' ? 'Vaš vid. Naša misija.' : 'Your vision. Our mission.')
                }
            </p>
        </div>
    );
};

export default ArtisticAccent;
