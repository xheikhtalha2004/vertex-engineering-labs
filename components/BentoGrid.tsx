import React from 'react';
import StatsCounter from './StatsCounter';

const BentoGrid: React.FC = () => {
    return (
        <section className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block">
                        <span className="font-mono text-xs font-bold text-blue-500 uppercase tracking-widest bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                            Laboratory Metrics
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-6 mb-4">
                        Engineering at <span className="text-gradient">Scale</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Real-time data from our solution engineering operations
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Large Box - Simulation Validation */}
                    <div className="lg:col-span-2 lg:row-span-2 bento-box glass-card p-8 flex flex-col justify-between">
                        <div>
                            <div className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">
                                Real-World Correlation
                            </div>
                            <div className="text-7xl font-display font-bold text-gradient mb-6">
                                98.2%
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Our simulations achieve 98.2% correlation with physical testing and real-world performance. Validated across 1,000+ production runs with rigorous mesh independence studies.
                            </p>
                        </div>
                        <div className="mt-6 pt-6 border-t border-white/10">
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-mono text-xs text-gray-500">VALIDATION CONFIDENCE</span>
                                <span className="font-mono text-xs text-lime-400 font-bold">PRODUCTION-READY</span>
                            </div>
                            <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full w-[98%] bg-gradient-to-r from-blue-500 to-lime-400 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Projects Completed */}
                    <div className="bento-box glass-card p-6 flex flex-col items-center justify-center text-center hover-scan">
                        <StatsCounter end={247} suffix="+" label="Projects Completed" />
                        <div className="mt-4 w-full h-1 bg-gradient-to-r from-blue-500 to-lime-400 rounded-full"></div>
                    </div>

                    {/* Client Satisfaction */}
                    <div className="bento-box glass-card p-6 flex flex-col items-center justify-center text-center hover-scan">
                        <StatsCounter end={98} suffix="%" label="Client Satisfaction" />
                        <div className="mt-4 flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>

                    {/* Response SLA */}
                    <div className="bento-box glass-card p-6 overflow-hidden relative group">
                        <div className="relative z-10">
                            <div className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-3">
                                Response SLA
                            </div>
                            <div className="text-2xl font-display font-bold text-white mb-2">
                                &lt;24 Hours
                            </div>
                            <div className="text-sm text-gray-400">
                                ⚡ Priority Support<br />
                                🌍 Global Coverage
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-lime-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Active Projects */}
                    <div className="bento-box glass-card p-6 hover-scan">
                        <div className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-3">
                            Active Projects
                        </div>
                        <div className="text-4xl font-display font-bold text-white mb-3">
                            <StatsCounter end={17} label="" />
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-gray-400 font-mono text-xs">LIVE STATUS</span>
                        </div>
                    </div>

                    {/* Testimonial/Quote */}
                    <div className="lg:col-span-2 bento-box glass-card p-8 relative overflow-hidden">
                        <div className="absolute top-4 left-4 text-blue-500/20 text-8xl font-serif">"</div>
                        <div className="relative z-10 pt-12">
                            <p className="text-lg text-white font-light leading-relaxed mb-6 italic">
                                "Vertex Labs engineered a thermal management solution that reduced our satellite payload temperature variance by 40%. Mission-critical precision."
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
                                <div>
                                    <div className="font-bold text-white">Dr. Sarah Chen</div>
                                    <div className="font-mono text-xs text-gray-500">CTO, AeroSpace Dynamics</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="lg:col-span-2 bento-box glass-card p-6">
                        <div className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">
                            Engineering Stack
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            {['ANSYS', 'MATLAB', 'SOLIDWORKS', 'PYTHON', 'COMSOL', 'OPENFOAM'].map((tool) => (
                                <div key={tool} className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-center hover:border-blue-500 transition-colors">
                                    <span className="font-mono text-xs font-bold text-gray-300">{tool}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
