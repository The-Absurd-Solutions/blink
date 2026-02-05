import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Technology from './components/Technology';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<'sr' | 'en'>('sr');
  const [lensEnabled, setLensEnabled] = useState(true);

  // Update html lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = lang === 'sr' ? 'sr' : 'en';

    // Update meta description based on language
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content',
        lang === 'sr'
          ? 'Blink oftalmološka ordinacija u Beogradu. Najsavremenija dijagnostika vida, pregled očnog dna, merenje očnog pritiska. Zakažite pregled danas.'
          : 'Blink eye clinic in Belgrade. State-of-the-art vision diagnostics, fundus examination, eye pressure measurement. Book your appointment today.'
      );
    }

    // Update page title based on language
    document.title = lang === 'sr'
      ? 'Blink | Oftalmološka ordinacija Beograd - Pregled vida i dijagnostika'
      : 'Blink | Eye Clinic Belgrade - Vision Examination and Diagnostics';
  }, [lang]);

  return (
    <div className="w-full bg-[#f3f4f6]">
      <Hero lang={lang} setLang={setLang} lensEnabled={lensEnabled} setLensEnabled={setLensEnabled} />
      <Services lang={lang} />
      <Technology lang={lang} />
      <FAQ lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
