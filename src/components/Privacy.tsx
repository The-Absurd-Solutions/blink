import { ArrowLeft } from 'lucide-react';

interface PrivacyProps {
    lang: 'sr' | 'en';
    onClose: () => void;
}

const Privacy = ({ lang, onClose }: PrivacyProps) => {
    const content = {
        sr: {
            title: 'Politika privatnosti',
            updated: 'Poslednje ažuriranje: Februar 2026',
            intro: 'Blink oftalmološka ordinacija posvećena je zaštiti vaše privatnosti. Ova politika opisuje kako prikupljamo, koristimo i štitimo vaše lične podatke.',
            sections: [
                {
                    title: 'Podaci koje prikupljamo',
                    content: 'Možemo prikupljati sledeće informacije:',
                    items: [
                        'Ime i prezime',
                        'Kontakt informacije (telefon, email adresa)',
                        'Medicinska istorija relevantna za oftalmološki pregled',
                        'Informacije o zakazanim terminima'
                    ]
                },
                {
                    title: 'Kako koristimo vaše podatke',
                    content: 'Vaše podatke koristimo isključivo za:',
                    items: [
                        'Pružanje medicinskih usluga',
                        'Zakazivanje i upravljanje terminima',
                        'Komunikaciju u vezi sa vašim pregledom',
                        'Poboljšanje naših usluga'
                    ]
                },
                {
                    title: 'Zaštita podataka',
                    content: 'Primenjujemo odgovarajuće tehničke i organizacione mere za zaštitu vaših ličnih podataka od neovlašćenog pristupa, gubitka ili zloupotrebe.',
                    items: []
                },
                {
                    title: 'Vaša prava',
                    content: 'Imate pravo da:',
                    items: [
                        'Zatražite uvid u svoje lične podatke',
                        'Zatražite ispravku netačnih podataka',
                        'Zatražite brisanje podataka',
                        'Povučete saglasnost za obradu podataka'
                    ]
                },
                {
                    title: 'Kontakt',
                    content: 'Za sva pitanja u vezi sa vašim podacima, kontaktirajte nas na telefon +381 62 572 222 ili nas posetite na adresi Lug 32, Novi Pazar.',
                    items: []
                }
            ]
        },
        en: {
            title: 'Privacy Policy',
            updated: 'Last updated: February 2026',
            intro: 'Blink eye clinic is committed to protecting your privacy. This policy describes how we collect, use and protect your personal data.',
            sections: [
                {
                    title: 'Data we collect',
                    content: 'We may collect the following information:',
                    items: [
                        'Full name',
                        'Contact information (phone, email address)',
                        'Medical history relevant to eye examination',
                        'Appointment information'
                    ]
                },
                {
                    title: 'How we use your data',
                    content: 'We use your data exclusively for:',
                    items: [
                        'Providing medical services',
                        'Scheduling and managing appointments',
                        'Communication regarding your examination',
                        'Improving our services'
                    ]
                },
                {
                    title: 'Data protection',
                    content: 'We apply appropriate technical and organizational measures to protect your personal data from unauthorized access, loss or misuse.',
                    items: []
                },
                {
                    title: 'Your rights',
                    content: 'You have the right to:',
                    items: [
                        'Request access to your personal data',
                        'Request correction of inaccurate data',
                        'Request deletion of data',
                        'Withdraw consent for data processing'
                    ]
                },
                {
                    title: 'Contact',
                    content: 'For any questions regarding your data, contact us at +381 62 572 222 or visit us at Lug 32, Novi Pazar.',
                    items: []
                }
            ]
        }
    };

    const t = content[lang];

    return (
        <section className="flex-1 overflow-y-auto px-4 md:px-8 py-8">
            <div className="max-w-[800px] mx-auto">
                {/* Back button */}
                <button
                    onClick={onClose}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-black transition-colors mb-10"
                >
                    <ArrowLeft size={16} />
                    {lang === 'sr' ? 'nazad' : 'back'}
                </button>

                <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">{t.title}</h1>
                <p className="text-sm text-gray-400 mb-12">{t.updated}</p>

                <p className="text-gray-600 mb-10 leading-relaxed">{t.intro}</p>

                {t.sections.map((section, index) => (
                    <div key={index} className="mb-10">
                        <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                        <p className="text-gray-600 mb-4">{section.content}</p>
                        {section.items.length > 0 && (
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                {section.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Privacy;
