'use client';

import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [accuracy, setAccuracy] = useState(95);

  useEffect(() => {
    const interval = setInterval(() => {
      setAccuracy(prev => {
        const next = prev + (Math.random() - 0.5) * 0.5;
        return Math.max(99.7, Math.min(99.99, next));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-32 pb-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Main Hero Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-3 mb-8 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
              <span className="w-2.5 h-2.5 bg-lime-400 rounded-full animate-pulse"></span>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400">
                Solution Lab • Operational Since 2019
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-[0.95] mb-8 animate-slide-in">
              Engineering
              <span className="block text-gradient mt-2">Solvency</span>
              <span className="block text-5xl md:text-7xl mt-4 text-gray-400 font-light">at Scale.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              We don't "make things pretty." We <span className="text-white font-semibold">engineer outcomes</span>.
              High-fidelity CAD, computational validation, and rapid prototyping for B2B manufacturers who need to ship.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a
                href="#contact"
                className="btn-primary px-10 py-5 text-base group"
              >
                <span className="mr-2">Initialize Project</span>
                <svg className="w-5 h-5 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#portfolio"
                className="btn-secondary px-10 py-5 text-base"
              >
                View Case Studies
              </a>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: '247+', label: 'Projects Shipped', icon: '📦' },
              { value: accuracy.toFixed(2) + '%', label: 'Analysis Precision', icon: '🎯' },
              { value: '$2.4M+', label: 'Cost Avoided', icon: '💰' },
              { value: '24/7', label: 'Lab Access', icon: '⚡' },
            ].map((metric, i) => (
              <div key={i} className="bento-box glass-card p-6 text-center hover-scan group transition-all duration-300">
                <div className="text-3xl mb-2">{metric.icon}</div>
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                  {metric.value}
                </div>
                <div className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Specs Footer */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 font-mono text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                <span>ON-PREMISE LAB</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>HPC CLUSTER READY</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[128px] animate-float opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-lime-400/10 rounded-full blur-[128px] animate-float opacity-20" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;