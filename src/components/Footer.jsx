import React from "react";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-sm font-medium bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <span className="font-bold text-slate-900">GoBuy</span>
        </Link>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <Link
            to="/confidentialite"
            className="hover:text-slate-900 transition-colors"
          >
            Confidentialité
          </Link>
          <Link
            to="/conditions"
            className="hover:text-slate-900 transition-colors"
          >
            Conditions
          </Link>
          <Link
            to="/contact"
            className="hover:text-slate-900 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Copyright */}
        <p>&copy; {currentYear} GoBuy. Tous droits réservés.</p>
      </div>
    </footer>
  );
};
