import React from 'react';
import { siteData } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img
              src={`${import.meta.env.BASE_URL}logo-no-text.png`}
              alt={siteData.acronym}
              className="h-12 w-auto mb-2"
            />
            <p className="mt-2 text-sm">Comp4Good: Computing for Good</p>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} Comp4Good. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};



