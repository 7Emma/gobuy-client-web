import React from 'react';
import { Leaf } from 'lucide-react';

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-200">
            <Leaf className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Go<span className="text-orange-500">Buy</span>
          </span>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#features" className="hover:text-orange-500 transition-colors">
            Fonctionnalités
          </a>
          <a href="#producers" className="hover:text-orange-500 transition-colors">
            Pour les Producteurs
          </a>
          <a
            href="#download"
            className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all shadow-md"
          >
            Installer l'app
          </a>
        </div>
      </div>
    </nav>
  );
};
