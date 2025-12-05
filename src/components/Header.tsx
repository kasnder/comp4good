import React from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Terminal className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-slate-900">Comp4Good</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-slate-600 hover:text-primary transition-colors">About</a>
            <a href="#projects" className="text-slate-600 hover:text-primary transition-colors">Projects</a>
            <a href="#team" className="text-slate-600 hover:text-primary transition-colors">Team</a>
            <a href="#partners" className="text-slate-600 hover:text-primary transition-colors">Partners</a>
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
            <a href="#projects" className="block px-3 py-2 text-slate-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#team" className="block px-3 py-2 text-slate-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Team</a>
            <a href="#partners" className="block px-3 py-2 text-slate-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Partners</a>
          </div>
        </div>
      )}
    </header>
  );
};

