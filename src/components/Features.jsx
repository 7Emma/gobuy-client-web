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
      title: 'Vendeurs pres de vous',
      description:
        'Trouvez rapidement des vendeurs fiables dans votre ville selon vos besoins du moment.',
    },
    {
      icon: Zap,
      title: 'Commande en quelques clics',
      description:
        'Passez votre commande en ligne sans vous casser la tete avec de bon vendeurs.',
    },
    {
      icon: Shield,
      title: 'Vendeurs verifies',
      description:
        'Chaque boutique est controlee pour vous offrir plus de confiance et de tranquillite.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 mb-4">
            Pourquoi GoBuy ?
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
            Acheter devient simple, rapide et centralise.
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
            ['120K+', 'Commandes retail / mois'],
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
            ['Shopping tech', 'Commandez un ordinateur, un telephone ou des accessoires chez des vendeurs verifies.'],
            ['Mode & beaute', 'Trouvez chaussures, chemises, pommades et autres produits en un seul endroit.'],
            ['Maison & quotidien', 'Equipez cuisine, salon et accessoires du quotidien sans perdre de temps.'],
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
            ['Aminata, acheteuse a Dakar', 'Au lieu de fouiller plusieurs statuts WhatsApp, je trouve vite ce que je veux et je commande.'],
            ['Koffi, vendeur a Abidjan', 'J ai centralise mes ventes sur GoBuy et je gere mieux mon stock, mes clients et mes commandes.'],
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
