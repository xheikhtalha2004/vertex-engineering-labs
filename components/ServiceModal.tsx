import React from 'react';

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: {
        id: string;
        title: string;
        description: string;
        image: string;
        details?: string;
        pricing?: string;
    };
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

            <div
                className="relative z-10 bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 z-20 bg-black/90 backdrop-blur-xl border-b border-white/10 p-6 flex items-center justify-between">
                    <h3 className="text-2xl font-display font-bold text-white">{service.title}</h3>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="p-8">
                    {/* Image */}
                    <div className="aspect-video rounded-2xl overflow-hidden mb-8 border border-white/10">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                        <h4 className="font-mono text-xs text-blue-500 uppercase tracking-widest mb-3">Overview</h4>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            {service.description}
                        </p>
                    </div>

                    {/* Details */}
                    {service.details && (
                        <div className="mb-8">
                            <h4 className="font-mono text-xs text-blue-500 uppercase tracking-widest mb-3">Technical Details</h4>
                            <p className="text-gray-400 leading-relaxed">
                                {service.details}
                            </p>
                        </div>
                    )}

                    {/* Process */}
                    <div className="mb-8">
                        <h4 className="font-mono text-xs text-blue-500 uppercase tracking-widest mb-4">Process</h4>
                        <div className="space-y-4">
                            {['Initial Consultation & Scoping', 'Technical Modeling & Analysis', 'Validation & Iteration', 'Delivery & Documentation'].map((step, i) => (
                                <div key={i} className="flex items-start space-x-4 bg-white/5 border border-white/10 rounded-xl p-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 font-bold text-white">
                                        {i + 1}
                                    </div>
                                    <div className="pt-1">
                                        <p className="text-white font-semibold">{step}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact CTA */}
                    <div className="mb-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6">
                        <h4 className="font-mono text-xs text-blue-400 uppercase tracking-widest mb-3">Investment</h4>
                        <div className="text-2xl font-display font-bold text-white mb-2">Contact for Quotation</div>
                        <p className="text-gray-400 text-sm">Pricing varies based on project complexity and scope. Contact us for a detailed estimate.</p>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#contact"
                            onClick={onClose}
                            className="flex-1 btn-primary text-center py-4"
                        >
                            Request Quotation
                        </a>
                        <button
                            onClick={onClose}
                            className="flex-1 btn-secondary py-4"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;
