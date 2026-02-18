import React from 'react';
import { PageShell } from './PageShell';

export const AboutPage = () => (
  <PageShell
    eyebrow="Qui sommes-nous"
    title="Nous rapprochons les vendeurs et les acheteurs."
    subtitle="GoBuy est une plateforme de commerce panafricaine qui simplifie la vente locale, avec un focus sur la transparence, la qualité et la rapidité."
  >
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      {[
        ['Mission', 'Rendre le commerce local plus simple, direct et fiable pour tous.'],
        ['Vision', "Devenir la référence du commerce digital sur l'étendue africaine."],
        ['Valeurs', 'Confiance, impact local, excellence opérationnelle, transparence.'],
      ].map(([title, text]) => (
        <article key={title} className="p-6 rounded-3xl border border-slate-100 bg-slate-50">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-slate-600">{text}</p>
        </article>
      ))}
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
      {[
        ['12+', 'Pays ciblés'],
        ['150K+', 'Utilisateurs visés'],
        ['3K+', 'Vendeurs onboardés'],
        ['24/7', 'Disponibilité plateforme'],
      ].map(([value, label]) => (
        <article key={label} className="p-5 rounded-2xl border border-slate-100 bg-white text-center">
          <p className="text-3xl font-black text-slate-900">{value}</p>
          <p className="text-sm text-slate-500 mt-1">{label}</p>
        </article>
      ))}
    </div>

    <div className="rounded-3xl border border-slate-100 bg-white p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6">Notre progression</h3>
      <div className="space-y-5">
        {[
          ['2023', 'Lancement du projet GoBuy et premières études terrain.'],
          ['2024', 'Prototype mobile, tests utilisateurs et validation produit.'],
          ['2025', 'Déploiement pilote avec vendeurs et acheteurs partenaires.'],
          ['2026', 'Montée en échelle panafricaine, partenariats logistiques et paiements.'],
        ].map(([year, text]) => (
          <div key={year} className="flex items-start gap-4">
            <span className="mt-1 min-w-14 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold">
              {year}
            </span>
            <p className="text-slate-600">{text}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="grid lg:grid-cols-2 gap-6 mt-8">
      <article className="p-6 rounded-3xl border border-slate-100 bg-slate-50">
        <h3 className="text-xl font-bold mb-3">Pourquoi maintenant</h3>
        <p className="text-slate-600">
          Le commerce local africain reste fragmenté: offre dispersée, visibilité limitée des vendeurs,
          paiements parfois peu fiables et logistique peu traçable. GoBuy répond à ce gap avec une
          infrastructure produit unique pour découvrir, acheter et livrer à grande échelle.
        </p>
      </article>
      <article className="p-6 rounded-3xl border border-slate-100 bg-white">
        <h3 className="text-xl font-bold mb-3">Stratégie Afrique</h3>
        <ul className="space-y-2 text-slate-600">
          <li>Déploiement par hubs urbains puis extension vers les zones secondaires.</li>
          <li>Partenariats logistiques et paiement par pays pour accélérer l’adoption.</li>
          <li>Onboarding local des vendeurs avec formation, standards qualité et support.</li>
          <li>Approche multi-secteurs: commerce, retail, mode et services B2B.</li>
        </ul>
      </article>
    </div>
  </PageShell>
);
