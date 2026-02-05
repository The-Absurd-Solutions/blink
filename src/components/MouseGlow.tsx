import { useEffect, useState } from 'react';

interface MouseGlowProps {
    isEnabled: boolean;
    lang: 'sr' | 'en';
}

const MouseGlow = ({ isEnabled, lang }: MouseGlowProps) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile || !isEnabled) return;

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);
        document.body.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [isVisible, isMobile, isEnabled]);

    // Smooth follow for the lens
    useEffect(() => {
        if (isMobile || !isEnabled) return;

        let animationId: number;

        const animate = () => {
            setSmoothPosition(prev => ({
                x: prev.x + (position.x - prev.x) * 0.12,
                y: prev.y + (position.y - prev.y) * 0.12
            }));
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, [position, isMobile, isEnabled]);

    const lensSize = 234;

    // Don't render on mobile or when disabled
    if (isMobile || !isEnabled) return null;

    return (
        <>
            {/* Blur overlay - covers only Hero section with blur, but has a hole where the lens is */}
            <div
                className="pointer-events-none absolute inset-0 z-40"
                aria-hidden="true"
                style={{
                    backdropFilter: 'blur(1.5px)',
                    WebkitBackdropFilter: 'blur(1.5px)',
                    maskImage: `
                        radial-gradient(circle ${lensSize / 2}px at ${smoothPosition.x}px ${smoothPosition.y}px, transparent 0%, transparent 100%, black 100%)
                    `,
                    WebkitMaskImage: `
                        radial-gradient(circle ${lensSize / 2}px at ${smoothPosition.x}px ${smoothPosition.y}px, transparent 0%, transparent 100%, black 100%)
                    `,
                }}
            />

            <div
                className="pointer-events-none absolute inset-0 z-50 overflow-hidden"
                aria-hidden="true"
            >
                {/* Text above lens */}
                <div
                    className="absolute flex items-center justify-center"
                    style={{
                        width: `${lensSize}px`,
                        opacity: isVisible ? 1 : 0,
                        transform: `translate(${smoothPosition.x - lensSize / 2}px, ${smoothPosition.y - lensSize / 2 - 30}px)`,
                        transition: 'opacity 0.3s ease',
                        willChange: 'transform',
                    }}
                >
                    <span className="text-[11px] font-medium text-black tracking-widest select-none">
                        {lang === 'sr' ? 'Pomeri me' : 'Move me'}
                    </span>
                </div>

                {/* Magnifying lens ring */}
                <div
                    className="absolute rounded-full"
                    style={{
                        width: `${lensSize}px`,
                        height: `${lensSize}px`,
                        opacity: isVisible ? 1 : 0,
                        transform: `translate(${smoothPosition.x - lensSize / 2}px, ${smoothPosition.y - lensSize / 2}px)`,
                        transition: 'opacity 0.3s ease',
                        willChange: 'transform',
                        border: '1px solid rgba(0, 0, 0, 0.15)',
                        background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.03) 0%, transparent 50%)',
                    }}
                />

                {/* Small focus dot */}
                <div
                    className="absolute rounded-full bg-black/40"
                    style={{
                        width: '6px',
                        height: '6px',
                        opacity: isVisible ? 1 : 0,
                        transform: `translate(${position.x - 3}px, ${position.y - 3}px)`,
                        transition: 'opacity 0.2s ease',
                        willChange: 'transform',
                    }}
                />
            </div>
        </>
    );
};

export default MouseGlow;
