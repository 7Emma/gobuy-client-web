import React from 'react';
import { PageShell } from './PageShell';

const team = [
  {
    name: 'Emmanuel A.',
    role: 'CEO & Product',
    bio: 'Ex-Product Lead, 8 ans en stratégie produit et lancement de plateformes digitales.',
    img: 'https://i.pravatar.cc/300?u=gobuy-team-1',
    linkedin: 'https://www.linkedin.com',
  },
  {
    name: 'Attirand A.',
    role: 'COO',
    bio: 'Experte opérations terrain et structuration de réseaux de distribution locale.',
    img: 'https://i.pravatar.cc/300?u=gobuy-team-2',
    linkedin: 'https://www.linkedin.com',
  },
  {
    name: 'Billa A.',
    role: 'CTO',
    bio: 'Ingénieur software, spécialiste architecture scalable et sécurité applicative.',
    img: 'https://i.pravatar.cc/300?u=gobuy-team-3',
    linkedin: 'https://www.linkedin.com',
  },
  {
    name: 'Sarah L.',
    role: 'Growth Lead',
    bio: 'Pilotage acquisition, partenariats et expansion multi-marchés.',
    img: 'https://i.pravatar.cc/300?u=gobuy-team-4',
    linkedin: 'https://www.linkedin.com',
  },
];

export const TeamPage = () => (
  <PageShell
    eyebrow="Équipe"
    title="Une équipe produit, tech et terrain."
    subtitle="Nous combinons expertise digitale et connaissance du commerce local pour construire une plateforme utile, robuste et scalable."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {team.map((member) => (
        <article key={member.name} className="rounded-3xl overflow-hidden border border-slate-100 bg-white shadow-sm">
          <img src={member.img} alt={member.name} className="w-full h-56 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg">{member.name}</h3>
            <p className="text-slate-500 text-sm">{member.role}</p>
            <p className="text-slate-600 text-xs mt-2 leading-relaxed">{member.bio}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 text-xs font-semibold text-orange-500 hover:text-orange-600"
            >
              LinkedIn
            </a>
          </div>
        </article>
      ))}
    </div>

    <div className="grid lg:grid-cols-2 gap-6">
      <article className="p-6 rounded-3xl border border-slate-100 bg-slate-50">
        <h3 className="text-2xl font-bold mb-3">Nos principes de travail</h3>
        <ul className="space-y-2 text-slate-600">
          <li>Ownership fort et culture du résultat.</li>
          <li>Décisions guidées par les besoins du terrain.</li>
          <li>Livraisons fréquentes et feedback rapide.</li>
          <li>Qualité produit et sécurité en priorité.</li>
        </ul>
      </article>
      <article className="p-6 rounded-3xl border border-slate-100 bg-white shadow-sm">
        <h3 className="text-2xl font-bold mb-3">Nous recrutons</h3>
        <p className="text-slate-600 mb-4">
          Tu veux construire une plateforme de commerce panafricaine à fort impact ?
          Rejoins une équipe qui exécute vite et pense long terme.
        </p>
        <p className="text-sm text-slate-500">
          Consulte les postes ouverts sur la page Carrières.
        </p>
      </article>
    </div>

    <div className="mt-10 rounded-3xl border border-slate-100 bg-white p-6">
      <h3 className="text-xl font-bold mb-3">Advisory Board</h3>
      <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-600">
        <p>Fintech & Paiement: accompagnement conformité et flux transfrontaliers.</p>
        <p>Supply Chain: optimisation des opérations logistiques multi-pays.</p>
        <p>Commerce local: expertise terrain sur les réseaux de vendeurs africains.</p>
      </div>
    </div>
  </PageShell>
);
