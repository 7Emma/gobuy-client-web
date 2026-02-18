import React, { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/equipe', label: 'Équipe' },
  { to: '/partenaires', label: 'Partenaires' },
  { to: '/presse', label: 'Presse' },
  { to: '/carrieres', label: 'Carrières' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <span className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-200">
            <ShoppingBag className="w-6 h-6" />
          </span>
          <span className="text-xl font-bold tracking-tight">
            Go<span className="text-orange-500">Buy</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden sm:inline-flex px-4 md:px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all shadow-md text-sm font-semibold"
          onClick={closeMenu}
        >
          Devenir vendeur
        </Link>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 text-slate-700"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Ouvrir le menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pb-4 pt-3">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-semibold ${isActive ? 'text-orange-500 bg-orange-50' : 'text-slate-700'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-3 inline-flex w-full justify-center px-4 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-semibold"
          >
            Devenir vendeur
          </Link>
        </div>
      )}
    </header>
  );
};
