interface ServiceItem {
    number: string;
    title: string;
    description: string;
    details: string;
}

interface StatItem {
    number: string;
    label: string;
}

interface FAQSection {
    title: string;
    text: string;
}

interface FAQItem {
    question: string;
    answer: string;
    sections?: FAQSection[];
}

interface ConditionItem {
    title: string;
    description: string;
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
        conditions: string;
        tech: string;
        faq: string;
        gallery: string;
        about: string;
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
    conditions: {
        label: string;
        title: string;
        description: string;
        items: ConditionItem[];
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
    gallery: {
        label: string;
        title: string;
        description: string;
    };
    about: {
        label: string;
        title: string;
        name: string;
        role: string;
        bio: string[];
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
            conditions: "stanja",
            tech: "tehnologija",
            faq: "faq",
            gallery: "prostor",
            about: "o nama",
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
                    description: 'Najsavremenija tehnologija za precizno merenje i korekciju vida.',
                    details: 'Vid se proverava zasebno za svako oko, kako na daljinu tako i na blizinu. Na osnovu rezultata, lekar propisuje odgovarajuću dioptriju za naočare ili kontaktna sočiva. Koriste se standardne optotipske table i savremeni autorefraktometri za maksimalnu preciznost.'
                },
                {
                    number: '02',
                    title: 'Pregled očnog dna',
                    description: 'Prevencija i rana dijagnostika očnih bolesti.',
                    details: 'Fundus oka se pregleda oftalmoskopom ili specijalnom lupom na biomikroskopu. Za temeljnu procenu neophodno je medikamentozno širenje zenica. Tek nakon kompletnog pregleda moguće je postaviti preciznu dijagnozu i odrediti eventualna dalja ispitivanja.'
                },
                {
                    number: '03',
                    title: 'Merenje očnog pritiska',
                    description: 'Bezbolna metoda za prevenciju i otkrivanje glaukoma.',
                    details: 'Primenjuju se dve metode – aplanaciona tonometrija na biomikroskopu uz anestetičke kapi, koja se smatra najtačnijom, i pneumotonometrija, beskontaktna metoda pogodna kao brzi skrining. Redovno merenje je ključno za rano otkrivanje glaukoma.'
                },
                {
                    number: '04',
                    title: 'Kontaktna sočiva',
                    description: 'Profesionalno savetovanje, prilagođavanje i obuka za nošenje.',
                    details: 'Kompletna usluga uključuje određivanje parametara oka, izbor odgovarajućeg tipa sočiva, probno nošenje i detaljnu obuku za pravilno rukovanje i održavanje. Pratimo pacijenta i nakon prilagođavanja.'
                },
                {
                    number: '05',
                    title: 'Dečji oftalmološki pregled',
                    description: 'Specijalizovani pregledi prilagođeni najmlađim pacijentima.',
                    details: 'Deca često nisu svesna problema sa vidom, zbog čega su redovni pregledi izuzetno važni. Pregled obuhvata proveru vida i dioptrije, merenje očnog pritiska, pregled prednjeg segmenta i očnog dna, procenu pokretljivosti očiju i binokularnog vida. Sve metode su prilagođene uzrastu deteta.'
                },
                {
                    number: '06',
                    title: 'Operacija kompleksnog halaciona',
                    description: 'Hirurško uklanjanje uvećanih ili višestrukih promena na kapku.',
                    details: 'Kompleksni halacion nastaje usled hroničnog začepljenja lojnih žlezda i zahteva operativni zahvat u operacionoj sali uz anesteziju. Procedura je kratkotrajna, a oporavak relativno brz. U slučaju recidiva, preporučuje se patohistološka analiza tkiva.'
                }
            ]
        },
        conditions: {
            label: "Stanja",
            title: "Oftalmološka stanja",
            description: "Razumevanje očnih oboljenja je prvi korak ka očuvanju vida. Informišite se o najčešćim stanjima koja dijagnostikujemo i tretiramo.",
            items: [
                {
                    title: 'Glaukom',
                    description: 'Glaukom je grupa očnih oboljenja koja dovodi do oštećenja očnog nerva, najčešće usled povišenog očnog pritiska. Opasan je jer u početnim stadijumima ne izaziva simptome – vid se postepeno sužava od periferije ka centru, a pacijent to obično ne primećuje sve dok bolest značajno ne uznapreduje. Upravo zato se glaukom naziva „tihim kradljivcem vida". Redovni oftalmološki pregledi sa merenjem očnog pritiska i pregledom očnog dna ključni su za rano otkrivanje. Lečenje podrazumeva primenu kapi za snižavanje očnog pritiska, laserske procedure ili hirurške zahvate. Izgubljeni vid se ne može povratiti, ali se daljim napredovanjem bolesti može upravljati pravovremenom terapijom.'
                },
                {
                    title: 'Astigmatizam',
                    description: 'Astigmatizam je refraktivna anomalija koja nastaje kada rožnjača ili sočivo nemaju pravilno zakrivljenu površinu. Umesto da svetlost pada u jednu tačku na mrežnjači, ona se rasipa u više fokusa, što uzrokuje zamućen ili iskrivljen vid i na daljinu i na blizinu. Astigmatizam se često javlja u kombinaciji sa kratkovidošću ili dalekovidošću. Simptomi mogu uključivati zamor očiju, glavobolje i potrebu za žmirkanjem. Koriguje se naočarima sa cilindričnim sočivima, toričnim kontaktnim sočivima ili refrektivnim hirurškim zahvatima.'
                },
                {
                    title: 'Miopija (kratkovidost)',
                    description: 'Miopija ili kratkovidost je stanje u kome pacijent jasno vidi bliske predmete, dok su udaljeni objekti zamagljeni. Nastaje kada je očna jabučica izdužena ili kada rožnjača previše prelama svetlost, pa se slika formira ispred mrežnjače umesto na njoj. Kratkovidost se obično razvija u detinjstvu i adolescenciji i može napredovati tokom rasta. Koriguje se rasipnim (minus) sočivima u naočarima ili kontaktnim sočivima, a kod odraslih pacijenata i laserskim intervencijama. Kod dece je važno pratiti progresiju miopije jer izrazita kratkovidost povećava rizik od komplikacija na mrežnjači u kasnijem životnom dobu.'
                },
                {
                    title: 'Hipermetropija (dalekovidost)',
                    description: 'Hipermetropija ili dalekovidost je refraktivna greška kod koje pacijent lakše vidi udaljene predmete, dok mu je vid na blizinu otežan. Uzrok leži u kraćoj očnoj jabučici ili nedovoljnoj prelamajućoj moći rožnjače, usled čega se slika formira iza mrežnjače. Kod mlađih osoba oko može delimično kompenzovati ovaj deficit pojačanim radom akomodacije, ali to često dovodi do zamora očiju, glavobolja i poteškoća pri čitanju. Koriguje se sabirnim (plus) sočivima u naočarima ili kontaktnim sočivima, a u obzir dolaze i laserske korekcije vida.'
                },
                {
                    title: 'Presbiopija (staračka dalekovidost)',
                    description: 'Presbiopija je prirodna, fiziološka promena koja nastaje starenjem sočiva – ono postepeno gubi elastičnost i sposobnost akomodacije, tj. prilagođavanja za vid na blizinu. Pojavljuje se obično nakon 40. godine života i zahvata sve ljude, bez obzira na to da li su ranije imali problema sa vidom. Prvi znak je poteškoća pri čitanju sitnog teksta, kada osoba počinje da odmiče knjigu ili telefon dalje od očiju. Koriguje se naočarima za čitanje, bifakalnim ili progresivnim sočivima, a postoje i hirurška rešenja.'
                },
                {
                    title: 'Ambliopija (lenje oko)',
                    description: 'Ambliopija, popularno nazvana „lenje oko", nastaje kada jedno oko ne razvije pun vidni potencijal tokom ranog detinjstva. Mozak vremenom počinje da zanemaruje sliku iz slabijeg oka i oslanja se pretežno na ono drugo, zdravije. Najčešći uzroci su razrokost, izražena razlika u dioptriji između očiju ili prepreka na vidnoj osi (npr. urođena katarakta). Rano otkrivanje je od presudnog značaja jer se ambliopija najefikasnije leči do šeste ili sedme godine života, dok je vizuelni sistem još u razvoju. Terapija obično podrazumeva nošenje naočara, prekrivanje (okluziju) jačeg oka kako bi se slabije stimulisalo, ili primenu specijalnih kapi. Ukoliko se ne otkrije i ne tretira na vreme, slabiji vid na zahvaćenom oku može ostati trajan.'
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
                    question: 'Šta sve obuhvata oftalmološki pregled?',
                    answer: 'Detaljan pregled kod oftalmologa sastoji se iz nekoliko ključnih koraka koji zajedno daju potpunu sliku o zdravlju vaših očiju.',
                    sections: [
                        {
                            title: 'Ispitivanje oštrine vida',
                            text: 'Vid se proverava zasebno za svako oko, kako na daljinu tako i na blizinu. Na osnovu rezultata, lekar po potrebi propisuje odgovarajuću dioptriju za naočare ili kontaktna sočiva. Za testiranje vida na daljinu koriste se standardne optotipske table sa slovima, brojevima ili simbolima (kod mlađe dece), postavljene na propisanom rastojanju od pacijenta. Blizina se procenjuje posebnim tablicama namenjenim za tu svrhu.'
                        },
                        {
                            title: 'Pregled prednjeg segmenta oka',
                            text: 'Pomoću biomikroskopa (špalt-lampe) lekar detaljno i pod uvećanjem pregleda spoljašnje strukture oka – rožnjaču, sočivo, dužicu i okolna tkiva.'
                        },
                        {
                            title: 'Merenje očnog pritiska (tonometrija)',
                            text: 'Najčešće se primenjuju dve metode. Aplanaciona tonometrija smatra se najtačnijom – radi se na biomikroskopu uz prethodno ukapavanje anestetičkih kapi. Druga opcija je pneumotonometrija, beskontaktna metoda koja koristi mlaz vazduha i pogodna je kao brzi skrining, mada može biti manje precizna.'
                        },
                        {
                            title: 'Gonioskopija',
                            text: 'Specijalizovana dijagnostička metoda kojom se procenjuje širina komornog ugla, strukture kroz koju se odvodi očna vodica. Ovaj pregled je naročito značajan za otkrivanje i klasifikaciju glaukoma, kao i za procenu rizika od akutnog napada zatvorenog ugla.'
                        },
                        {
                            title: 'Pregled očnog dna',
                            text: 'Fundus oka može se pregledati i kroz neproširenu zenicu, ali za temeljnu procenu neophodno je medikamentozno širenje zenica. Pregled se obavlja oftalmoskopom ili specijalnom lupom na biomikroskopu. Tek nakon kompletnog pregleda sa proširenim zenicama moguće je postaviti preciznu dijagnozu i odrediti eventualna dalja ispitivanja.'
                        }
                    ]
                },
                {
                    question: 'Kada je pregled preporučljiv?',
                    answer: 'Pregled se posebno preporučuje osobama koje prvi put primećuju poteškoće pri čitanju (obično nakon 40. godine), pacijentima sa dijabetesom ili hipertenzijom, kao i onima u čijoj porodici postoji istorija glaukoma.'
                },
                {
                    question: 'Šta treba znati pre pregleda?',
                    answer: 'Pregled bez širenja zenica traje približno 30 minuta, dok sa širenjem može potrajati do sat vremena. Za kontaktnu tonometriju i gonioskopiju potrebne su anestetičke kapi. Ukoliko ste alergični na lokalne anestetike ili kapi za širenje zenica, obavezno o tome obavestite lekara pre početka pregleda.'
                }
            ]
        },
        gallery: {
            label: "ordinacija",
            title: "Naš prostor",
            description: "Moderna ordinacija opremljena najsavremenijom dijagnostičkom opremom."
        },
        about: {
            label: "o nama",
            title: "Vaš oftalmolog",
            name: "dr Enisa Memić",
            role: "Specijalizant oftalmologije",
            bio: [
                "Dr Enisa Memić je specijalizant oftalmologije posvećena pružanju vrhunske oftalmološke nege uz individualan pristup svakom pacijentu. Sa strašću za očuvanje i unapređenje vida, dr Memić kombinuje savremenu dijagnostičku tehnologiju sa empatičnim pristupom, stvarajući okruženje u kome se svaki pacijent oseća sigurno i zbrinuto.",
                "Tokom specijalizacije iz očnih bolesti sticala je iskustvo u vodećim oftalmološkim centrima, usavršavajući veštine u dijagnostici i lečenju širokog spektra očnih oboljenja — od refrakcijskih anomalija i glaukoma do kompleksnih stanja prednjeg i zadnjeg segmenta oka.",
                "Posebno je posvećena preventivnoj oftalmologiji i edukaciji pacijenata, verujući da je informisan pacijent ključ uspešnog lečenja. Osnivanjem ordinacije Blink u Novom Pazaru, ostvarila je viziju modernog oftalmološkog prostora koji spaja medicinsku stručnost sa najsavremenijom tehnologijom."
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
            conditions: "conditions",
            tech: "technology",
            faq: "faq",
            gallery: "our space",
            about: "about",
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
                    description: 'State-of-the-art technology for precise measurement and vision correction.',
                    details: 'Vision is tested separately for each eye, both at distance and near. Based on the results, the doctor prescribes the appropriate prescription for glasses or contact lenses. Standard optotype charts and modern autorefractometers are used for maximum precision.'
                },
                {
                    number: '02',
                    title: 'Fundus Examination',
                    description: 'Prevention and early diagnostics of eye diseases.',
                    details: 'The fundus is examined with an ophthalmoscope or a special lens on a biomicroscope. For a thorough assessment, pharmacological pupil dilation is necessary. Only after a complete examination can a precise diagnosis be made and further testing determined.'
                },
                {
                    number: '03',
                    title: 'Eye Pressure Measurement',
                    description: 'Painless method for glaucoma prevention and detection.',
                    details: 'Two methods are used – applanation tonometry on a biomicroscope with anesthetic drops, considered the most accurate, and pneumotonometry, a non-contact method suitable for quick screening. Regular measurement is key to early glaucoma detection.'
                },
                {
                    number: '04',
                    title: 'Contact Lenses',
                    description: 'Professional consultation, fitting and training.',
                    details: 'Our complete service includes determining eye parameters, selecting the appropriate lens type, trial wearing, and detailed training for proper handling and maintenance. We follow up with patients after the fitting period.'
                },
                {
                    number: '05',
                    title: 'Pediatric Eye Examination',
                    description: 'Specialized exams tailored to the youngest patients.',
                    details: 'Children are often unaware of vision problems, making regular exams crucial. The exam includes vision and refraction testing, eye pressure measurement, anterior segment and fundus examination, assessment of eye motility and binocular vision. All methods are adapted to the child\'s age.'
                },
                {
                    number: '06',
                    title: 'Complex Chalazion Surgery',
                    description: 'Surgical removal of enlarged or multiple eyelid lesions.',
                    details: 'A complex chalazion results from chronic blockage of sebaceous glands and requires a surgical procedure in an operating room under anesthesia. The procedure is brief and recovery is relatively quick. In case of recurrence, histopathological tissue analysis is recommended.'
                }
            ]
        },
        conditions: {
            label: "Conditions",
            title: "Eye Conditions",
            description: "Understanding eye conditions is the first step toward preserving your vision. Learn about the most common conditions we diagnose and treat.",
            items: [
                {
                    title: 'Glaucoma',
                    description: 'Glaucoma is a group of eye diseases that damage the optic nerve, most commonly due to elevated intraocular pressure. It is dangerous because it causes no symptoms in its early stages – vision gradually narrows from the periphery to the center, and patients usually don\'t notice until the disease has significantly progressed. This is why glaucoma is called the "silent thief of sight." Regular eye exams with pressure measurement and fundus examination are key to early detection. Treatment includes pressure-lowering drops, laser procedures, or surgical interventions. Lost vision cannot be restored, but further progression can be managed with timely therapy.'
                },
                {
                    title: 'Astigmatism',
                    description: 'Astigmatism is a refractive error that occurs when the cornea or lens has an irregularly curved surface. Instead of light focusing on a single point on the retina, it scatters into multiple focal points, causing blurred or distorted vision at all distances. Astigmatism often occurs in combination with nearsightedness or farsightedness. Symptoms may include eye strain, headaches, and squinting. It is corrected with cylindrical lenses in glasses, toric contact lenses, or refractive surgical procedures.'
                },
                {
                    title: 'Myopia (nearsightedness)',
                    description: 'Myopia or nearsightedness is a condition where the patient can clearly see close objects while distant objects appear blurred. It occurs when the eyeball is elongated or when the cornea refracts light too strongly, forming the image in front of the retina instead of on it. Myopia usually develops in childhood and adolescence and can progress during growth. It is corrected with diverging (minus) lenses in glasses or contact lenses, and in adult patients with laser interventions. In children, monitoring myopia progression is important as severe nearsightedness increases the risk of retinal complications later in life.'
                },
                {
                    title: 'Hyperopia (farsightedness)',
                    description: 'Hyperopia or farsightedness is a refractive error where the patient can see distant objects more easily while near vision is impaired. The cause lies in a shorter eyeball or insufficient refractive power of the cornea, resulting in the image forming behind the retina. In younger people, the eye can partially compensate through increased accommodation effort, but this often leads to eye strain, headaches, and difficulty reading. It is corrected with converging (plus) lenses in glasses or contact lenses, and laser vision correction is also an option.'
                },
                {
                    title: 'Presbyopia (age-related farsightedness)',
                    description: 'Presbyopia is a natural, physiological change that occurs as the lens ages – it gradually loses elasticity and the ability to accommodate, i.e., to adjust for near vision. It typically appears after age 40 and affects everyone, regardless of whether they previously had vision problems. The first sign is difficulty reading small text, when a person begins holding books or phones farther from their eyes. It is corrected with reading glasses, bifocal or progressive lenses, and surgical solutions also exist.'
                },
                {
                    title: 'Amblyopia (lazy eye)',
                    description: 'Amblyopia, commonly called "lazy eye," occurs when one eye does not develop its full visual potential during early childhood. The brain gradually begins to ignore the image from the weaker eye and relies primarily on the other, healthier one. The most common causes are strabismus, a significant difference in prescription between the eyes, or an obstruction in the visual axis (e.g., congenital cataract). Early detection is crucial as amblyopia is most effectively treated before the age of six or seven, while the visual system is still developing. Treatment usually involves wearing glasses, patching (occlusion) of the stronger eye to stimulate the weaker one, or applying special drops. If not detected and treated in time, reduced vision in the affected eye can become permanent.'
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
                    question: 'What does an ophthalmological examination include?',
                    answer: 'A comprehensive eye exam consists of several key steps that together provide a complete picture of your eye health.',
                    sections: [
                        {
                            title: 'Visual acuity testing',
                            text: 'Vision is tested separately for each eye, both at distance and near. Based on the results, the doctor prescribes the appropriate prescription for glasses or contact lenses. Standard optotype charts with letters, numbers, or symbols (for younger children) are used for distance testing, placed at a prescribed distance from the patient. Near vision is assessed with special charts designed for that purpose.'
                        },
                        {
                            title: 'Anterior segment examination',
                            text: 'Using a biomicroscope (slit lamp), the doctor examines the external structures of the eye in detail and under magnification – the cornea, lens, iris, and surrounding tissues.'
                        },
                        {
                            title: 'Intraocular pressure measurement (tonometry)',
                            text: 'Two methods are most commonly used. Applanation tonometry is considered the most accurate – it is performed on a biomicroscope with prior instillation of anesthetic drops. The other option is pneumotonometry, a non-contact method using an air puff, suitable as a quick screening tool, although it may be less precise.'
                        },
                        {
                            title: 'Gonioscopy',
                            text: 'A specialized diagnostic method used to assess the width of the chamber angle, the structure through which aqueous humor drains. This examination is particularly important for detecting and classifying glaucoma, as well as assessing the risk of acute angle-closure attack.'
                        },
                        {
                            title: 'Fundus examination',
                            text: 'The fundus can be examined through an undilated pupil, but for a thorough assessment, pharmacological pupil dilation is necessary. The examination is performed with an ophthalmoscope or a special lens on a biomicroscope. Only after a complete examination with dilated pupils is it possible to make a precise diagnosis and determine any further testing needed.'
                        }
                    ]
                },
                {
                    question: 'When is an examination recommended?',
                    answer: 'An exam is especially recommended for people who first notice difficulty reading (usually after age 40), patients with diabetes or hypertension, and those with a family history of glaucoma.'
                },
                {
                    question: 'What should I know before the examination?',
                    answer: 'An exam without pupil dilation takes approximately 30 minutes, while with dilation it can take up to an hour. Anesthetic drops are needed for contact tonometry and gonioscopy. If you are allergic to local anesthetics or pupil dilation drops, be sure to inform your doctor before the examination begins.'
                }
            ]
        },
        gallery: {
            label: "our clinic",
            title: "Our space",
            description: "A modern clinic equipped with state-of-the-art diagnostic equipment."
        },
        about: {
            label: "about us",
            title: "Your ophthalmologist",
            name: "Dr. Enisa Memić",
            role: "Ophthalmology Resident",
            bio: [
                "Dr. Enisa Memić is an ophthalmology resident dedicated to providing exceptional eye care with a personalized approach to every patient. With a passion for preserving and enhancing vision, Dr. Memić combines modern diagnostic technology with an empathetic approach, creating an environment where every patient feels safe and cared for.",
                "During her specialization in eye diseases, she gained experience at leading ophthalmology centers, refining her skills in diagnosing and treating a wide range of eye conditions — from refractive errors and glaucoma to complex anterior and posterior segment disorders.",
                "She is particularly committed to preventive ophthalmology and patient education, believing that an informed patient is the key to successful treatment. By founding Blink clinic in Novi Pazar, she realized her vision of a modern ophthalmic practice that combines medical expertise with state-of-the-art technology."
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
