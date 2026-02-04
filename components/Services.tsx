'use client';

import React, { useState } from 'react';
import { SERVICES } from '../constants';
import ServiceModal from './ServiceModal';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);

  return (
    <>
      <section id="services" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-block mb-6">
              <span className="font-mono text-xs font-bold text-blue-500 uppercase tracking-widest bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                Core Services
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Solution <span className="text-gradient">Engineering</span> Stack
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-lime-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Rigorous computational methods combined with physical validation. We don't estimate—we calculate, simulate, and verify under real-world constraints.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="bento-box glass-card group cursor-pointer hover-scan relative overflow-hidden"
                onClick={() => setSelectedService(service)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Service Image */}
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 border border-white/10 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                  {/* Floating Index */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center font-display font-bold text-white text-xl">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Quotation CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-widest underline-offset-4 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Request Quotation
                  </a>
                  <div className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-blue-400 transition-colors">
                    View Details
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-lime-400/0 group-hover:from-blue-500/5 group-hover:via-blue-500/5 group-hover:to-lime-400/5 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          service={selectedService}
        />
      )}
    </>
  );
};

export default Services;