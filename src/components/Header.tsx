
import React from 'react';
import { Menu, X } from 'lucide-react';

import { siteData } from '../data/content';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img
              src={`${import.meta.env.BASE_URL}logo-no-text.png`}
              alt={siteData.acronym}
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <div className="flex items-center text-xl font-bold text-slate-900">
                {siteData.title}
              </div>
              <div className="text-xs text-slate-500 hidden sm:block">
                {siteData.affiliation.name}
              </div>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-slate-600 hover:text-primary transition-colors">About</a>
            <a href="#methods" className="text-slate-600 hover:text-primary transition-colors">Our Approach</a>
            <a href="#projects" className="text-slate-600 hover:text-primary transition-colors">Projects</a>
            <a href="#team" className="text-slate-600 hover:text-primary transition-colors">Team</a>
            <a href="#publications" className="text-slate-600 hover:text-primary transition-colors">Publications</a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 text-slate-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#methods" className="block px-3 py-2 text-slate-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Our Approach</a>
            <a href="#projects" className="block px-3 py-2 text-slate-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#team" className="block px-3 py-2 text-slate-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Team</a>
            <a href="#publications" className="block px-3 py-2 text-slate-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Publications</a>
            <a href="#partners" className="block px-3 py-2 text-slate-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Partners</a>
          </div>
        </div>
      )}
    </header>
  );
};
