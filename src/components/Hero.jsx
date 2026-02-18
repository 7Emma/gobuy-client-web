import React from 'react';
import { Apple, Play, Star } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 hero-gradient">
      {/* Blob background */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-orange-500 rounded-full filter blur-[80px] opacity-10 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left content */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-bold animate-bounce">
            <Star className="w-4 h-4" />
            <span>Plateforme de commerce panafricaine</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Le goût du vrai, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              en un clic.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-xl text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
            GoBuy connecte acheteurs et vendeurs sur l'étendue africaine, avec une expérience
            simple, fiable et adaptée aux réalités du commerce local.
          </p>

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a
              href="#"
              className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl"
            >
              <img src='https://logoeps.com/wp-content/uploads/2012/12/apple-logo-eps-logo-vector.png' className="w-8 h-6" />
              <div className="text-left">
                <p className="text-[10px] uppercase opacity-60 leading-none">Disponible sur</p>
                <p className="text-lg leading-none">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold hover:scale-105 transition-transform shadow-sm"
            >
              <img src='https://www.01net.com/resize/w112/e775bAvQpD3cEjuIKfMgmovddNEpxwX4nxP91dxn.png' className="w-6 h-6" />
              <div className="text-left">
                <p className="text-[10px] uppercase opacity-60 leading-none">Disponible sur</p>
                <p className="text-lg leading-none">Google Play</p>
              </div>
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start pt-4">
            <div className="flex -space-x-3">
              <img
                src="https://i.pravatar.cc/100?u=1"
                className="w-10 h-10 rounded-full border-4 border-white shadow-sm"
                alt="User"
              />
              <img
                src="https://i.pravatar.cc/100?u=2"
                className="w-10 h-10 rounded-full border-4 border-white shadow-sm"
                alt="User"
              />
              <img
                src="https://i.pravatar.cc/100?u=3"
                className="w-10 h-10 rounded-full border-4 border-white shadow-sm"
                alt="User"
              />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-400">+10k utilisateurs nous font confiance</p>
          </div>
        </div>

        {/* Right - Phone mockups */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -z-10 w-64 sm:w-80 h-64 sm:h-80 bg-orange-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="sm:hidden relative w-[250px] h-[410px]">
            <div className="absolute top-7 -left-2 w-[170px] h-[352px] bg-slate-950 rounded-[2.2rem] overflow-hidden border-8 border-slate-950 shadow-[0_30px_70px_-25px_rgba(0,0,0,0.35)] rotate-[-8deg] opacity-90">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-950 rounded-b-2xl z-20" />
              <div className="absolute inset-[6px] rounded-[1.9rem] overflow-hidden bg-white">
                <img
                  src="/mockups/gobuy-login.jpg"
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Écran login GoBuy"
                />
              </div>
            </div>
            <div className="absolute top-0 right-0 w-[170px] h-[352px] bg-slate-950 rounded-[2.2rem] overflow-hidden border-8 border-slate-950 shadow-[0_45px_85px_-25px_rgba(0,0,0,0.35)] rotate-[4deg] z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-950 rounded-b-2xl z-20" />
              <div className="absolute inset-[6px] rounded-[1.9rem] overflow-hidden bg-white">
                <img
                  src="/mockups/gobuy-home.jpg"
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Écran accueil GoBuy"
                />
              </div>
            </div>
          </div>

          <div className="hidden sm:flex items-end gap-4 md:gap-6">
            <div className="w-[220px] md:w-[230px] h-[455px] md:h-[475px] bg-slate-950 rounded-[2.6rem] overflow-hidden border-8 border-slate-950 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25),_0_30px_60px_-30px_rgba(0,0,0,0.3)] relative rotate-[-3deg]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-950 rounded-b-2xl z-20" />
              <div className="absolute inset-[6px] rounded-[1.9rem] overflow-hidden bg-white">
                <img
                  src="/mockups/gobuy-login.jpg"
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Écran login GoBuy"
                />
              </div>
            </div>
            <div className="w-[220px] md:w-[230px] h-[455px] md:h-[475px] bg-slate-950 rounded-[2.6rem] overflow-hidden border-8 border-slate-950 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25),_0_30px_60px_-30px_rgba(0,0,0,0.3)] relative rotate-[3deg]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-950 rounded-b-2xl z-20" />
              <div className="absolute inset-[6px] rounded-[1.9rem] overflow-hidden bg-white">
                <img
                  src="/mockups/gobuy-home.jpg"
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Écran accueil GoBuy"
                />
              </div>
            </div>
          </div>
          <p className="absolute -bottom-7 sm:-bottom-8 text-[11px] sm:text-xs font-semibold text-slate-400 text-center">
            Aperçu réel de l'application GoBuy
          </p>
        </div>
      </div>
    </section>
  );
};
