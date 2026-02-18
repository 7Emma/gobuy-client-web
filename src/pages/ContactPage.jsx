import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { PageShell } from './PageShell';

export const ContactPage = () => {
  const formEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || '';

  return (
    <PageShell
      eyebrow="Contact"
      title="Parlons de votre projet avec GoBuy."
      subtitle="Vous souhaitez rejoindre le réseau, devenir partenaire, ou déployer GoBuy dans une nouvelle ville ? Notre équipe vous répond rapidement."
    >
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div className="p-6 rounded-3xl border border-slate-100 bg-slate-50 space-y-6">
          <h3 className="text-2xl font-bold">Coordonnées</h3>
          <div className="space-y-4 text-slate-600">
            <p className="flex items-center gap-3"><Mail className="w-5 h-5 text-orange-500" /> contact@gobuy.app</p>
            <p className="flex items-center gap-3"><Phone className="w-5 h-5 text-orange-500" /> +33 1 84 80 00 00</p>
            <p className="flex items-center gap-3"><MapPin className="w-5 h-5 text-orange-500" /> Paris, France</p>
            <p className="pt-2">
              <a
                href="https://wa.me/2250700000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex px-4 py-2 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600"
              >
                Ouvrir WhatsApp Business
              </a>
            </p>
          </div>
        </div>
        <form
          className="p-6 rounded-3xl border border-slate-100 bg-white shadow-sm space-y-4"
          action={formEndpoint || undefined}
          method={formEndpoint ? 'POST' : undefined}
        >
          <input type="hidden" name="source" value="website-contact-page" />
          <input name="name" className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Nom" required />
          <input name="email" type="email" className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Email" required />
          <select name="profile" className="w-full rounded-xl border border-slate-200 px-4 py-3 bg-white" defaultValue="">
            <option value="" disabled>Vous êtes...</option>
            <option value="acheteur">Acheteur</option>
            <option value="vendeur">Vendeur</option>
            <option value="partenaire">Partenaire</option>
            <option value="presse">Presse</option>
          </select>
          <textarea name="message" className="w-full rounded-xl border border-slate-200 px-4 py-3 min-h-32" placeholder="Votre message" required />
          {formEndpoint ? (
            <button type="submit" className="px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800">
              Envoyer
            </button>
          ) : (
            <p className="text-sm text-slate-500">
              Configurez <code>VITE_CONTACT_FORM_ENDPOINT</code> pour connecter ce formulaire (Formspree/backend).
            </p>
          )}
        </form>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {[
          ['Support', 'Réponse sous 24h', 'Lun - Sam'],
          ['Partenariats', 'Réponse sous 48h', 'Sur rendez-vous'],
          ['Presse', 'Réponse sous 24h', 'Canal prioritaire'],
        ].map(([title, detail, time]) => (
          <article key={title} className="p-5 rounded-2xl border border-slate-100 bg-white text-center">
            <h4 className="font-bold text-slate-900">{title}</h4>
            <p className="text-slate-600 text-sm mt-1">{detail}</p>
            <p className="text-xs text-slate-400 mt-2">{time}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
};
