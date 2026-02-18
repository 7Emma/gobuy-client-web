import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Producers = () => {
  return (
    <section id="producers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-white space-y-6">
              <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                Vous êtes agriculteur ? <br />
                <span className="text-orange-500">Digitalisez votre vente.</span>
              </h3>
              <p className="text-slate-400 text-lg">
                Rejoignez notre réseau et bénéficiez d'outils de marketing puissants, de gestion de
                stocks simplifiée et d'une visibilité locale accrue.
              </p>

              {/* Benefits */}
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>Zéro commission sur vos premières ventes</span>
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>Paiements sécurisés et immédiats</span>
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>Outils de marketing intégrés</span>
                </li>
              </ul>

              {/* CTA Button */}
              <button className="px-8 py-4 bg-orange-500 text-white font-black rounded-2xl uppercase tracking-wider text-sm hover:bg-orange-600 transition-colors shadow-lg shadow-orange-900/40">
                Ouvrir ma boutique
              </button>
            </div>

            {/* Right image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1595273670150-db0a3d39074f?w=800&q=80"
                alt="Farmer"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
