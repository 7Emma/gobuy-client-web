import React from 'react';
import { PageShell } from './PageShell';

export const PartnersPage = () => (
  <PageShell
    eyebrow="Partenaires"
    title="Un écosystème local solide."
    subtitle="Producteurs, logisticiens, institutions et commerçants: nous construisons GoBuy avec des partenaires de terrain à travers l'Afrique."
  >
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      {['Coopératives', 'Logistique', 'Institutions'].map((item) => (
        <article key={item} className="p-6 rounded-3xl border border-slate-100 bg-white shadow-sm">
          <h3 className="text-xl font-bold mb-2">{item}</h3>
          <p className="text-slate-600">
            Collaboration active pour renforcer la chaîne de valeur locale et offrir une meilleure expérience client.
          </p>
        </article>
      ))}
    </div>

    <div className="mb-8 p-6 rounded-3xl border border-slate-100 bg-white">
      <h3 className="text-xl font-bold mb-4">Ils collaborent avec GoBuy</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {['AGROVIA', 'TRANSAFRIK', 'PAYLINK', 'LOCAL MART', 'RURAL HUB'].map((logo) => (
          <div
            key={logo}
            className="h-14 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center text-xs font-black text-slate-500 tracking-wider"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-4 mb-8">
      {[
        ['Logistique', 'Intégration des partenaires livraison et suivi des tournées.'],
        ['Distribution', 'Accès à un réseau de vendeurs et points de retrait multi-zones.'],
        ['Institutions', 'Co-construction de programmes d’impact local et inclusion digitale.'],
      ].map(([title, text]) => (
        <article key={title} className="p-5 rounded-2xl border border-slate-100 bg-white">
          <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
          <p className="text-sm text-slate-600">{text}</p>
        </article>
      ))}
    </div>

    <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-4">Ce que nous construisons ensemble</h3>
      <div className="grid md:grid-cols-2 gap-4 text-slate-600">
        <p>Réseaux de distribution locale plus performants et traçables.</p>
        <p>Meilleure visibilité digitale pour les producteurs et commerces.</p>
        <p>Expérience d’achat fiable pour les utilisateurs finaux.</p>
        <p>Standardisation des opérations de paiement et de livraison.</p>
      </div>
      <button className="mt-6 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800">
        Devenir partenaire
      </button>
    </div>
  </PageShell>
);
