import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import BentoGrid from '@/components/BentoGrid'
import AIConsultant from '@/components/AIConsultant'
import Contact from '@/components/Contact'
import { TOOLS } from '@/constants'

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black selection:bg-blue-500/30">
            <Navbar />

            <main className="relative">
                <Hero />

                {/* Trusted By Section */}
                <section className="py-16 relative z-10 border-y border-white/5">
                    <div className="container mx-auto px-6">
                        <p className="text-center font-mono text-xs text-gray-500 font-bold mb-12 uppercase tracking-widest">
                            Trusted By Engineers At
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
                            {['MIT', 'SIEMENS', 'Stanford', 'P&G', 'Caltech', 'HITACHI'].map(brand => (
                                <span
                                    key={brand}
                                    className="text-2xl md:text-3xl font-black text-gray-700 hover:text-gray-400 hover:scale-110 transition-all duration-300 cursor-default tracking-tighter font-display"
                                >
                                    {brand}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                <Services />

                {/* How We Engineer Section */}
                <section className="py-24 relative z-10">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
                            <div className="max-w-2xl">
                                <div className="inline-block mb-6">
                                    <span className="font-mono text-xs font-bold text-blue-500 uppercase tracking-widest bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                                        Process
                                    </span>
                                </div>
                                <h2 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight">
                                    How We <span className="text-gradient">Engineer</span>
                                </h2>
                            </div>
                            <a
                                href="#contact"
                                className="btn-primary px-10 py-4"
                            >
                                Schedule Consultation
                            </a>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { n: '01', t: 'Scope &amp; Requirements', d: 'Define engineering parameters, constraints, success criteria, and performance targets with mathematical precision.' },
                                { n: '02', t: 'Model &amp; Validate', d: 'Build computational models (CAD, FEA, CFD). Run parametric studies and sensitivity analyses. Validate against analytical benchmarks.' },
                                { n: '03', t: 'Deliver &amp; Support', d: 'Provide technical documentation, analysis reports, and manufacturing recommendations. Support prototyping and production scale-up.' },
                            ].map((step, i) => (
                                <div
                                    key={i}
                                    className="bento-box glass-card p-8 group hover-scan relative overflow-hidden"
                                >
                                    <div className="text-8xl font-black text-white/5 mb-6 leading-none group-hover:text-blue-500/10 transition-colors duration-500">
                                        {step.n}
                                    </div>
                                    <h4 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                        {step.t}
                                    </h4>
                                    <p className="text-gray-400 leading-relaxed">
                                        {step.d}
                                    </p>

                                    <div className="absolute top-6 right-6 w-12 h-12 rounded-full border-2 border-white/10 flex items-center justify-center font-display font-bold text-white group-hover:border-blue-500 group-hover:text-blue-500 transition-colors">
                                        {step.n}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Portfolio />
                <BentoGrid />

                {/* Tools Section */}
                <section className="py-24 relative z-10">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <div className="inline-block mb-6">
                                <span className="font-mono text-xs font-bold text-blue-500 uppercase tracking-widest bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                                    Tech Stack
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                Engineering <span className="text-gradient">Arsenal</span>
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Enterprise-grade solvers and CAD platforms selected for accuracy, performance, and industry validation
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                            {TOOLS.map((tool) => (
                                <div
                                    key={tool.name}
                                    className="bento-box glass-card p-6 flex items-center justify-center group hover-scan"
                                >
                                    <span className="text-2xl md:text-3xl font-black text-gray-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 tracking-tighter font-display">
                                        {tool.logo}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Contact />
            </main>

            {/* Footer */}
            <footer className="py-16 border-t border-white/5 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                                <span className="text-white font-black text-2xl tracking-tighter">V</span>
                            </div>
                            <span className="text-3xl font-display font-bold tracking-wider text-white">
                                VERTEX<span className="text-blue-500 font-light ml-1">.LABS</span>
                            </span>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 mb-12">
                            {['Services', 'Portfolio', 'Contact', 'About'].map(l => (
                                <a
                                    key={l}
                                    href={`#${l.toLowerCase()}`}
                                    className="font-mono text-xs text-gray-500 hover:text-blue-500 transition-colors uppercase tracking-widest"
                                >
                                    {l}
                                </a>
                            ))}
                        </div>

                        <p className="text-gray-600 text-sm font-mono">
                            © 2025 Vertex Engineering Labs. Engineering solvency at scale.
                        </p>

                        <div className="flex flex-wrap justify-center items-center gap-4 mt-8 text-gray-700 font-mono text-xs">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span>ISO 9001:2015</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>GDPR COMPLIANT</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <span>CARBON NEUTRAL LAB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <AIConsultant />
        </div>
    )
}
