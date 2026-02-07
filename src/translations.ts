interface ServiceItem {
    number: string;
    title: string;
    description: string;
}

interface StatItem {
    number: string;
    label: string;
}

interface FAQItem {
    question: string;
    answer: string;
}

interface PrivacySection {
    title: string;
    heading: string;
}

interface TermsSection {
    title: string;
    heading: string;
}

export interface Translation {
    nav: {
        services: string;
        tech: string;
        faq: string;
        contact: string;
        cta: string;
    };
    hero: {
        clinic: string;
        left: string;
        right: string;
    };
    services: {
        label: string;
        title: string;
        description: string;
        items: ServiceItem[];
    };
    technology: {
        label: string;
        title: string;
        subtitle: string;
        text: string;
        stats: StatItem[];
    };
    faq: {
        label: string;
        title: string;
        items: FAQItem[];
    };
    booking: {
        label: string;
        title: string;
        description: string;
    };
    footer: {
        ready: string;
        ctaTitle: string;
        ctaSubtitle: string;
        ctaButton: string;
        navigation: string;
        contact: string;
        address: string;
        phone: string;
        hours: string;
        tagline: string;
        copyright: string;
        location: string;
        privacy: string;
        terms: string;
    };
    lens: {
        label: string;
    };
    privacy: {
        title: string;
        updated: string;
        back: string;
        intro: string;
        dataCollectTitle: string;
        dataCollectIntro: string;
        dataCollectItems: string[];
        dataUseTitle: string;
        dataUseIntro: string;
        dataUseItems: string[];
        dataProtectionTitle: string;
        dataProtectionText: string;
        rightsTitle: string;
        rightsIntro: string;
        rightsItems: string[];
        contactTitle: string;
        contactText: string;
        sections: PrivacySection[];
    };
    terms: {
        title: string;
        updated: string;
        back: string;
        intro: string;
        servicesTitle: string;
        servicesIntro: string;
        servicesItems: string[];
        schedulingTitle: string;
        schedulingText: string;
        paymentTitle: string;
        paymentText: string;
        liabilityTitle: string;
        liabilityText: string;
        ipTitle: string;
        ipText: string;
        changesTitle: string;
        changesText: string;
        contactTitle: string;
        contactText: string;
        sections: TermsSection[];
    };
}

