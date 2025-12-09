import React from 'react';
import { siteData } from '../data/content';
import { ArrowRight, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-20 pb-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <img 
              src={`${import.meta.env.BASE_URL}logo-no-text.png`} 
              alt="Comp4Good" 
              className="h-32 w-auto" 
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            {siteData.title}
          </h1>
          
          {siteData.affiliation && (
            <a 
              href={siteData.affiliation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-slate-500 mb-6 hover:text-primary transition-colors"
            >
              <MapPin size={18} className="mr-2" />
              <span className="font-medium">{siteData.affiliation.name}</span>
            </a>
          )}

          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            {siteData.description}
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700 transition-colors"
            >
              View Our Work <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#team" 
              className="inline-flex items-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-colors"
            >
              Meet the Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
