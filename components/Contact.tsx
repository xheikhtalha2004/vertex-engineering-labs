'use client';

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message required';
    } else if (formData.message.trim().split(/\s+/).length < 20) {
      newErrors.message = 'Minimum 20 words required for technical scope';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrors({ submit: data.error || 'Failed to submit form. Please try again.' });
        setTimeout(() => {
          setStatus('idle');
          setErrors({});
        }, 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrors({ submit: 'Network error. Please check your connection and try again.' });
      setTimeout(() => {
        setStatus('idle');
        setErrors({});
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bento-box glass-card p-10 md:p-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="font-mono text-xs font-bold text-blue-500 uppercase tracking-widest bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                Contact Interface
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Initialize <span className="text-gradient">Technical Brief</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Submit project parameters for computational feasibility analysis
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block font-mono text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 group-focus-within:text-blue-500 transition-colors">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full bg-white/5 border ${errors.firstName ? 'border-red-500' : 'border-white/20'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors`}
                />
                {errors.firstName && <p className="mt-2 text-xs text-red-400">{errors.firstName}</p>}
              </div>
              <div className="group">
                <label className="block font-mono text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 group-focus-within:text-blue-500 transition-colors">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full bg-white/5 border ${errors.lastName ? 'border-red-500' : 'border-white/20'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors`}
                />
                {errors.lastName && <p className="mt-2 text-xs text-red-400">{errors.lastName}</p>}
              </div>
            </div>

            {/* Email */}
            <div className="group">
              <label className="block font-mono text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 group-focus-within:text-blue-500 transition-colors">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors`}
              />
              {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
            </div>

            {/* Message */}
            <div className="group">
              <label className="block font-mono text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 group-focus-within:text-blue-500 transition-colors">
                Technical Scope (Minimum 20 Words) *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/20'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none`}
                placeholder="Detail environmental constraints, materials, target KPIs, timeline..."
              />
              {errors.message && <p className="mt-2 text-xs text-red-400">{errors.message}</p>}
              <p className="mt-2 text-xs text-gray-500 font-mono">
                Word count: {formData.message.trim().split(/\s+/).filter(w => w.length > 0).length}
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full md:w-auto px-16 py-5 btn-primary text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Processing...' : 'Execute Submission'}
              </button>
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-center animate-slide-in">
                <p className="text-green-400 font-semibold">✓ Submission successful! We'll respond within 24 hours.</p>
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-center">
                <p className="text-red-400 font-semibold">
                  ✗ {errors.submit || 'Error submitting form. Please try again.'}
                </p>
              </div>
            )}
          </form>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">
              End-to-End TLS 1.3 Encryption • Response SLA: 24hrs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;