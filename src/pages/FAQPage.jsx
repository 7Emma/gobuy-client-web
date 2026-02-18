import React from 'react';
import { PageShell } from './PageShell';

const faqGroups = [
  {
    title: 'Acheteurs',
    items: [
      ['Comment fonctionne GoBuy ?', 'GoBuy connecte directement acheteurs et vendeurs via une app mobile et des outils de gestion.'],
      ['Comment passer une commande ?', "Créez un compte, choisissez vos produits, validez la commande et suivez son statut en temps réel."],
      ['Quels modes de paiement sont acceptés ?', 'Selon les pays: mobile money, carte bancaire et wallet partenaire.'],
      ['Comment gérer un litige ?', "Un module de support permet d’ouvrir un ticket et de suivre sa résolution avec l’équipe GoBuy."],
    ],
  },
  {
    title: 'Vendeurs',
    items: [
      ['Comment rejoindre la plateforme ?', "Passez par la page contact et notre équipe onboarding vous accompagne."],
      ['Comment sont gérés les paiements ?', "Les paiements sont sécurisés avec traçabilité des commandes et historique détaillé."],
      ['Comment se passe l’onboarding ?', "Validation profil, configuration boutique, formation rapide puis activation de votre espace vendeur."],
    ],
  },
  {
    title: 'Sécurité & conformité',
    items: [
      ['Comment protégez-vous les paiements ?', 'Transactions sécurisées, vérification des comptes et systèmes anti-fraude.' ],
      ['Comment protégez-vous les données ?', 'GoBuy applique des standards de sécurité et une politique RGPD adaptée aux opérations.'],
      ['Que faire en cas d’activité suspecte ?', 'Signalez immédiatement via le support; les comptes à risque sont mis sous contrôle renforcé.'],
    ],
  },
  {
    title: 'Partenaires',
    items: [
      ['Comment devenir partenaire logistique ?', 'Nous évaluons les zones couvertes, SLA et intégrations techniques avant onboarding.'],
      ['Quels modèles de collaboration existent ?', 'Distribution, paiement, logistique, institutionnel et activation locale.'],
      ['Avez-vous une offre entreprise ?', 'Oui, nous proposons un accompagnement B2B et des intégrations personnalisées.'],
      ['Dans quelles villes êtes-vous disponibles ?', 'Nous déployons progressivement. Contactez-nous pour proposer votre zone.'],
    ],
  },
];

export const FAQPage = () => (
  <PageShell
    eyebrow="FAQ"
    title="Questions fréquentes."
    subtitle="Les réponses aux questions les plus posées par les utilisateurs, partenaires et producteurs."
  >
    <div className="space-y-8">
      {faqGroups.map((group) => (
        <section key={group.title}>
          <h3 className="text-sm font-black uppercase tracking-[0.15em] text-orange-500 mb-4">{group.title}</h3>
          <div className="space-y-4">
            {group.items.map(([q, a]) => (
              <article key={q} className="p-6 rounded-2xl border border-slate-100 bg-white">
                <h4 className="text-lg font-bold mb-2">{q}</h4>
                <p className="text-slate-600">{a}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  </PageShell>
);
