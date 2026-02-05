import { ArrowLeft } from 'lucide-react';

interface TermsProps {
    lang: 'sr' | 'en';
    onClose: () => void;
}

const Terms = ({ lang, onClose }: TermsProps) => {
    const content = {
        sr: {
            title: 'Uslovi korišćenja',
            updated: 'Poslednje ažuriranje: Februar 2026',
            intro: 'Dobrodošli na veb sajt Blink oftalmološke ordinacije. Korišćenjem ovog sajta prihvatate sledeće uslove.',
            sections: [
                {
                    title: 'Usluge',
                    content: 'Blink pruža oftalmološke usluge uključujući:',
                    items: [
                        'Kompjutersko određivanje dioptrije',
                        'Pregled očnog dna',
                        'Merenje očnog pritiska',
                        'Savetovanje za kontaktna sočiva'
                    ]
                },
                {
                    title: 'Zakazivanje termina',
                    content: 'Termini se mogu zakazati telefonom. Molimo vas da nas obavestite najmanje 24 sata unapred ukoliko niste u mogućnosti da dođete na zakazani termin.',
                    items: []
                },
                {
                    title: 'Plaćanje',
                    content: 'Plaćanje se vrši nakon obavljenog pregleda. Prihvatamo gotovinu i platne kartice. Cene usluga su istaknute u ordinaciji.',
                    items: []
                },
                {
                    title: 'Odgovornost',
                    content: 'Informacije na ovom sajtu su informativnog karaktera i ne zamenjuju profesionalni medicinski savet. Za sve zdravstvene probleme, obratite se lekaru.',
                    items: []
                },
                {
                    title: 'Intelektualna svojina',
                    content: 'Sav sadržaj na ovom sajtu, uključujući tekstove, slike i dizajn, vlasništvo je Blink oftalmološke ordinacije i zaštićen je autorskim pravima.',
                    items: []
                },
                {
                    title: 'Izmene uslova',
                    content: 'Zadržavamo pravo da izmenimo ove uslove u bilo kom trenutku. Izmene stupaju na snagu objavljivanjem na ovoj stranici.',
                    items: []
                },
                {
                    title: 'Kontakt',
                    content: 'Za dodatna pitanja, kontaktirajte nas na +381 21 123 4567 ili nas posetite na adresi Bulevar Mihajla Pupina 10, Beograd.',
                    items: []
                }
            ]
        },
        en: {
            title: 'Terms of Service',
            updated: 'Last updated: February 2026',
            intro: 'Welcome to the Blink eye clinic website. By using this site, you accept the following terms.',
            sections: [
                {
                    title: 'Services',
                    content: 'Blink provides ophthalmic services including:',
                    items: [
                        'Computer vision testing',
                        'Fundus examination',
                        'Eye pressure measurement',
                        'Contact lens consultation'
                    ]
                },
                {
                    title: 'Appointment scheduling',
                    content: 'Appointments can be scheduled by phone. Please notify us at least 24 hours in advance if you are unable to attend your scheduled appointment.',
                    items: []
                },
                {
                    title: 'Payment',
                    content: 'Payment is made after the examination. We accept cash and credit cards. Service prices are displayed in the clinic.',
                    items: []
                },
                {
                    title: 'Liability',
                    content: 'Information on this site is for informational purposes and does not replace professional medical advice. For all health problems, consult a doctor.',
                    items: []
                },
                {
                    title: 'Intellectual property',
                    content: 'All content on this site, including text, images and design, is the property of Blink eye clinic and is protected by copyright.',
                    items: []
                },
                {
                    title: 'Changes to terms',
                    content: 'We reserve the right to modify these terms at any time. Changes take effect upon publication on this page.',
                    items: []
                },
                {
                    title: 'Contact',
                    content: 'For additional questions, contact us at +381 21 123 4567 or visit us at Bulevar Mihajla Pupina 10, Belgrade.',
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

export default Terms;
