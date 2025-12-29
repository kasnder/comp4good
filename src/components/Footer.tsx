import React from 'react';
import { siteData } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-2 md:mb-0">
            © {new Date().getFullYear()} {siteData.acronym}. All rights reserved. No personal data is collected.
          </div>
        </div>
      </div>
    </footer>
  );
};



