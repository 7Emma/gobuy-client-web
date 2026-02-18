import React from 'react';
import { MapPin, Zap, Shield, Quote } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow">
      <div className="w-14 h-14 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-orange-500" />
      </div>
      <h4 className="text-xl font-bold mb-3">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Géolocalisation Directe',
      description:
        'Découvrez les fermes et producteurs autour de vous en temps réel sur une carte interactive.',
    },
    {
      icon: Zap,
      title: 'Click & Collect',
      description:
        'Commandez vos paniers depuis votre canapé et récupérez-les quand vous le souhaitez à la ferme.',
    },
    {
      icon: Shield,
      title: 'Qualité Certifiée',
      description:
        'Tous nos producteurs sont vérifiés et engagés dans une charte de transparence totale.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 mb-4">
            Pourquoi nous choisir ?
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
            Mieux manger n'a jamais été aussi simple.
          </h3>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Key Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {[
            ['3 200+', 'Vendeurs actifs'],
            ['58', 'Villes couvertes'],
            ['120K+', 'Commandes / mois'],
            ['4.8/5', 'Satisfaction moyenne'],
          ].map(([value, label]) => (
            <article key={label} className="p-5 rounded-2xl bg-white border border-slate-100 text-center">
              <p className="text-3xl font-black text-slate-900">{value}</p>
              <p className="text-sm text-slate-500 mt-1">{label}</p>
            </article>
          ))}
        </div>

        {/* Use Cases */}
        <div className="mt-12 grid lg:grid-cols-3 gap-4">
          {[
            ['Sénégal · Retail', 'Commandes B2B de produits alimentaires avec suivi logistique local.'],
            ['Côte d’Ivoire · Agro', 'Digitalisation des ventes producteurs avec catalogue et paiements sécurisés.'],
            ['Kenya · Distribution', 'Approvisionnement multi-villes et gestion des flux en temps réel.'],
          ].map(([title, text]) => (
            <article key={title} className="p-5 rounded-2xl border border-slate-100 bg-white">
              <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
              <p className="text-sm text-slate-600">{text}</p>
            </article>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[
            ['Aminata, commerçante à Dakar', 'GoBuy nous a permis de sécuriser nos commandes et d’augmenter notre volume en 3 mois.'],
            ['Koffi, producteur à Abidjan', 'La plateforme est simple, les paiements sont rapides, et je gagne du temps chaque semaine.'],
          ].map(([name, text]) => (
            <article key={name} className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
              <Quote className="w-5 h-5 text-orange-500 mb-3" />
              <p className="text-slate-700 leading-relaxed">{text}</p>
              <p className="text-sm font-bold text-slate-900 mt-4">{name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
