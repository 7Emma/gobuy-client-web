import React from 'react';

export const PageShell = ({ eyebrow, title, subtitle, children }) => {
  return (
    <section className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 mb-4">
            {eyebrow}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">{title}</h1>
          <p className="text-base sm:text-lg text-slate-500 mt-6 leading-relaxed">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
};
