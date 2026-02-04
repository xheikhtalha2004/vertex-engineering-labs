'use client';

import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];
  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 relative z-10 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="font-mono text-xs text-blue-500 uppercase tracking-widest mb-4 font-bold">
              Laboratory Archive
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-4">
              Validated <span className="text-gradient">Case Studies</span>
            </h2>
            <p className="text-gray-400 text-lg">
              STAR-format technical documentation. Situation, Task, Action, Result—backed by data.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all ${selectedCategory === cat
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:border-blue-500'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative">
              <div className="bento-box glass-card p-4 hover-scan">
                {/* Image */}
                <div className="relative rounded-xl overflow-hidden aspect-video bg-black mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-blue-600 px-3 py-1.5 rounded-lg">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                      {project.category}
                    </span>
                  </div>
                  {/* Project ID */}
                  <div className="absolute bottom-4 right-4 font-mono text-xs text-white/50">
                    REF: {project.id.toUpperCase()}
                  </div>
                </div>

                {/* Content */}
                <div className="px-4 pb-4">
                  <h4 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                    <span className="tag tag-accent">
                      Quotation Available
                    </span>
                  </div>

                  {/* Expand/Collapse STAR Format */}
                  {project.situation && (
                    <>
                      <button
                        onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                        className="w-full btn-secondary py-3 mb-4 text-sm"
                      >
                        {expandedProject === project.id ? 'Hide' : 'View'} Technical Details (STAR)
                      </button>

                      {expandedProject === project.id && (
                        <div className="space-y-4 animate-slide-in bg-white/5 border border-white/10 rounded-xl p-6">
                          {/* Situation */}
                          <div>
                            <h5 className="font-mono text-xs text-blue-400 uppercase tracking-widest mb-2">Situation</h5>
                            <p className="text-gray-300 text-sm leading-relaxed">{project.situation}</p>
                          </div>
                          {/* Task */}
                          <div>
                            <h5 className="font-mono text-xs text-lime-400 uppercase tracking-widest mb-2">Task</h5>
                            <p className="text-gray-300 text-sm leading-relaxed">{project.task}</p>
                          </div>
                          {/* Action */}
                          <div>
                            <h5 className="font-mono text-xs text-orange-400 uppercase tracking-widest mb-2">Action</h5>
                            <p className="text-gray-300 text-sm leading-relaxed">{project.action}</p>
                          </div>
                          {/* Result */}
                          <div>
                            <h5 className="font-mono text-xs text-green-400 uppercase tracking-widest mb-2">Result</h5>
                            <p className="text-gray-300 text-sm leading-relaxed font-semibold">{project.result}</p>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Hover Indicator */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100 shadow-xl animate-pulse-glow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="#contact" className="btn-primary px-12 py-5">
            Request Custom Analysis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;