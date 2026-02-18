import { useEffect, useLayoutEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Hero, Features, Producers, Download, Footer } from './components';
import { SiteHeader } from './components/SiteHeader';
import { AboutPage } from './pages/AboutPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { PressPage } from './pages/PressPage';
import { CareersPage } from './pages/CareersPage';
import { PartnersPage } from './pages/PartnersPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import './App.css';

const HomePage = () => (
  <>
    <Hero />
    <Features />
    <Producers />
    <Download />
  </>
);

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    const resetScroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      const root = document.getElementById('root');
      if (root) {
        root.scrollTop = 0;
      }
    };

    resetScroll();
    requestAnimationFrame(resetScroll);
  }, [location.pathname, location.search, location.hash, location.key]);

  return null;
};

function App() {
  const location = useLocation();

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      <ScrollToTop />
      <SiteHeader />
      <main key={location.pathname} className="route-transition">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/equipe" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/presse" element={<PressPage />} />
          <Route path="/carrieres" element={<CareersPage />} />
          <Route path="/partenaires" element={<PartnersPage />} />
          <Route path="/confidentialite" element={<PrivacyPage />} />
          <Route path="/conditions" element={<TermsPage />} />
          <Route path="*" element={<Navigate to="/faq" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
