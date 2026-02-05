import { useState, useEffect } from 'react';

const EyeDot = () => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 3;
            const maxOffset = 5;

            const x = ((e.clientX - centerX) / centerX) * maxOffset;
            const y = ((e.clientY - centerY) / centerY) * maxOffset;

            setOffset({
                x: Math.max(-maxOffset, Math.min(maxOffset, x)),
                y: Math.max(-maxOffset, Math.min(maxOffset, y))
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <span
            className="inline-block w-[0.15em] h-[0.15em] rounded-full bg-[#ffce53] eye-dot align-middle ml-[-0.05em]"
            style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
        />
    );
};

export default EyeDot;
