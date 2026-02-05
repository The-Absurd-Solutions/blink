import { useState, useEffect } from 'react';

const FloatingBlobs = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div
                className="blob-1 absolute top-20 left-10 w-64 h-64 rounded-full bg-[#ffce53] opacity-[0.07] blur-3xl pointer-events-none"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            />
            <div
                className="blob-2 absolute bottom-40 right-20 w-96 h-96 rounded-full bg-[#ffce53] opacity-[0.05] blur-3xl pointer-events-none"
                style={{ transform: `translateY(${scrollY * -0.15}px)` }}
            />
            <div
                className="blob-1 absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-[#ffce53] opacity-[0.06] blur-2xl pointer-events-none"
                style={{ transform: `translateY(${scrollY * 0.08}px)` }}
            />
        </>
    );
};

export default FloatingBlobs;
