import React from 'react';
import { siteData } from '../data/content';
import { ExternalLink, Shield, Globe } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Research Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.projects.map((project) => (
            <div key={project.id} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm text-primary mr-4 shrink-0 h-16 w-16 flex items-center justify-center overflow-hidden">
                  {project.logo ? (
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    project.id === 'regtech4ai' ? <Shield size={32} /> : <Globe size={32} />
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                  <p className="text-primary font-medium">{project.subtitle}</p>
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-blue-50 text-primary text-sm font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-slate-900 font-semibold hover:text-primary transition-colors"
              >
                Visit Website <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