export const translations: Record<'sr' | 'en', Translation> = {
    sr: {
        nav: {
            services: "usluge",
            tech: "tehnologija",
            faq: "faq",
            contact: "kontakt",
            cta: "zakažite pregled"
        },
        hero: {
            clinic: "Oftalmološka ordinacija Novi Pazar",
            left: "Spoj vrhunske tehnologije i medicinske ekspertize. Posvećeni smo očuvanju i unapređenju vašeg vida kroz individualizovan pristup i preciznu dijagnostiku u srcu Novog Pazara.",
            right: "Vid nije samo čulo, već način na koji doživljavate svet. Otkrijte novu dimenziju jasnoće kod vašeg oftalmologa uz standarde nege koji ne prave kompromise."
        },
        services: {
            label: "Šta radimo",
            title: "Usluge",
            description: "Pružamo kompletnu oftalmološku dijagnostiku u Novom Pazaru uz najsavremeniju opremu i individualan pristup svakom pacijentu.",
            items: [
                {
                    number: '01',
                    title: 'Kompjutersko određivanje dioptrije',
                    description: 'Najsavremenija tehnologija za precizno merenje i korekciju vida.'
                },
                {
                    number: '02',
                    title: 'Pregled očnog dna',
                    description: 'Prevencija i rana dijagnostika očnih bolesti.'
                },
                {
                    number: '03',
                    title: 'Merenje očnog pritiska',
                    description: 'Bezbolna metoda za prevenciju i otkrivanje glaukoma.'
                },
                {
                    number: '04',
                    title: 'Kontaktna sočiva',
                    description: 'Profesionalno savetovanje, prilagođavanje i obuka za nošenje.'
                }
            ]
        },
        technology: {
            label: "preciznost",
            title: "Tehnologija",
            subtitle: "Tehnologija koja vidi više",
            text: "Koristimo uređaje poslednje generacije koji omogućavaju uvid u najsitnije detalje strukture oka. Preciznost kojom radimo eliminiše nagađanje.",
            stats: [
                { number: '0.01', label: 'mm preciznost' },
                { number: '4K', label: 'HD dijagnostika' },
                { number: '2025', label: 'najnovija oprema' }
            ]
        },
        faq: {
            label: "Pomoć",
            title: "FAQ",
            items: [
                {
                    question: 'Koliko često treba raditi pregled?',
                    answer: 'Preporučujemo redovan oftalmološki pregled jednom godišnje. Za osobe sa dijabetesom, glaukomom ili drugim hroničnim stanjima, pregledi mogu biti češći prema preporuci lekara.'
                },
                {
                    question: 'Da li pregled boli?',
                    answer: 'Ne, oftalmološki pregled je potpuno bezbolan. Koristimo najsavremeniju opremu koja omogućava brzu i komfornu dijagnostiku bez ikakvog diskomfora.'
                },
                {
                    question: 'Koliko traje procedura?',
                    answer: 'Standardni oftalmološki pregled traje između 30 i 45 minuta. Za specijalizovane preglede može biti potrebno dodatno vreme.'
                },
                {
                    question: 'Da li je potrebna priprema za pregled?',
                    answer: 'Za većinu pregleda nije potrebna posebna priprema. Ukoliko planirate širenje zenica, preporučujemo da povedete pratnju jer ćete imati zamućen vid nekoliko sati.'
                }
            ]
        },
        booking: {
            label: "kontakt",
            title: "Zakažite pregled",
            description: "Vaš vid zaslužuje pažnju. Javite nam se i zakažite termin."
        },
        footer: {
            ready: "Spremni?",
            ctaTitle: "Zakažite pregled danas",
            ctaSubtitle: "Vaš vid zaslužuje najbolju negu.",
            ctaButton: "zakažite pregled",
            navigation: "Navigacija",
            contact: "Kontakt",
            address: "Lug 32, Novi Pazar",
            phone: "+381 62 572 222",
            hours: "Pon–Pet: 16–20h | Sub: 10–14h",
            tagline: "Oftalmološka ordinacija u Novom Pazaru posvećena očuvanju i unapređenju vašeg vida.",
            copyright: "© 2026 Blink Oftalmološka ordinacija. Sva prava zadržana.",
            location: "Novi Pazar, Srbija",
            privacy: "politika privatnosti",
            terms: "uslovi korišćenja"
        },
        lens: {
            label: "Pomeri me"
        },
        privacy: {
            title: "Politika privatnosti",
            updated: "Poslednje ažuriranje: Februar 2026",
            back: "← Nazad na početnu",
            intro: "Blink oftalmološka ordinacija posvećena je zaštiti vaše privatnosti. Ova politika opisuje kako prikupljamo, koristimo i štitimo vaše lične podatke.",
            dataCollectTitle: "Podaci koje prikupljamo",
            dataCollectIntro: "Možemo prikupljati sledeće informacije:",
            dataCollectItems: [
                "Ime i prezime",
                "Kontakt informacije (telefon, email adresa)",
                "Medicinska istorija relevantna za oftalmološki pregled",
                "Informacije o zakazanim terminima"
            ],
            dataUseTitle: "Kako koristimo vaše podatke",
            dataUseIntro: "Vaše podatke koristimo isključivo za:",
            dataUseItems: [
                "Pružanje medicinskih usluga",
                "Zakazivanje i upravljanje terminima",
                "Komunikaciju u vezi sa vašim pregledom",
                "Poboljšanje naših usluga"
            ],
            dataProtectionTitle: "Zaštita podataka",
            dataProtectionText: "Primenjujemo odgovarajuće tehničke i organizacione mere za zaštitu vaših ličnih podataka od neovlašćenog pristupa, gubitka ili zloupotrebe.",
            rightsTitle: "Vaša prava",
            rightsIntro: "Imate pravo da:",
            rightsItems: [
                "Zatražite uvid u svoje lične podatke",
                "Zatražite ispravku netačnih podataka",
                "Zatražite brisanje podataka",
                "Povučete saglasnost za obradu podataka"
            ],
            contactTitle: "Kontakt",
            contactText: "Za sva pitanja u vezi sa vašim podacima, kontaktirajte nas na telefon +381 62 572 222 ili nas posetite na adresi Lug 32, Novi Pazar.",
            sections: []
        },
        terms: {
            title: "Uslovi korišćenja",
            updated: "Poslednje ažuriranje: Februar 2026",
            back: "← Nazad na početnu",
            intro: "Dobrodošli na veb sajt Blink oftalmološke ordinacije. Korišćenjem ovog sajta prihvatate sledeće uslove.",
            servicesTitle: "Usluge",
            servicesIntro: "Blink pruža oftalmološke usluge uključujući:",
            servicesItems: [
                "Kompjutersko određivanje dioptrije",
                "Pregled očnog dna",
                "Merenje očnog pritiska",
                "Savetovanje za kontaktna sočiva"
            ],
            schedulingTitle: "Zakazivanje termina",
            schedulingText: "Termini se mogu zakazati telefonom. Molimo vas da nas obavestite najmanje 24 sata unapred ukoliko niste u mogućnosti da dođete na zakazani termin.",
            paymentTitle: "Plaćanje",
            paymentText: "Plaćanje se vrši nakon obavljenog pregleda. Prihvatamo gotovinu i platne kartice. Cene usluga su istaknute u ordinaciji.",
            liabilityTitle: "Odgovornost",
            liabilityText: "Informacije na ovom sajtu su informativnog karaktera i ne zamenjuju profesionalni medicinski savet. Za sve zdravstvene probleme, obratite se lekaru.",
            ipTitle: "Intelektualna svojina",
            ipText: "Sav sadržaj na ovom sajtu, uključujući tekstove, slike i dizajn, vlasništvo je Blink oftalmološke ordinacije i zaštićen je autorskim pravima.",
            changesTitle: "Izmene uslova",
            changesText: "Zadržavamo pravo da izmenimo ove uslove u bilo kom trenutku. Izmene stupaju na snagu objavljivanjem na ovoj stranici.",
            contactTitle: "Kontakt",
            contactText: "Za dodatna pitanja, kontaktirajte nas na +381 62 572 222 ili nas posetite na adresi Lug 32, Novi Pazar.",
            sections: []
        }
    },
    en: {
        nav: {
            services: "services",
            tech: "technology",
            faq: "faq",
            contact: "contact",
            cta: "book appointment"
        },
        hero: {
            clinic: "Eye Clinic Novi Pazar",
            left: "A blend of cutting-edge technology and medical expertise. We are dedicated to preserving and enhancing your vision through a personalized approach and precise diagnostics in the heart of Novi Pazar.",
            right: "Vision is not just a sense, but the way you experience the world. Discover a new dimension of clarity with your ophthalmologist, with care standards that make no compromises."
        },
        services: {
            label: "What we do",
            title: "Services",
            description: "We provide complete ophthalmic diagnostics in Novi Pazar with state-of-the-art equipment and an individual approach to each patient.",
            items: [
                {
                    number: '01',
                    title: 'Computer Vision Testing',
                    description: 'State-of-the-art technology for precise measurement and vision correction.'
                },
                {
                    number: '02',
                    title: 'Fundus Examination',
                    description: 'Prevention and early diagnostics of eye diseases.'
                },
                {
                    number: '03',
                    title: 'Eye Pressure Measurement',
                    description: 'Painless method for glaucoma prevention and detection.'
                },
                {
                    number: '04',
                    title: 'Contact Lenses',
                    description: 'Professional consultation, fitting and training.'
                }
            ]
        },
        technology: {
            label: "precision",
            title: "Technology",
            subtitle: "Technology that sees more",
            text: "We use state-of-the-art equipment that provides insight into the finest details of eye structure. The precision with which we work eliminates guesswork.",
            stats: [
                { number: '0.01', label: 'mm precision' },
                { number: '4K', label: 'HD diagnostics' },
                { number: '2025', label: 'latest equipment' }
            ]
        },
        faq: {
            label: "Help",
            title: "FAQ",
            items: [
                {
                    question: 'How often should I have an eye exam?',
                    answer: 'We recommend a regular eye exam once a year. For individuals with diabetes, glaucoma, or other chronic conditions, exams may be more frequent as recommended by a doctor.'
                },
                {
                    question: 'Does the examination hurt?',
                    answer: 'No, an eye examination is completely painless. We use state-of-the-art equipment that enables quick and comfortable diagnosis without any discomfort.'
                },
                {
                    question: 'How long does the procedure take?',
                    answer: 'A standard eye exam takes between 30 and 45 minutes. Specialized examinations may require additional time.'
                },
                {
                    question: 'Is any preparation needed for the exam?',
                    answer: 'For most examinations, no special preparation is needed. If you plan to have your pupils dilated, we recommend bringing someone with you as your vision will be blurry for a few hours.'
                }
            ]
        },
        booking: {
            label: "contact",
            title: "Book appointment",
            description: "Your vision deserves attention. Contact us and schedule your appointment."
        },
        footer: {
            ready: "Ready?",
            ctaTitle: "Book your appointment today",
            ctaSubtitle: "Your vision deserves the best care.",
            ctaButton: "book appointment",
            navigation: "Navigation",
            contact: "Contact",
            address: "Lug 32, Novi Pazar",
            phone: "+381 62 572 222",
            hours: "Mon–Fri: 16–20h | Sat: 10–14h",
            tagline: "Eye clinic in Novi Pazar dedicated to preserving and enhancing your vision.",
            copyright: "© 2026 Blink Eye Clinic. All rights reserved.",
            location: "Novi Pazar, Serbia",
            privacy: "privacy policy",
            terms: "terms of service"
        },
        lens: {
            label: "Move me"
        },
        privacy: {
            title: "Privacy Policy",
            updated: "Last updated: February 2026",
            back: "← Back to home",
            intro: "Blink Eye Clinic is committed to protecting your privacy. This policy describes how we collect, use and protect your personal data.",
            dataCollectTitle: "Data We Collect",
            dataCollectIntro: "We may collect the following information:",
            dataCollectItems: [
                "Full name",
                "Contact information (phone, email address)",
                "Medical history relevant to the eye examination",
                "Appointment information"
            ],
            dataUseTitle: "How We Use Your Data",
            dataUseIntro: "We use your data exclusively for:",
            dataUseItems: [
                "Providing medical services",
                "Scheduling and managing appointments",
                "Communication regarding your examination",
                "Improving our services"
            ],
            dataProtectionTitle: "Data Protection",
            dataProtectionText: "We apply appropriate technical and organizational measures to protect your personal data from unauthorized access, loss or misuse.",
            rightsTitle: "Your Rights",
            rightsIntro: "You have the right to:",
            rightsItems: [
                "Request access to your personal data",
                "Request correction of inaccurate data",
                "Request deletion of data",
                "Withdraw consent for data processing"
            ],
            contactTitle: "Contact",
            contactText: "For any questions regarding your data, contact us at +381 62 572 222 or visit us at Lug 32, Novi Pazar.",
            sections: []
        },
        terms: {
            title: "Terms of Service",
            updated: "Last updated: February 2026",
            back: "← Back to home",
            intro: "Welcome to the Blink Eye Clinic website. By using this website you accept the following terms.",
            servicesTitle: "Services",
            servicesIntro: "Blink provides ophthalmic services including:",
            servicesItems: [
                "Computer vision testing",
                "Fundus examination",
                "Eye pressure measurement",
                "Contact lens consultation"
            ],
            schedulingTitle: "Appointment Scheduling",
            schedulingText: "Appointments can be scheduled by phone. Please notify us at least 24 hours in advance if you are unable to attend your scheduled appointment.",
            paymentTitle: "Payment",
            paymentText: "Payment is made after the examination. We accept cash and credit cards. Service prices are displayed at the clinic.",
            liabilityTitle: "Liability",
            liabilityText: "The information on this website is for informational purposes only and does not replace professional medical advice. For all health concerns, please consult a doctor.",
            ipTitle: "Intellectual Property",
            ipText: "All content on this website, including text, images and design, is the property of Blink Eye Clinic and is protected by copyright.",
            changesTitle: "Changes to Terms",
            changesText: "We reserve the right to modify these terms at any time. Changes take effect upon publication on this page.",
            contactTitle: "Contact",
            contactText: "For additional questions, contact us at +381 62 572 222 or visit us at Lug 32, Novi Pazar.",
            sections: []
        }
    }
};
