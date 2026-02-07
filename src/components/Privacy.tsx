import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Privacy = () => {
    const { lang } = useLanguage();
    const t = translations[lang].privacy;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#f3f4f6] text-gray-800 leading-relaxed">
            <div className="max-w-200 mx-auto px-6 py-15">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors text-sm mb-10"
                >
                    {t.back}
                </Link>

                <h1 className="text-4xl font-bold mb-2">{t.title}</h1>
                <p className="text-gray-400 text-sm mb-12">{t.updated}</p>

                <p className="text-gray-600 mb-4">{t.intro}</p>

                <h2 className="text-xl font-semibold mt-10 mb-4">{t.dataCollectTitle}</h2>
                <p className="text-gray-600 mb-4">{t.dataCollectIntro}</p>
                <ul className="ml-6 mb-4 text-gray-600 list-disc">
                    {t.dataCollectItems.map((item, i) => (
                        <li key={i} className="mb-2">{item}</li>
                    ))}
                </ul>

                <h2 className="text-xl font-semibold mt-10 mb-4">{t.dataUseTitle}</h2>
                <p className="text-gray-600 mb-4">{t.dataUseIntro}</p>
                <ul className="ml-6 mb-4 text-gray-600 list-disc">
                    {t.dataUseItems.map((item, i) => (
                        <li key={i} className="mb-2">{item}</li>
                    ))}
                </ul>

                <h2 className="text-xl font-semibold mt-10 mb-4">{t.dataProtectionTitle}</h2>
                <p className="text-gray-600 mb-4">{t.dataProtectionText}</p>

                <h2 className="text-xl font-semibold mt-10 mb-4">{t.rightsTitle}</h2>
                <p className="text-gray-600 mb-4">{t.rightsIntro}</p>
                <ul className="ml-6 mb-4 text-gray-600 list-disc">
                    {t.rightsItems.map((item, i) => (
                        <li key={i} className="mb-2">{item}</li>
                    ))}
                </ul>

                <h2 className="text-xl font-semibold mt-10 mb-4">{t.contactTitle}</h2>
                <p className="text-gray-600 mb-4">{t.contactText}</p>
            </div>
        </div>
    );
};

export default Privacy;
