'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Box, Target, DollarSign, Zap } from 'lucide-react';
import Scene from './3d/Scene';
import CrystalMesh from './3d/CrystalMesh';
import ParticleField from './3d/ParticleField';

export default function Hero3D() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!heroRef.current) return;

        const ctx = gsap.context(() => {
            // Hero entrance animation (auto-play on load)
            const heroTl = gsap.timeline();

            heroTl.from('.hero-headline', {
                y: 28,
                opacity: 0,
                duration: 0.7,
                ease: 'power2.out',
                stagger: 0.04
            })
                .from('.hero-sub', {
                    y: 18,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power2.out'
                }, '-=0.4')
                .from('.hero-cta', {
                    y: 18,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.08,
                    ease: 'power2.out'
                }, '-=0.4')
                .from('.stat-card-item', {
                    y: 40,
                    opacity: 0,
                    scale: 0.98,
                    duration: 0.5,
                    stagger: 0.06,
                    ease: 'power2.out'
                }, '-=0.3');
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="section-pinned z-10 relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(41,82,255,0.10),transparent_55%)]" />

            {/* 3D Canvas */}
            <Scene className="absolute right-[8vw] top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[520px] max-h-[520px]">
                <CrystalMesh />
                <ParticleField />
            </Scene>

            {/* Hero Content */}
            <div className="absolute left-[8vw] top-[28vh] w-[38vw] min-w-[320px] z-20">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-gray-400 mb-4">
                    Solution Lab • Operational Since 2019
                </p>

                <h1 className="hero-headline text-[64px] lg:text-[80px] font-bold leading-[1.05] mb-6 text-white">
                    Engineering<br />
                    <span className="text-gradient">Solvency</span><br />
                    at Scale.
                </h1>

                <p className="hero-sub text-gray-400 text-base lg:text-lg leading-relaxed max-w-md mb-8">
                    We don't "make things pretty." We <span className="text-white font-medium">engineer outcomes</span>.
                    High-fidelity CAD, computational validation, and rapid prototyping for B2B manufacturers who need to ship.
                </p>

                <div className="flex flex-wrap gap-4">
                    <button className="hero-cta btn-primary flex items-center gap-2">
                        Initialize Project
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                    <button className="hero-cta btn-secondary">
                        View Case Studies
                    </button>
                </div>
            </div>

            {/* Stats Row */}
            <div className="absolute left-[8vw] bottom-[8vh] right-[8vw] flex flex-wrap gap-4 z-20">
                {[
                    { icon: Box, value: '247+', label: 'Projects Shipped' },
                    { icon: Target, value: '99.70%', label: 'Analysis Precision' },
                    { icon: DollarSign, value: '$2.4M+', label: 'Cost Avoided' },
                    { icon: Zap, value: '24/7', label: 'Lab Access' }
                ].map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <div key={i} className="stat-card-item stat-card flex-1 min-w-[160px] max-w-[200px]">
                            <Icon className="w-5 h-5 text-[#2952FF]" />
                            <span className="text-2xl font-bold text-white">{stat.value}</span>
                            <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">{stat.label}</span>
                        </div>
                    );
                })}
            </div>

            {/* Badges */}
            <div className="absolute right-[8vw] top-[12vh] flex flex-col items-end gap-2 z-20">
                <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400 bg-black/60 px-3 py-1 rounded-full border border-gray-700">
                    ISO 9001:2015
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400 bg-black/60 px-3 py-1 rounded-full border border-gray-700">
                    ON-PREMISE LAB
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400 bg-black/60 px-3 py-1 rounded-full border border-gray-700">
                    HPC CLUSTER READY
                </span>
            </div>
        </section>
    );
}
