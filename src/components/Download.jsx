import React from 'react';

export const Download = () => {
  return (
    <section id="download" className="py-24 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h3 className="text-3xl sm:text-4xl font-bold mb-8">Pret a tout acheter au meme endroit ?</h3>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 p-5 sm:p-8 bg-slate-50 rounded-3xl border border-slate-100">
          {/* QR Code Section */}
          <div className="space-y-4">
            <p className="text-lg font-bold text-slate-700">Scannez pour commencer</p>
            <div className="p-4 bg-white rounded-2xl shadow-sm inline-block border border-slate-200">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com"
                alt="QR Code"
                className="w-32 h-32"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-20 bg-slate-200 md:h-32 md:w-px" />

          {/* Store Links */}
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="flex items-center justify-center gap-4 px-8 py-4 bg-black text-white rounded-2xl hover:bg-slate-800 transition-all"
            >
              <img src='https://logoeps.com/wp-content/uploads/2012/12/apple-logo-eps-logo-vector.png' className="w-8 h-8" />
              <span className="text-lg sm:text-xl font-bold">App Store</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-4 px-8 py-4 bg-black text-white rounded-2xl hover:bg-slate-800 transition-all"
            >
              <img src='https://www.01net.com/resize/w112/e775bAvQpD3cEjuIKfMgmovddNEpxwX4nxP91dxn.png' className="w-8 h-8" />
              <span className="text-lg sm:text-xl font-bold">Play Store</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
