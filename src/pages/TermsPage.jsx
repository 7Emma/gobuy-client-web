import React from 'react';
import { PageShell } from './PageShell';

export const TermsPage = () => (
  <PageShell
    eyebrow="Légal"
    title="Conditions d’utilisation."
    subtitle="Ces conditions encadrent l’utilisation de GoBuy pour les acheteurs, producteurs et partenaires."
  >
    <div className="space-y-6 text-slate-600 leading-relaxed">
      <p className="text-sm text-slate-400">Version: v2.0 - Dernière mise à jour: 18 février 2026</p>
      <section className="p-5 rounded-2xl border border-slate-100 bg-white">
        <h3 className="font-bold text-slate-900 mb-2">Acceptation</h3>
        <p>L’utilisation de GoBuy implique l’acceptation pleine et entière des présentes conditions générales d’utilisation.</p>
      </section>
      <section className="p-5 rounded-2xl border border-slate-100 bg-white">
        <h3 className="font-bold text-slate-900 mb-2">Création de compte et sécurité</h3>
        <p>L’utilisateur est responsable de la confidentialité de ses identifiants et des actions réalisées depuis son compte.</p>
      </section>
      <section className="p-5 rounded-2xl border border-slate-100 bg-white">
        <h3 className="font-bold text-slate-900 mb-2">Règles de la marketplace</h3>
        <p>Les vendeurs garantissent l’exactitude des offres publiées. Les acheteurs s’engagent à respecter les conditions de commande et de paiement.</p>
      </section>
      <section className="p-5 rounded-2xl border border-slate-100 bg-white">
        <h3 className="font-bold text-slate-900 mb-2">Paiement, livraison et litiges</h3>
        <p>Les flux de paiement et de livraison suivent les conditions applicables par pays. En cas de litige, un processus de médiation interne est déclenché.</p>
      </section>
      <section className="p-5 rounded-2xl border border-slate-100 bg-white">
        <h3 className="font-bold text-slate-900 mb-2">Responsabilités et limites</h3>
        <p>Chaque partie reste responsable de ses obligations. GoBuy agit comme plateforme d’intermédiation et applique des contrôles raisonnables de conformité.</p>
      </section>
      <section className="p-5 rounded-2xl border border-slate-100 bg-white">
        <h3 className="font-bold text-slate-900 mb-2">Droit applicable et évolution des CGU</h3>
        <p>Les présentes CGU peuvent être mises à jour selon les exigences légales et produit. La version en vigueur est publiée sur cette page.</p>
      </section>
    </div>
  </PageShell>
);
