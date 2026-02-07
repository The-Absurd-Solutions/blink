import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Terms = () => {
    const { lang } = useLanguage();
    const t = translations[lang].terms;

    return (
        <>
            <h1 className="text-4xl font-bold mb-2">{t.title}</h1>
            <p className="text-gray-400 text-sm mb-12">{t.updated}</p>

            <p className="text-gray-600 mb-4">{t.intro}</p>

            <h2 className="text-xl font-semibold mt-10 mb-4">{t.servicesTitle}</h2>
            <p className="text-gray-600 mb-4">{t.servicesIntro}</p>
            <ul className="ml-6 mb-4 text-gray-600 list-disc">
                {t.servicesItems.map((item, i) => (
                    <li key={i} className="mb-2">{item}</li>
                ))}
            </ul>

            <h2 className="text-xl font-semibold mt-10 mb-4">{t.schedulingTitle}</h2>
            <p className="text-gray-600 mb-4">{t.schedulingText}</p>

            <h2 className="text-xl font-semibold mt-10 mb-4">{t.paymentTitle}</h2>
            <p className="text-gray-600 mb-4">{t.paymentText}</p>

            <h2 className="text-xl font-semibold mt-10 mb-4">{t.liabilityTitle}</h2>
            <p className="text-gray-600 mb-4">{t.liabilityText}</p>

            <h2 className="text-xl font-semibold mt-10 mb-4">{t.ipTitle}</h2>
            <p className="text-gray-600 mb-4">{t.ipText}</p>

            <h2 className="text-xl font-semibold mt-10 mb-4">{t.changesTitle}</h2>
            <p className="text-gray-600 mb-4">{t.changesText}</p>

            <h2 className="text-xl font-semibold mt-10 mb-4">{t.contactTitle}</h2>
            <p className="text-gray-600 mb-4">{t.contactText}</p>
        </>
    );
};

export default Terms;
