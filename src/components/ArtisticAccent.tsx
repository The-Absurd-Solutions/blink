import React from 'react';

interface ArtisticAccentProps {
    lang: 'sr' | 'en';
}

const ArtisticAccent = ({ lang }: ArtisticAccentProps) => {
    return (
        <div className="flex flex-col gap-4">
            {/* Artistic line with dot */}
            <div className="flex items-center gap-3">
                <div className="w-12 h-[2px] bg-[#ffce53]"></div>
                <div className="w-2 h-2 rounded-full bg-[#ffce53] animate-pulse"></div>
            </div>

            {/* Elegant tagline */}
            <p className="text-xs tracking-[0.25em] text-gray-400">
                {lang === 'sr' ? 'Vaš vid. Naša misija.' : 'Your vision. Our mission.'}
            </p>
        </div>
    );
};

export default ArtisticAccent;
