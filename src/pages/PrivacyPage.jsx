import React from 'react';
import { PageShell } from './PageShell';

export const PrivacyPage = () => (
  <PageShell
    eyebrow="Légal"
    title="Politique de confidentialité."
    subtitle="Nous protégeons les données utilisateurs avec des pratiques de sécurité et de conformité adaptées."
  >
    <div className="space-y-6 text-slate-600 leading-relaxed">
      <p className="text-sm text-slate-400">Version: v2.0 - Dernière mise à jour: 18 février 2026</p>
      <section className="p-5 rounded-2xl border border-slate-100 bg-white">
        <h3 className="font-bold text-slate-900 mb-2">Collecte de données</h3>
        <p>
          GoBuy collecte uniquement les données nécessaires au fonctionnement du service: identité, contact,
          informations de paiement, données de commande, géolocalisation et échanges support.
        </p>
      </section>
      <section className="p-5 rounded-2xl border border-slate-100 bg-white">
        <h3 className="font-bold text-slate-900 mb-2">Base légale et finalités</h3>
        <p>
          Le traitement repose sur l’exécution du contrat, l’intérêt légitime (sécurité, qualité de service) et
          les obligations légales. Les données servent à exécuter les commandes, prévenir la fraude et améliorer
          les performances de la plateforme.
        </p>
      </section>
      <section className="p-5 rounded-2xl border border-slate-100 bg-white">
        <h3 className="font-bold text-slate-900 mb-2">Conservation et partage</h3>
        <p>
          Les données sont conservées le temps strictement nécessaire à la relation commerciale et aux obligations
          réglementaires. Certaines données peuvent être partagées avec des sous-traitants (paiement, logistique,
          hébergement) selon des clauses de confidentialité strictes.
        </p>
      </section>
      <section className="p-5 rounded-2xl border border-slate-100 bg-white">
        <h3 className="font-bold text-slate-900 mb-2">Droits utilisateurs (RGPD)</h3>
        <p>
          Les utilisateurs peuvent exercer leurs droits d’accès, rectification, opposition, limitation, portabilité
          et suppression en écrivant à privacy@gobuy.app. Une réponse est fournie sous 30 jours.
        </p>
      </section>
      <section className="p-5 rounded-2xl border border-slate-100 bg-white">
        <h3 className="font-bold text-slate-900 mb-2">Sécurité</h3>
        <p>
          GoBuy applique des contrôles d’accès, chiffrement en transit, journalisation de sécurité et surveillance
          anti-fraude pour protéger les données et les transactions.
        </p>
      </section>
    </div>
  </PageShell>
);
