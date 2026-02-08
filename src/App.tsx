import { useState, useEffect, lazy, Suspense, type ReactNode } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { LanguageContext } from './context/LanguageContext';
import { useLanguage } from './context/LanguageContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Conditions from './components/Conditions';
import Technology from './components/Technology';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import About from './components/About';
import Booking from './components/Booking';
import Footer from './components/Footer';

const Privacy = lazy(() => import('./components/Privacy'));
const Terms = lazy(() => import('./components/Terms'));

function getInitialLang(): 'sr' | 'en' {
  const params = new URLSearchParams(window.location.search);
  if (params.get('lang') === 'en') return 'en';
  if (params.get('lang') === 'sr') return 'sr';
  const saved = localStorage.getItem('lang');
  if (saved === 'en') return 'en';
  return 'sr';
}

function PageLayout({ children }: { children: ReactNode }) {
  const { lang } = useLanguage();
  const t = lang === 'sr' ? '← Nazad na početnu' : '← Back to homepage';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-(--color-bg) text-gray-800 leading-relaxed">
      <main className="max-w-200 mx-auto px-6 py-15">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors text-sm mb-10"
        >
          {t}
        </Link>
        {children}
      </main>
    </div>
  );
}

function NotFound() {
  const { lang } = useLanguage();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-(--color-bg) p-8 text-center">
      <main>
        <div className="text-[8rem] font-black leading-none text-black mb-4" aria-label="Error 404">
          4<span className="text-(--color-gold)">0</span>4
        </div>
        <h1 className="text-2xl font-bold text-black mb-4">
          {lang === 'sr' ? 'Stranica nije pronađena' : 'Page not found'}
        </h1>
        <p className="text-gray-500 mb-8 max-w-md">
          {lang === 'sr'
            ? 'Stranica koju tražite ne postoji ili je premještena.'
            : 'The page you are looking for does not exist or has been moved.'}
        </p>
        <Link
          to="/"
          className="px-8 py-3 bg-black text-white font-medium hover:bg-(--color-gold) hover:text-black transition-colors"
        >
          {lang === 'sr' ? '← Nazad na početnu' : '← Back to homepage'}
        </Link>
      </main>
    </div>
  );
}

function HomePage() {
  const [lensEnabled, setLensEnabled] = useState(true);

  return (
    <div className="w-full bg-(--color-bg)">
      <Navbar lensEnabled={lensEnabled} setLensEnabled={setLensEnabled} />
      <Hero lensEnabled={lensEnabled} />
      <main id="main-content">
        <Services />
        <Gallery />
        <Conditions />
        <Technology />
        <About />
        <FAQ />
        <Booking />
      </main>
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
          ? 'Blink oftalmološka ordinacija u Novom Pazaru. Oftalmolog i okulista za pregled vida, dioptriju, očni pritisak, pregled očnog dna, kontaktna sočiva. Najsavremenija dijagnostika. Zakažite pregled: +381 62 572 222.'
          : 'Blink eye clinic in Novi Pazar. Ophthalmologist for vision testing, eye pressure, fundus examination, contact lenses. State-of-the-art diagnostics. Book appointment: +381 62 572 222.'
      );
    }

    // Update page title based on language
    document.title = lang === 'sr'
      ? 'Blink | Oftalmolog Novi Pazar - Očni pregled, dioptrija, pregled vida'
      : 'Blink | Ophthalmologist Novi Pazar - Eye Exam, Vision Diagnostics';
  }, [lang]);

  return (
    <ErrorBoundary>
      <LanguageContext.Provider value={{ lang, setLang }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<Suspense><PageLayout><Privacy /></PageLayout></Suspense>} />
          <Route path="/terms" element={<Suspense><PageLayout><Terms /></PageLayout></Suspense>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LanguageContext.Provider>
    </ErrorBoundary>
  );
}
