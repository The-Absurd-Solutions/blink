import React from 'react';

interface ArtisticAccentRightProps {
    lang: 'sr' | 'en';
}

const ArtisticAccentRight = ({ lang }: ArtisticAccentRightProps) => {
    return (
        <div className="flex flex-col gap-4 items-end">
            {/* Artistic line with dot */}
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#ffce53] animate-pulse"></div>
                <div className="w-12 h-[2px] bg-[#ffce53]"></div>
            </div>

            {/* Elegant tagline */}
            <p className="text-xs tracking-[0.25em] text-gray-400">
                {lang === 'sr' ? 'Preciznost. Poverenje.' : 'Precision. Trust.'}
            </p>
        </div>
    );
};

export default ArtisticAccentRight;
