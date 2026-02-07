import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageContext } from './context/LanguageContext';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';
import Services from './components/Services';
import Technology from './components/Technology';
import FAQ from './components/FAQ';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

function getInitialLang(): 'sr' | 'en' {
  const params = new URLSearchParams(window.location.search);
  if (params.get('lang') === 'en') return 'en';
  if (params.get('lang') === 'sr') return 'sr';
  const saved = localStorage.getItem('lang');
  if (saved === 'en') return 'en';
  return 'sr';
}

function HomePage() {
  return (
    <div className="w-full bg-[#f3f4f6]">
      <Hero />
      <Services />
      <Technology />
      <FAQ />
      <Booking />
      <Footer />
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<'sr' | 'en'>(getInitialLang);

  // Update html lang attribute and URL when language changes
  useEffect(() => {
    document.documentElement.lang = lang === 'sr' ? 'sr' : 'en';
    localStorage.setItem('lang', lang);

    // Update URL without reload
    const url = new URL(window.location.href);
    if (lang === 'en') {
      url.searchParams.set('lang', 'en');
    } else {
      url.searchParams.delete('lang');
    }
    window.history.replaceState({}, '', url.toString());

    // Update meta description based on language
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content',
        lang === 'sr'
          ? 'Blink oftalmološka ordinacija u Novom Pazaru. Najsavremenija dijagnostika vida, pregled očnog dna, merenje očnog pritiska. Zakažite pregled danas.'
          : 'Blink eye clinic in Novi Pazar. State-of-the-art vision diagnostics, fundus examination, eye pressure measurement. Book your appointment today.'
      );
    }

    // Update page title based on language
    document.title = lang === 'sr'
      ? 'Blink | Oftalmološka ordinacija Novi Pazar - Pregled vida i dijagnostika'
      : 'Blink | Eye Clinic Novi Pazar - Vision Examination and Diagnostics';
  }, [lang]);

  return (
    <ErrorBoundary>
      <LanguageContext.Provider value={{ lang, setLang }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </LanguageContext.Provider>
    </ErrorBoundary>
  );
}
