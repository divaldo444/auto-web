export const translations = {
    en: {
        // ── Navbar ──
        nav: {
            services: 'Services',
            concierge: 'Concierge',
            about: 'About',
            reviews: 'Reviews',
            contact: 'Contact',
            callUs: 'Call Us',
            bookNow: 'Book Now',
            bookAppointment: 'Book Appointment',
        },

        // ── Hero ──
        hero: {
            srOnly: 'Auto Repair & Mechanic Service in Roxboro, Montreal — ',
            headlinePrefix: 'Your car comes in ',
            headlineHighlight: 'stressed',
            headlineSubPrefix: 'You leave ',
            subtext: 'Your car is your second biggest investment after your home — that\'s why we are here. At Garazen, we stress proper maintenance with quality, reliable parts to protect it. Honest diagnostics, upfront pricing, and expert hands. Open 7 days a week in Roxboro.',
            badgeLeft: 'Roxboro\'s trusted shop',
            badgeRight: 'Open 7 days · Walk-ins Welcome',
            badgePricing: 'Upfront pricing · No surprise fees',
            socialProof: '600+ five-star reviews',
            ctaPrimary: 'Book an Appointment',
            ctaSecondary: 'Call Garazen',
        },

        // ── Holographic Engine ──
        holographic: {
            liveAnalysis: 'Live Analysis',
            secureConnection: 'SECURE CONNECTION // GARAZEN.OS.v2.4',
            steps: {
                s1: { label: 'ENGINE HEALTH', value: 'OPTIMAL 99.8%', sub: 'OBD-II Diagnostics Active' },
                s2: { label: 'BRAKE PADS', value: '62% REMAINING', sub: 'Next Service ~25,000 km' },
                s3: { label: 'OIL LIFE', value: 'CHANGE IN 2,400 KM', sub: 'Synthetic 5W-30' },
                s4: { label: 'SUSPENSION', value: 'ALL CLEAR', sub: 'Struts & Shocks Inspected' },
                s5: { label: 'EXHAUST SYSTEM', value: 'EMISSIONS VALID', sub: 'Flow Rate: Nominal' },
                s6: { label: 'DRIVETRAIN', value: 'TRANSFER CASE', sub: 'Fluid: Optimal' },
            },
            hotspots: {
                h1: { label: 'BRAKE SYSTEM', sub: 'Pads: 62% Life' },
                h2: { label: 'ENGINE DIAGNOSTICS', sub: 'Output: 98%' },
                h3: { label: 'SUSPENSION', sub: 'Clearance: Normal' },
                h4: { label: 'OIL SYSTEM', sub: 'Level: Optimal' },
                h5: { label: 'EXHAUST', sub: 'Flow: Nominal' },
                h6: { label: 'TRANSFER CASE', sub: 'Fluid: OK' },
            },
        },

        // ── Partners ──
        partners: {
            title: 'Trusted By Leading Brands',
        },

        // ── Services ──
        services: {
            badge: 'Our Services',
            title: 'Interactive Service Menu',
            subtitle: 'Tap any service to learn why it matters for YOUR car.',
            categories: {
                maintenance: 'Maintenance',
                repairs: 'Repairs',
                tiresWheels: 'Tires & Wheels',
            },
            whyItMatters: 'Why This Matters',
            estimatedTime: 'Estimated Time',
            bookService: 'Book This Service',
            items: {
                m1: {
                    title: 'Oil & Filter Change',
                    short: 'The lifeblood of your engine.',
                    why: 'Regular oil changes reduce friction, prevent overheating, and remove sludge. Neglecting this is the #1 cause of premature engine failure. Fresh oil ensures your engine runs efficiently and lasts longer.',
                },
                m2: {
                    title: 'Fluid Flush & Exchange',
                    short: 'Coolant, Brake, Transmission, & Power Steering.',
                    why: 'Fluids break down over time, losing their ability to lubricate, cool, or transfer force. Old brake fluid absorbs moisture leading to rust; old coolant becomes acidic. Fresh fluids protect expensive internal components.',
                },
                m3: {
                    title: 'Filter Replacement',
                    short: 'Engine Air & Cabin Air Filters.',
                    why: 'A clogged engine filter strangles performance and reduces fuel economy. A dirty cabin filter circulates dust and allergens inside your car. Changing them allows your car (and you) to breathe easier.',
                },
                m4: {
                    title: 'Rust Proofing',
                    short: 'Ultimate protection against salt & corrosion.',
                    why: 'Montreal winters are brutal. Salt and moisture eat away at your car\'s body and frame instantly. Annual rust proofing creates a heavy-duty barrier that extends the life of your vehicle and maintains its resale value.',
                },
                m5: {
                    title: 'Engine Tune-Up',
                    short: 'Spark plugs, ignition & performance.',
                    why: 'Restores lost power and fuel economy. Worn plugs cause misfires and wasted gas. A tune-up keeps your engine running smooth like the day it was built.',
                },
                r1: {
                    title: 'Computer Diagnostics',
                    short: 'Check engine lights & electrical issues.',
                    why: 'Modern cars are complex computers. A warning light is a cry for help. Our advanced scanners pinpoint the exact issue, saving you money on trial-and-error repairs and preventing small problems from becoming catastrophic failures.',
                },
                r2: {
                    title: 'Brake System',
                    short: 'Pads, Rotors, Calipers & Lines.',
                    why: 'Your safety depends on stopping power. Worn pads increase stopping distance, while warped rotors cause vibration. Ignoring squeaks or grinding can damage calipers, doubling your repair bill and endangering your life.',
                },
                r3: {
                    title: 'Suspension & Steering',
                    short: 'Shocks, Struts, Ball Joints & Tie Rods.',
                    why: 'Suspension isn\'t just about comfort; it keeps your tires on the road. Worn shocks cause bouncing and poor handling, while loose steering components can cause your vehicle to wander. Maintain control and ride quality.',
                },
                r4: {
                    title: 'Engine Mechanical',
                    short: 'Head gaskets, timing chains & internal repairs.',
                    why: 'Deep engine work that saves the car when others say "scrap it." From timing chains to head gaskets, we handle the heavy-duty internal repairs that restore your vehicle’s heart.',
                },
                r5: {
                    title: 'Transmission & Drivetrain',
                    short: 'Fluid, clutch, differential & 4WD.',
                    why: 'The power needs to get to the wheels. We fix slipping gears, grinding differentials, and transfer case issues to ensure smooth shifting and reliable power delivery.',
                },
                r6: {
                    title: 'Electrical System',
                    short: 'Battery, Alternator, Starter & Wiring.',
                    why: 'If it won’t start or lights flicker, it’s usually here. We trace the invisible demons in your wiring, protecting your car’s sensitive electronics from voltage spikes and failures.',
                },
                r7: {
                    title: 'A/C & Heating',
                    short: 'Climate control & comfort systems.',
                    why: 'Montreal summers are hot, winters are freezing. A working A/C isn’t just luxury; it defogs your windows for safety. We fix leaks, compressors, and heater cores to keep you comfortable year-round.',
                },
                r8: {
                    title: 'Exhaust & Mufflers',
                    short: 'Emissions, catalytic converters & welding.',
                    why: 'A loud exhaust is annoying and often illegal. But more importantly, leaks can let dangerous carbon monoxide into the cabin. We fix the noise, ensure you pass emissions, and keep the air you breathe safe.',
                },
                t1: {
                    title: 'Wheel Alignment',
                    short: 'Laser precision for straight driving.',
                    why: 'Potholes throw your wheels out of alignment. This causes your car to pull to one side and shreds your tires unevenly. Proper alignment extends tire life significantly and improves fuel efficiency.',
                },
                t2: {
                    title: 'Tire Rotation',
                    short: 'Even wear for longer life.',
                    why: 'Front and rear tires wear differently due to steering and weight distribution. Rotating them regularly ensures they wear evenly, maximizing their lifespan and maintaining balanced handling.',
                },
                t3: {
                    title: 'Tire Installation',
                    short: 'Mounting & Balancing.',
                    why: 'We don\'t just slap tires on. We precise-balance them to eliminate high-speed vibrations that can damage your suspension and annoy you on the highway.',
                },
                t4: {
                    title: 'Tire Storage',
                    short: 'Seasonal hotel for your wheels.',
                    why: 'Save space in your garage and save your back from heavy lifting. We store your off-season tires in a climate-controlled environment to prevent rubber degradation.',
                },
            },
        },

        // ── Concierge ──
        concierge: {
            badge: 'Premium Service',
            title: 'Concierge Service',
            subtitle: 'For clients who value their time. We pick up your vehicle, service it, and return it — so you never miss a beat.',
            steps: {
                s1: { title: 'Book Your Service', desc: 'Online or by phone — choose the time that works for you.' },
                s2: { title: 'We Pick Up', desc: 'Our driver arrives at your location to collect your vehicle.' },
                s3: { title: 'Expert Service', desc: 'Your car receives precision care from our certified technicians.' },
                s4: { title: 'We Deliver', desc: 'Freshly serviced, your vehicle is returned right to your door.' },
            },
            cta: 'Schedule a Pick-Up',
        },

        // ── Testimonials ──
        testimonials: {
            badge: 'Client Stories',
            title: 'Trusted by drivers',
            titleBreak: 'who care.',
            badgeDesktop: 'Roxboro\'s Trusted Shop',
            badgeDesktopSub: 'Open 7 Days a Week',
            items: {
                t1: {
                    name: 'Sarah Jenkins',
                    role: 'Audi Q5 Owner',
                    content: "I usually dread going to the mechanic, but Garazen is different. They explained everything clearly and the 'stress to zen' promise is real. My car feels brand new.",
                },
                t2: {
                    name: 'Marc Tremblay',
                    role: 'Local Business Owner',
                    content: 'Professional, clean, and modern. The digital inspection report they sent to my phone was a game changer. I knew exactly what I was paying for.',
                },
                t3: {
                    name: 'Elena Rodriguez',
                    role: 'Commuter',
                    content: 'The concierge service saved my day. They picked up my car while I was at work and brought it back fixed. Worth every penny for the peace of mind.',
                },
                t4: {
                    name: 'David Chen',
                    role: 'Toyota RAV4 Owner',
                    content: "Finally, a mechanic who is honest about pricing. No hidden fees, no upsells. Just transparent, fair costs and excellent work. Highly recommend!",
                },
                t5: {
                    name: 'Sophie Martin',
                    role: 'Honda Civic Driver',
                    content: "Fast service when I needed it most. My car broke down on a Monday morning, and they had me back on the road by afternoon. A true life saver.",
                },
                t6: {
                    name: 'James Wilson',
                    role: 'BMW 3 Series Owner',
                    content: "Their expert diagnostics found an issue the dealership missed. Saved me thousands in potential repairs. These guys really know their stuff.",
                },
            },
        },

        // ── PreFooter CTA ──
        preCta: {
            title: 'Ready to drive',
            titleHighlight: 'stress-free?',
            subtitle: 'Book your appointment today and experience the Garazen difference. Precision service, transparent communication, and peace of mind — every visit.',
            ctaPrimary: 'Book an Appointment',
            ctaSecondary: 'Call (514) 421-5555',
        },

        // ── Footer ──
        footer: {
            tagline: 'Precision Auto Care',
            description: 'From stress to Zen — peace of mind for you and your car, from repairs to maintenance.',
            quickLinks: 'Quick Links',
            hours: 'Hours',
            weekdays: 'Mon – Fri',
            saturday: 'Saturday',
            sunday: 'Sunday',
            contactUs: 'Contact Us',
            allRights: 'All rights reserved.',
            madeWith: 'Crafted with precision in',
            roxboro: 'Roxboro',
            concierge: 'Open 7 days · Walk-ins Welcome',
        },

        // ── Sticky CTA ──
        stickyCta: {
            text: 'Need service?',
            button: 'Book Now',
            call: 'Call Us',
        },

        // ── Booking Modal ──
        booking: {
            title: 'Book an Appointment',
            name: 'Full Name',
            phone: 'Phone Number',
            email: 'Email',
            service: 'Select Service',
            date: 'Preferred Date',
            time: 'Preferred Time',
            notes: 'Additional Notes',
            notesPlaceholder: 'Any specific concerns or requests...',
            concierge: 'I need concierge pick-up & drop-off',
            submit: 'Submit Request',
            successTitle: 'Request Received!',
            successMsg: 'We\'ll contact you within 2 hours to confirm your appointment.',
            successCta: 'Close',
            selectPlaceholder: 'Choose a service...',
            morning: 'Morning (8am–12pm)',
            afternoon: 'Afternoon (12pm–4pm)',
            evening: 'Evening (4pm–6pm)',
        },

        // ── About ──
        about: {
            badge: 'Our Story',
            headline: '16+ Years of',
            headlineHighlight: 'Precision',
            intro: 'Garazen Auto was built on a simple belief: every driver deserves expert care, honest communication, and genuine peace of mind.',
            story: 'Our team brings over 16 years of hands-on automotive expertise — including managing one of Montreal\'s highest-rated service centers, trusted by thousands of drivers with a 4.8★ rating across 600+ reviews. That track record of excellence is the foundation Garazen Auto was built on.',
            independence: 'We chose to go independent because we believe you deserve better. No corporate red tape slowing us down. Just a dedicated team laser-focused on your vehicle, your safety, and your satisfaction.',
            trustCard: 'Trusted by thousands of drivers across Montreal — our reputation for excellence speaks for itself.',
            statYears: '16+',
            statYearsLabel: 'Years Experience',
            statRating: '4.8★',
            statRatingLabel: 'Customer Rating',
            statCustomers: '600+',
            statCustomersLabel: 'Verified Reviews',
            cta: 'Book Your Visit',
            location: 'Proudly serving Roxboro, Pierrefonds, Dollard-des-Ormeaux, and greater Montreal.',
            badgeDesktop: "Roxboro's Trusted Shop",
            brandsTitle: 'Expert Service for All Makes',
            brandsSub: 'Specialists in German, Japanese, and American engineering.',
            brandList: {
                german: 'German / Euro: BMW, Mercedes-Benz, Audi, Volkswagen, Porsche',
                japanese: 'Japanese / Asian: Toyota, Honda, Nissan, Mazda, Subaru, Lexus',
                american: 'American / Domestic: Ford, Chevrolet, GMC, Dodge, Jeep, RAM',
                trucks: 'Pick-ups & Trucks: Specialist maintenance for all light/heavy duty models',
                evs: 'Electric (EV): Tesla, Mustang Mach-E, Hyundai Ioniq, Chevy Bolt & more'
            },
            neighborhoodsTitle: 'Local Service Areas',
            neighborhoods: 'Roxboro, Pierrefonds, DDO, Kirkland, Île-Bizard, Sainte-Geneviève, West Island.'
        },

        // ── Privacy Policy ──
        privacy: {
            title: 'Privacy Policy',
            lastUpdated: 'Last Updated: February 2025',
            intro: 'At Garazen Auto, your privacy is as important as your vehicle\'s safety. This policy explains how we collect, use, and protect your personal information.',
            collectTitle: 'Information We Collect',
            collectBody: 'When you book an appointment, contact us, or use our website, we may collect: your name, phone number, email address, vehicle information, and service preferences. We only collect what\'s needed to provide you with excellent service.',
            useTitle: 'How We Use Your Information',
            useBody: 'Your information is used exclusively to: schedule and confirm appointments, communicate service updates, send appointment reminders, and improve our service quality. We never sell, rent, or share your data with third parties for marketing purposes.',
            protectTitle: 'Data Protection',
            protectBody: 'We implement industry-standard security measures to protect your personal information. Your data is stored securely and accessed only by authorized team members on a need-to-know basis.',
            cookiesTitle: 'Cookies',
            cookiesBody: 'Our website uses minimal cookies for analytics and to enhance your browsing experience. No third-party advertising cookies are used.',
            rightsTitle: 'Your Rights',
            rightsBody: 'You have the right to access, update, or delete your personal data at any time. Simply contact us and we\'ll handle your request promptly.',
            contactTitle: 'Contact Us About Privacy',
            contactBody: 'If you have questions about our privacy practices, reach out:',
            close: 'Close',
        },
    },

    // ════════════════════════════════════════════════════════
    // FRENCH — Translations françaises
    // ════════════════════════════════════════════════════════
    fr: {
        // ── Navbar ──
        nav: {
            services: 'Services',
            concierge: 'Navette',
            about: 'À propos',
            reviews: 'Avis',
            contact: 'Contact',
            callUs: 'Appelez-nous',
            bookNow: 'Réserver',
            bookAppointment: 'Prendre rendez-vous',
        },

        // ── Hero ──
        hero: {
            srOnly: 'Réparation automobile et mécanicien à Roxboro, Montréal — ',
            headlinePrefix: 'Votre voiture arrive ',
            headlineHighlight: 'stressée',
            headlineSubPrefix: 'Vous repartez ',
            subtext: 'Votre voiture est votre deuxième plus gros investissement après votre maison — c\'est pourquoi nous sommes là. Chez Garazen, nous mettons l\'accent sur un bon entretien avec des pièces de qualité et fiables pour la protéger. Diagnostics honnêtes, prix affichés, mains expertes. Ouvert 7J/7 à Roxboro.',
            badgeLeft: 'Garage de confiance à Roxboro',
            badgeRight: 'Ouvert 7J/7 · Sans rendez-vous bienvenue',
            badgePricing: 'Prix affichés · Sans surprises',
            socialProof: '600+ avis cinq étoiles',
            ctaPrimary: 'Prendre rendez-vous',
            ctaSecondary: 'Appeler Garazen',
        },

        // ── Holographic Engine ──
        holographic: {
            liveAnalysis: 'Analyse en direct',
            secureConnection: 'CONNEXION SÉCURISÉE // GARAZEN.OS.v2.4',
            steps: {
                s1: { label: 'SANTÉ MOTEUR', value: 'OPTIMAL 99,8%', sub: 'Diagnostics OBD-II Actifs' },
                s2: { label: 'PLAQUETTES DE FREIN', value: '62% RESTANT', sub: 'Prochain entretien ~25 000 km' },
                s3: { label: 'NIVEAU D\'HUILE', value: 'VIDANGE DANS 2 400 KM', sub: 'Synthétique 5W-30' },
                s4: { label: 'SUSPENSION', value: 'TOUT EST BON', sub: 'Amortisseurs inspectés' },
                s5: { label: 'ÉCHAPPEMENT', value: 'ÉMISSIONS VALIDES', sub: 'Débit: Nominal' },
                s6: { label: 'TRANSMISSION', value: 'BOÎTE DE TRANSFERT', sub: 'Fluide: Optimal' },
            },
            hotspots: {
                h1: { label: 'SYSTÈME DE FREIN', sub: 'Plaquettes: 62%' },
                h2: { label: 'DIAGNOSTICS MOTEUR', sub: 'Rendement: 98%' },
                h3: { label: 'SUSPENSION', sub: 'Garde au sol: Normale' },
                h4: { label: 'SYSTÈME D\'HUILE', sub: 'Niveau: Optimal' },
                h5: { label: 'ÉCHAPPEMENT', sub: 'Débit: Nominal' },
                h6: { label: 'TRANSMISSION', sub: 'Fluide: OK' },
            },
        },

        // ── Partners ──
        partners: {
            title: 'Partenaires de confiance',
        },

        // ── Services ──
        services: {
            badge: 'Nos services',
            title: 'Menu de services interactif',
            subtitle: 'Touchez un service pour savoir pourquoi c\'est important pour VOTRE voiture.',
            categories: {
                maintenance: 'Entretien',
                repairs: 'Réparations',
                tiresWheels: 'Pneus & Roues',
            },
            whyItMatters: 'Pourquoi c\'est important',
            estimatedTime: 'Temps estimé',
            bookService: 'Réserver ce service',
            items: {
                m1: {
                    title: 'Changement d\'huile & filtre',
                    short: 'L\'élément vital de votre moteur.',
                    why: 'Les changements d\'huile réguliers réduisent la friction, préviennent la surchauffe et éliminent les dépôts. Négliger ceci est la cause #1 de défaillance prématurée du moteur. Une huile fraîche assure un fonctionnement efficace et une plus longue durée de vie.',
                },
                m2: {
                    title: 'Vidange & échange de fluides',
                    short: 'Liquide de refroidissement, freins, transmission & direction assistée.',
                    why: 'Les fluides se dégradent avec le temps, perdant leur capacité à lubrifier, refroidir ou transmettre la force. Un vieux liquide de frein absorbe l\'humidité causant la rouille; un vieux liquide de refroidissement devient acide. Des fluides neufs protègent vos composants internes coûteux.',
                },
                m3: {
                    title: 'Remplacement de filtres',
                    short: 'Filtre à air moteur & filtre d\'habitacle.',
                    why: 'Un filtre moteur encrassé étouffe les performances et réduit l\'économie de carburant. Un filtre d\'habitacle sale fait circuler poussière et allergènes dans votre voiture. Les changer permet à votre voiture (et à vous) de mieux respirer.',
                },
                m4: {
                    title: 'Traitement Antirouille',
                    short: 'Protection ultime contre le sel et la corrosion.',
                    why: 'L\'hiver québécois est impitoyable. Le sel et l\'humidité attaquent la carrosserie et le châssis. Un traitement antirouille annuel crée une barrière robuste qui prolonge la vie de votre véhicule et préserve sa valeur de revente.',
                },
                m5: {
                    title: 'Mise au point moteur (Tune-Up)',
                    short: 'Bougies, allumage et performance.',
                    why: 'Restaure la puissance perdue et l\'économie de carburant. Des bougies usées causent des ratés et du gaspillage. Une mise au point garde votre moteur doux comme au premier jour.',
                },
                r1: {
                    title: 'Diagnostic informatisé',
                    short: 'Voyant moteur & problèmes électriques.',
                    why: 'Les voitures modernes sont des ordinateurs complexes. Un voyant allumé est un appel à l\'aide. Nos scanners avancés identifient le problème exact, vous économisant de l\'argent sur les réparations par essai-erreur et empêchant les petits problèmes de devenir catastrophiques.',
                },
                r2: {
                    title: 'Système de freins',
                    short: 'Plaquettes, disques, étriers & conduites.',
                    why: 'Votre sécurité dépend de votre capacité de freinage. Des plaquettes usées augmentent la distance de freinage, tandis que des disques voilés causent des vibrations. Ignorer les grincements peut endommager les étriers, doublant votre facture et mettant votre vie en danger.',
                },
                r3: {
                    title: 'Suspension & direction',
                    short: 'Amortisseurs, jambes de force, rotules & biellettes.',
                    why: 'La suspension ne concerne pas que le confort — elle garde vos pneus sur la route. Des amortisseurs usés causent des rebonds et une mauvaise tenue de route, tandis que des composants de direction desserrés peuvent faire dériver votre véhicule.',
                },
                r4: {
                    title: 'Mécanique Moteur',
                    short: 'Joints de culasse, chaînes de distribution & internes.',
                    why: 'Le travail moteur profond qui sauve l\'auto quand d\'autres disent "à la ferraille". Des chaînes de distribution aux joints de culasse, nous gérons les réparations internes lourdes qui restaurent le cœur de votre véhicule.',
                },
                r5: {
                    title: 'Transmission et Différentiel',
                    short: 'Fluides, embrayage, 4x4 & boîtes de transfert.',
                    why: 'La puissance doit se rendre aux roues. Nous réparons les engrenages qui glissent, les différentiels bruyants et les boîtes de transfert pour assurer des changements de vitesse fluides et une puissance fiable.',
                },
                r6: {
                    title: 'Système Électrique',
                    short: 'Batterie, Alternateur, Démarreur & Câblage.',
                    why: 'Si ça ne démarre pas ou que les lumières clignotent, c\'est souvent ici. Nous traçons les démons invisibles dans votre câblage, protégeant l\'électronique sensible de votre voiture contre les surtensions et les pannes.',
                },
                r7: {
                    title: 'Climatisation et Chauffage',
                    short: 'Contrôle du climat et confort.',
                    why: 'L\'été montréalais est chaud, l\'hiver est glacial. Une climatisation fonctionnelle n\'est pas un luxe, elle désembue vos vitres pour la sécurité. Nous réparons fuites, compresseurs et radiateurs de chauffage pour votre confort à l\'année.',
                },
                r8: {
                    title: 'Échappement et Silencieux',
                    short: 'Émissions, catalyseurs & soudure.',
                    why: 'Un échappement bruyant est agaçant et souvent illégal. Mais surtout, les fuites peuvent laisser entrer du monoxyde de carbone dangereux. Nous réglons le bruit, assurons la conformité aux émissions et gardons l\'air que vous respirez sécuritaire.',
                },
                t1: {
                    title: 'Alignement des roues',
                    short: 'Précision laser pour une conduite droite.',
                    why: 'Les nids-de-poule désalignent vos roues. Cela fait tirer votre voiture d\'un côté et use vos pneus de manière inégale. Un bon alignement prolonge considérablement la durée de vie des pneus et améliore l\'économie de carburant.',
                },
                t2: {
                    title: 'Rotation des pneus',
                    short: 'Usure égale pour une plus longue durée de vie.',
                    why: 'Les pneus avant et arrière s\'usent différemment en raison de la direction et de la répartition du poids. Les faire tourner régulièrement assure une usure uniforme, maximisant leur durée de vie et maintenant une tenue de route équilibrée.',
                },
                t3: {
                    title: 'Installation de pneus',
                    short: 'Montage & balancement.',
                    why: 'On ne fait pas que mettre des pneus n\'importe comment. On les balance avec précision pour éliminer les vibrations à haute vitesse qui peuvent endommager votre suspension et vous déranger sur l\'autoroute.',
                },
                t4: {
                    title: 'Entreposage de pneus',
                    short: 'Hôtel saisonnier pour vos roues.',
                    why: 'Économisez de l\'espace dans votre garage et épargnez votre dos du levage. Nous entreposons vos pneus hors-saison dans un environnement contrôlé pour prévenir la dégradation du caoutchouc.',
                },
            },
        },

        // ── Concierge ──
        concierge: {
            badge: 'Service Premium',
            title: 'Service de navette',
            subtitle: 'Pour les clients qui valorisent leur temps. On récupère votre véhicule, on l\'entretient, et on vous le retourne — sans perdre une minute de votre journée.',
            steps: {
                s1: { title: 'Réservez votre service', desc: 'En ligne ou par téléphone — choisissez l\'heure qui vous convient.' },
                s2: { title: 'On récupère', desc: 'Notre chauffeur arrive chez vous pour récupérer votre véhicule.' },
                s3: { title: 'Service expert', desc: 'Votre voiture reçoit des soins de précision par nos techniciens certifiés.' },
                s4: { title: 'On livre', desc: 'Fraîchement entretenu, votre véhicule est retourné directement à votre porte.' },
            },
            cta: 'Planifier une cueillette',
        },

        // ── Testimonials ──
        testimonials: {
            badge: 'Témoignages',
            title: 'Ils nous font',
            titleBreak: 'confiance.',
            badgeDesktop: 'Garage de confiance à Roxboro',
            badgeDesktopSub: 'Ouvert 7 jours sur 7',
            items: {
                t1: {
                    name: 'Sarah Jenkins',
                    role: 'Propriétaire Audi Q5',
                    content: "Je redoute habituellement le mécanicien, mais Garazen c'est différent. Ils ont tout expliqué clairement et la promesse « du stress au zen » est réelle. Ma voiture se sent comme neuve.",
                },
                t2: {
                    name: 'Marc Tremblay',
                    role: 'Propriétaire d\'entreprise locale',
                    content: 'Professionnel, propre et moderne. Le rapport d\'inspection numérique envoyé sur mon téléphone a tout changé. Je savais exactement ce que je payais.',
                },
                t3: {
                    name: 'Elena Rodriguez',
                    role: 'Navetteur',
                    content: 'Le service de navette m\'a sauvé la journée. Ils ont récupéré ma voiture pendant que j\'étais au travail et l\'ont ramenée réparée. Chaque centime vaut la tranquillité d\'esprit.',
                },
                t4: {
                    name: 'David Chen',
                    role: 'Propriétaire Toyota RAV4',
                    content: "Enfin un mécanicien honnête sur les prix. Pas de frais cachés, pas de vente sous pression. Juste des coûts justes et un travail excellent. Je recommande vivement !",
                },
                t5: {
                    name: 'Sophie Martin',
                    role: 'Conductrice Honda Civic',
                    content: "Service rapide quand j'en avais le plus besoin. Ma voiture est tombée en panne un lundi matin, et j'étais de retour sur la route l'après-midi. Un vrai sauveur.",
                },
                t6: {
                    name: 'James Wilson',
                    role: 'Propriétaire BMW Série 3',
                    content: "Leur diagnostic expert a trouvé un problème que le concessionnaire avait manqué. M'a fait économiser des milliers en réparations potentielles. Ces gars connaissent vraiment leur métier.",
                },
            },
        },

        // ── PreFooter CTA ──
        preCta: {
            title: 'Prêt à rouler',
            titleHighlight: 'sans stress ?',
            subtitle: 'Prenez rendez-vous aujourd\'hui et vivez la différence Garazen. Service de précision, communication transparente et tranquillité d\'esprit — à chaque visite.',
            ctaPrimary: 'Prendre rendez-vous',
            ctaSecondary: 'Appeler (514) 421-5555',
        },

        // ── Footer ──
        footer: {
            tagline: 'Entretien auto de précision',
            description: 'Du stress au zen — la tranquillité d\'esprit pour vous et votre voiture, des réparations à l\'entretien.',
            quickLinks: 'Liens rapides',
            hours: 'Heures',
            weekdays: 'Lun – Ven',
            saturday: 'Samedi',
            sunday: 'Dimanche',
            contactUs: 'Contactez-nous',
            allRights: 'Tous droits réservés.',
            madeWith: 'Conçu avec précision à',
            roxboro: 'Roxboro',
            concierge: 'Ouvert 7J/7 · Sans rendez-vous bienvenue',
        },

        // ── Sticky CTA ──
        stickyCta: {
            text: 'Besoin de service?',
            button: 'Réserver',
            call: 'Appeler',
        },

        // ── Booking Modal ──
        booking: {
            title: 'Prendre rendez-vous',
            name: 'Nom complet',
            phone: 'Numéro de téléphone',
            email: 'Courriel',
            service: 'Sélectionner un service',
            date: 'Date préférée',
            time: 'Heure préférée',
            notes: 'Notes supplémentaires',
            notesPlaceholder: 'Préoccupations ou demandes spécifiques...',
            concierge: 'J\'ai besoin du service de navette (cueillette & livraison)',
            submit: 'Envoyer la demande',
            successTitle: 'Demande reçue !',
            successMsg: 'Nous vous contacterons dans les 2 heures pour confirmer votre rendez-vous.',
            successCta: 'Fermer',
            selectPlaceholder: 'Choisir un service...',
            morning: 'Matin (8h–12h)',
            afternoon: 'Après-midi (12h–16h)',
            evening: 'Fin de journée (16h–18h)',
        },

        // ── About ──
        about: {
            badge: 'Notre Histoire',
            headline: '16+ ans de',
            headlineHighlight: 'Précision',
            intro: 'Garazen Auto repose sur une conviction simple : chaque conducteur mérite un service expert, une communication honnête et une vraie tranquillité d\'esprit.',
            story: 'Notre équipe cumule plus de 16 ans d\'expertise automobile de terrain — dont la gestion de l\'un des centres de service les mieux notés de Montréal, plébiscité par des milliers de conducteurs avec une note de 4.8★ et plus de 600 avis vérifiés. Cette réputation d\'excellence est le socle sur lequel Garazen Auto a été fondé.',
            independence: 'Nous avons choisi l\'indépendance parce que vous méritez mieux. Aucune bureaucratie corporative nous ralentissant. Juste une équipe dévouée, concentrée sur votre véhicule, votre sécurité et votre satisfaction.',
            trustCard: 'La confiance de milliers de conducteurs à travers Montréal — notre réputation d\'excellence parle d\'elle-même.',
            statYears: '16+',
            statYearsLabel: 'Ans d\'Expérience',
            statRating: '4.8★',
            statRatingLabel: 'Note Client',
            statCustomers: '600+',
            statCustomersLabel: 'Avis Vérifiés',
            cta: 'Prendre Rendez-vous',
            location: 'Fièrement au service de Roxboro, Pierrefonds, Dollard-des-Ormeaux et du grand Montréal.',
            badgeDesktop: 'Garage de confiance à Roxboro',
            brandsTitle: 'Service expert multi-marques',
            brandsSub: 'Spécialistes en ingénierie allemande, japonaise et américaine.',
            brandList: {
                german: 'Allemandes / Européennes : BMW, Mercedes-Benz, Audi, Volkswagen, Porsche',
                japanese: 'Japonaises / Asiatiques : Toyota, Honda, Nissan, Mazda, Subaru, Lexus',
                american: 'Américaines : Ford, Chevrolet, GMC, Dodge, Jeep, RAM',
                trucks: 'Pick-ups & Camions : Entretien spécialisé pour tous types de camions',
                evs: 'Électriques (VÉ) : Tesla, Mustang Mach-E, Hyundai Ioniq, Chevy Bolt et plus'
            },
            neighborhoodsTitle: 'Secteurs desservis',
            neighborhoods: 'Roxboro, Pierrefonds, DDO, Kirkland, Île-Bizard, Sainte-Geneviève, Ouest-de-l\'Île.'
        },

        // ── Privacy Policy ──
        privacy: {
            title: 'Politique de Confidentialité',
            lastUpdated: 'Dernière mise à jour : février 2025',
            intro: 'Chez Garazen Auto, votre vie privée est aussi importante que la sécurité de votre véhicule. Cette politique explique comment nous recueillons, utilisons et protégeons vos renseignements personnels.',
            collectTitle: 'Informations Recueillies',
            collectBody: 'Lorsque vous prenez rendez-vous, nous contactez ou utilisez notre site web, nous pouvons recueillir : votre nom, numéro de téléphone, adresse courriel, informations sur votre véhicule et préférences de service. Nous ne recueillons que les données nécessaires pour vous offrir un service de qualité.',
            useTitle: 'Utilisation de Vos Données',
            useBody: 'Vos informations servent exclusivement à : planifier et confirmer les rendez-vous, communiquer les mises à jour de service, envoyer des rappels et améliorer la qualité de notre service. Nous ne vendons, ne louons ni ne partageons jamais vos données avec des tiers à des fins publicitaires.',
            protectTitle: 'Protection des Données',
            protectBody: 'Nous appliquons des mesures de sécurité conformes aux standards de l\'industrie pour protéger vos renseignements personnels. Vos données sont stockées de façon sécurisée et accessibles uniquement par les membres autorisés de notre équipe.',
            cookiesTitle: 'Témoins (Cookies)',
            cookiesBody: 'Notre site utilise un minimum de témoins pour l\'analyse et l\'amélioration de votre expérience de navigation. Aucun témoin publicitaire tiers n\'est utilisé.',
            rightsTitle: 'Vos Droits',
            rightsBody: 'Vous avez le droit d\'accéder, de modifier ou de supprimer vos données personnelles à tout moment. Contactez-nous et nous traiterons votre demande rapidement.',
            contactTitle: 'Questions sur la Confidentialité',
            contactBody: 'Si vous avez des questions sur nos pratiques de confidentialité, contactez-nous :',
            close: 'Fermer',
        },
    },
} as const;
