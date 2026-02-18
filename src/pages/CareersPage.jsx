import React from "react";
import { PageShell } from "./PageShell";

const jobs = [
  ["Frontend Engineer", "Paris / Remote"],
  ["Backend Engineer", "Paris / Remote"],
  ["Partnership Manager", "Abidjan"],
];

export const CareersPage = () => (
  <PageShell
    eyebrow="Carrières"
    title="Rejoignez l’équipe GoBuy."
    subtitle="Nous cherchons des profils ambitieux pour construire la prochaine génération de commerce local."
  >
    <div className="space-y-4 mb-10">
      {jobs.map(([title, location]) => (
        <article
          key={title}
          className="p-5 rounded-2xl border border-slate-100 bg-white flex items-center justify-between"
        >
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-slate-500 text-sm">{location}</p>
          </div>
          <button className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-semibold">
            Postuler
          </button>
        </article>
      ))}
    </div>

    <div className="grid lg:grid-cols-2 gap-6">
      <article className="p-6 rounded-3xl border border-slate-100 bg-slate-50">
        <h3 className="text-xl font-bold mb-3">Pourquoi nous rejoindre ?</h3>
        <ul className="space-y-2 text-slate-600">
          <li>Impact concret sur le commerce local africain.</li>
          <li>Équipe produit orientée exécution et qualité.</li>
          <li>Autonomie forte et montée en compétence rapide.</li>
          <li>Culture d’amélioration continue.</li>
        </ul>
      </article>
      <article className="p-6 rounded-3xl border border-slate-100 bg-white">
        <h3 className="text-xl font-bold mb-3">Process de recrutement</h3>
        <ol className="space-y-2 text-slate-600 list-decimal list-inside">
          <li>Échange découverte (30 min)</li>
          <li>Entretien métier / étude de cas</li>
          <li>Entretien final culture & vision</li>
          <li>Offre et onboarding</li>
        </ol>
      </article>
    </div>
  </PageShell>
);
