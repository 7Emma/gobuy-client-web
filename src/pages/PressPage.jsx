import React from 'react';
import { PageShell } from './PageShell';

export const PressPage = () => (
  <PageShell
    eyebrow="Presse"
    title="Ressources médias et actualités."
    subtitle="Retrouvez le kit presse de GoBuy, les derniers communiqués et nos éléments de marque."
  >
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <article className="p-6 rounded-3xl border border-slate-100 bg-slate-50">
        <h3 className="text-xl font-bold mb-2">Media kit</h3>
        <p className="text-slate-600 mb-4">
          Logos (PNG/SVG), screenshots app, boilerplate entreprise, charte visuelle et photos officielles.
        </p>
        <a
          href="/press/gobuy-media-kit.zip"
          className="inline-flex px-5 py-2.5 rounded-xl bg-orange-500 text-white font-semibold"
        >
          Télécharger
        </a>
        <p className="text-xs text-slate-500 mt-3">Version: 2026.02 - mise à jour mensuelle</p>
      </article>
      <article className="p-6 rounded-3xl border border-slate-100 bg-white">
        <h3 className="text-xl font-bold mb-2">Communiqué récent</h3>
        <p className="text-slate-600">
          GoBuy annonce l’ouverture de nouvelles zones pilotes en 2026 et le renforcement de son réseau
          logistique régional.
        </p>
      </article>
    </div>

    <div className="grid lg:grid-cols-3 gap-4">
      {[
        ['Interviews', 'Interventions fondateurs et leadership produit.'],
        ['Communiqués', 'Mises à jour officielles produit et partenariats.'],
        ['Assets', 'Pack logos, charte, captures app et boilerplate.'],
      ].map(([title, text]) => (
        <article key={title} className="p-5 rounded-2xl border border-slate-100 bg-white">
          <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
          <p className="text-sm text-slate-600">{text}</p>
        </article>
      ))}
    </div>

    <div className="grid lg:grid-cols-2 gap-6">
      <article className="p-6 rounded-3xl border border-slate-100 bg-white">
        <h3 className="text-xl font-bold mb-3">Mentions & Médias</h3>
        <ul className="space-y-2 text-slate-600">
          <li>Tech Afrique Podcast - episode strategie marketplace</li>
          <li>Africa Product Review - interview fondateur</li>
          <li>Commerce Local Summit - keynote GoBuy</li>
          <li>Digital Trade Africa - dossier special commerce local</li>
        </ul>
      </article>
      <article className="p-6 rounded-3xl border border-slate-100 bg-slate-50">
        <h3 className="text-xl font-bold mb-3">Contact presse</h3>
        <p className="text-slate-600 mb-2">Email: press@gobuy.app</p>
        <p className="text-slate-600 mb-2">WhatsApp: +225 07 00 00 00 00</p>
        <p className="text-slate-600">Délai moyen de réponse: 24h ouvrées</p>
      </article>
    </div>
  </PageShell>
);
