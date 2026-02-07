import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

interface MouseGlowProps {
    isEnabled: boolean;
}

const MouseGlow = ({ isEnabled }: MouseGlowProps) => {
    const { lang } = useLanguage();
    const positionRef = useRef({ x: 0, y: 0 });
    const smoothRef = useRef({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const blurRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);

    const lensSize = 234;

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Mouse tracking — updates ref instead of state
    useEffect(() => {
        if (isMobile || !isEnabled) return;

        const handleMouseMove = (e: MouseEvent) => {
            positionRef.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);
        document.body.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [isVisible, isMobile, isEnabled]);

    // Smooth animation loop — direct DOM manipulation, no state updates
    useEffect(() => {
        if (isMobile || !isEnabled) return;

        let animationId: number;
        const half = lensSize / 2;

        const animate = () => {
            const prev = smoothRef.current;
            const target = positionRef.current;

            smoothRef.current = {
                x: prev.x + (target.x - prev.x) * 0.12,
                y: prev.y + (target.y - prev.y) * 0.12,
            };

            const sx = smoothRef.current.x;
            const sy = smoothRef.current.y;

            if (blurRef.current) {
                const mask = `radial-gradient(circle ${half}px at ${sx}px ${sy}px, transparent 0%, transparent 100%, black 100%)`;
                blurRef.current.style.maskImage = mask;
                (blurRef.current.style as CSSStyleDeclaration & { WebkitMaskImage: string }).WebkitMaskImage = mask;
            }

            if (textRef.current) {
                textRef.current.style.transform = `translate(${sx - half}px, ${sy - half - 30}px)`;
            }

            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${sx - half}px, ${sy - half}px)`;
            }

            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${positionRef.current.x - 3}px, ${positionRef.current.y - 3}px)`;
            }

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, [isMobile, isEnabled]);

    // Don't render on mobile or when disabled
    if (isMobile || !isEnabled) return null;

    return (
        <>
            {/* Blur overlay - covers only Hero section with blur, but has a hole where the lens is */}
            <div
                ref={blurRef}
                className="pointer-events-none absolute inset-0 z-40"
                aria-hidden="true"
                style={{
                    backdropFilter: 'blur(1.5px)',
                    WebkitBackdropFilter: 'blur(1.5px)',
                }}
            />

            <div
                className="pointer-events-none absolute inset-0 z-50 overflow-hidden"
                aria-hidden="true"
            >
                {/* Text above lens */}
                <div
                    ref={textRef}
                    className="absolute flex items-center justify-center"
                    style={{
                        width: `${lensSize}px`,
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 0.3s ease',
                        willChange: 'transform',
                    }}
                >
                    <span className="text-[11px] font-medium text-black tracking-widest select-none">
                        {translations[lang].lens.label}
                    </span>
                </div>

                {/* Magnifying lens ring */}
                <div
                    ref={ringRef}
                    className="absolute rounded-full"
                    style={{
                        width: `${lensSize}px`,
                        height: `${lensSize}px`,
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 0.3s ease',
                        willChange: 'transform',
                        border: '1px solid rgba(0, 0, 0, 0.15)',
                        background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.03) 0%, transparent 50%)',
                    }}
                />

                {/* Small focus dot */}
                <div
                    ref={dotRef}
                    className="absolute rounded-full bg-black/40"
                    style={{
                        width: '6px',
                        height: '6px',
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 0.2s ease',
                        willChange: 'transform',
                    }}
                />
            </div>
        </>
    );
};

export default MouseGlow;
