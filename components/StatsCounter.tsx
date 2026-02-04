'use client';

import React, { useState, useEffect, useRef } from 'react';

interface StatsCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    label: string;
}

const StatsCounter: React.FC<StatsCounterProps> = ({
    end,
    duration = 2000,
    suffix = '',
    prefix = '',
    label
}) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-5xl md:text-6xl font-display font-bold text-gradient mb-2">
                {prefix}{count}{suffix}
            </div>
            <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                {label}
            </div>
        </div>
    );
};

export default StatsCounter;
