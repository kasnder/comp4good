import React from 'react';
import { siteData } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-white">{siteData.acronym}</span>
            <p className="mt-2 text-sm">Computing 4 Good Research Group</p>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} Comp4Good. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

