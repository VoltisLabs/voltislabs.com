export const titleClassName = 'mb-2 block text-vl-brown-dark font-semibold text-[1.02rem] leading-7 tracking-normal';
export const paragrapghClassName =
  'mb-4 block text-vl-ink text-[0.98rem] md:text-[1.04rem] font-normal leading-7 md:leading-8 tracking-normal';

export const sectionTitleClassName = 'mb-3 block text-vl-brown-dark font-bold text-[1.1rem] md:text-[1.2rem] leading-8 tracking-normal';

export const secondaryTitleClassName =
  'mb-4 w-full max-w-[52rem] mx-auto text-center text-vl-brown-dark font-extrabold text-[1.6rem] md:text-[2rem] leading-tight tracking-normal';

interface AboutItem {
  title: string;
  message: string;
  route: string;
}

export const partners = [
  {
    id: 0,
    img: '/plain.jpeg',
    message: 'AMG Studios',
    time: 'Nov 6, 2023',
    link: '/partners/amg-studios',
    description: `Amg studios is a record label and music production company that specializes in discovering and promoting emerging artists. With a focus on innovation and creativity, AMG Studios provides a platform for talented musicians to showcase their work and connect with a global audience. The label is dedicated to nurturing artistic talent and fostering collaboration within the music industry.`,
  },
];
export const About: AboutItem[] = [
  {
    title: 'Pioneering research on the path to AGI',
    message: 'Learn about our research.',
    route: '/',
  },
  {
    title: 'Transforming work and creativity with AI',
    message: 'Explore our products.',
    route: '/',
  },
  {
    title: 'Join us in shaping the future of technology',
    message: 'View careers.',
    route: '/',
  },
];

export const updates = [
  {
    img: '/image/spinnersonic.webp',
    message: 'Spinnersonic is Live!',
    time: 'June 10, 2025',
    subText: 'Race, Spin and Soar to Glory',
    description:
      'Experience the thrill of our new mobile game SpinnerSonic - where high-speed racing meets dynamic spinning mechanics in an adrenaline-packed adventure.',
  },
  {
    img: '/image/research4.png',
    message: 'Introducing ProductiveToolkits',
    time: 'June 1, 2025',
    subText: 'Smart Tools for Fast Image & Video Editing',
    description:
      'Your all-in-one productivity suite featuring background removal, image conversion, compression, watermarking and more - designed to streamline your workflow.',
  },
  {
    img: '/image/spell-check.webp',
    message: 'SpellCheck: New Word Adventure',
    time: 'May 15, 2025',
    description:
      'Our educational word game SpellCheck makes learning fun with challenging puzzles and vocabulary-building gameplay for all ages.',
  },
  {
    img: '/image/vmodel.png',
    message: 'VModel 4.15 is here!',
    time: 'Nov 29, 2023',
    subText: 'Services updates and more',
    description:
      'Discover the latest features and improvements in VModel 4.15, designed to enhance your experience.',
  },
  {
    img: '/image/vmodel.png',
    message: 'Earn from your skills with VModel',
    time: 'Nov 17, 2023',
    spotify: true,
    spotifyLink: 'https://creators.spotify.com/pod/show/vmodel',
    description:
      "Learn how to monetize your skills and grow your career with VModel's innovative platform.",
  },
  {
    img: '/image/voltis.png',
    message: 'Voltis Labs Updates',
    time: 'Nov 9, 2023',
    description: 'Stay informed about the latest developments and breakthroughs at Voltis Labs.',
  },
  {
    img: '/icons/primary-logo.svg',
    message: 'Introducing Wearhouse Pro',
    time: 'Nov 6, 2023',
    description:
      'Explore the advanced features of Wearhouse Pro, tailored for professionals and creators.',
  },
];

export const whatWeDo = [
  {
    title: 'Product Ideation & Branding',
    content: `We turn ambitious ideas into validated product concepts. From naming and brand identity to user journeys and go-to-market strategy, we help you launch with clarity and impact - not guesswork.`,
    link: { text: 'From sketch to startup-ready in weeks.', url: '#', color: '#90BEFF' },
  },
  {
    title: 'App & Web Development',
    content: `We design and build modern, scalable, and user-centric digital experiences across platforms. Our dev teams work in Swift, Flutter, React, and Django to create apps that look great and perform flawlessly - whether it's an MVP or a full-stack platform.`,
    link: { text: 'Clean code. Seamless UX. Built for growth.', url: '#', color: '#90BEFF' },
  },
  {
    title: 'Game Design & Development',
    content: `Gaming is in our DNA. With projects like Spinnersonic, we design thrilling, stylised game experiences from concept art to Unity-powered prototypes - complete with custom assets, achievements, reward systems, and UI/UX for both kids and adults.`,
    link: { text: 'Games that don’t just entertain - they stick.', url: '#', color: '#90BEFF' },
  },
  {
    title: 'Creator & Community Tools',
    content: `We build platforms that empower creators, freelancers, and community leaders - like VModel and Outfeatz. From marketplace logic to social discovery, we know what makes online communities thrive and scale.`,
    link: { text: 'Designed for creators, tested by real users.', url: '#', color: '#90BEFF' },
  },
  {
    title: 'Remote Team Culture & Tooling',
    content: `As a remote-first company, we build for remote teams - because we are one. Tools like Loyalty Bot came from our own needs for accountability, focus, and culture-building across global time zones.`,
    link: { text: 'Built by a remote team, for remote teams.', url: '#', color: '#90BEFF' },
  },
  {
    title: 'Experimental Labs & R&D',
    content: `We build platforms that empower creators, freelancers, and community leaders - like VModel and Outfeatz. From marketplace logic to social discovery, we know what makes online communities thrive and scale.`,
    link: { text: 'Designed for creators, tested by real users.', url: '#', color: '#90BEFF' },
  },
  {
    title: 'Remote Team Infrastructure',
    content: `As a remote-first company, we design internal systems to help distributed teams thrive. We also offer these same tools and frameworks to startups looking to scale remotely.`,
    link: { text: 'Includes: Discord workspaces, moderation bots (like Loyalty Bot), culture guides, break tracking, accountability tools.', url: '#', color: '#90BEFF' },
  },
];

export const update = [
  {
    id: 0,
    img: '/icons/primary-logo.svg',
    message: 'Wearhouse',
  },
  {
    id: 1,
    img: '/image/vmodel-icon.png',
    message: 'Vmodel',
  },
  {
    id: 3,
    img: '/image/Frame.jpg',
    message: 'Afrogarm',
  },
  {
    id: 4,
    img: '/image/spinner.png',
    message: 'Spinnersonic',
  },
  {
    id: 5,
    img: '/image/outfeatz.png',
    message: 'Outfeatz',
  },
  {
    id: 6,
    img: '/image/loyalty_bot.jpg',
    message: 'Loyalty bot',
  },
];


export const research = [
  {
    img: '/image/research1.png',
    message: 'DALL·E 3 system card',
    time: 'Oct 3, 2023',
  },
  {
    img: '/image/research2.png',
    message: 'GPT-4V(ision) system card',
    time: 'Sep 25, 2023',
  },
  {
    img: '/image/research3.png',
    message: 'Confidence-Building Measures for Artificial Intelligence: Workshop proceedings',
    time: 'Aug 1, 2023',
  },
  {
    img: '/image/research4.png',
    message: 'Frontier AI regulation: Managing emerging risks to public safety',
    time: 'Jul 6, 2023',
  },
];

export const products = [
  {
    id: 0,
    img: '/icons/primary-logo.svg',
    images: [
      '/image/updated-image1.jpg',
      '/image/updated-image2.jpg',
      '/image/updated-image3.jpg',
      '/image/updated-image4.jpg',
    ],
    message: 'Wearhouse',
    time: 'Nov 18, 2024',
    link: '/wearhouse',
    description: `Wearhouse is a secondhand fashion marketplace designed for style-conscious, sustainability-minded shoppers. It offers a seamless platform to buy and sell preloved clothing and accessories with ease. From everyday essentials to designer pieces, users can list items, grade their condition, create profiles, and manage their wardrobes in a way that feels modern, intuitive, and community-driven.`,
  },
  {
    id: 1,
    img: '/image/vmodel-icon.png',
    images: [
      '/image/vmodel-icon.png',
      '/image/vmodel4.jpeg',
      '/image/vmodel5.jpeg',
      '/image/vmodel6.jpeg',
    ],
    message: 'Vmodel',
    time: 'Feb 03, 2021',
    link: '/vmodel',
    description:
      "VModel is a digital platform designed to connect creators with paid opportunities in a streamlined, visually-driven environment. Blending the functionality of a freelance marketplace with the aesthetic of a social network, VModel empowers creatives-models, photographers, stylists, videographers, and more-to showcase their work, apply for jobs, and offer services all in one place. Through sleek portfolios, verified profiles, and a personalised feed, users can build their reputation and attract brands or clients looking for talent.\n \n Built with simplicity and impact in mind, VModel eliminates the friction between creativity and commerce. The platform encourages authenticity, creativity, and community-supporting both independent creatives and brands seeking fresh, skilled collaborators. Whether you're booking a photoshoot, offering a niche service, or building your creative business, VModel is designed to help you turn your craft into opportunity.",
  },
  {
    id: 2,
    img: '/image/ponylogo.png',
    images: [
      '/svgs/afrogarm_sliders/slide_1.jpg',
      '/svgs/afrogarm_sliders/slide_2.jpg',
      '/svgs/afrogarm_sliders/slide_3.jpg',
      '/svgs/afrogarm_sliders/slide_4.jpg',
    ],
    message: 'PONY',
    time: 'Dec 13, 2019',
    link: 'https://myponyapp.com/',
    description: `In our community, dating isn't about swiping endlessly. We believe the strongest relationships begin with shared passions - whether that's music, food, pets, fitness, or films. When you join, you select your core interests, and we match you with people who vibe with the same.`,
  },
  {
    id: 3,
    img: '/image/Frame.jpg',
    images: [
      '/svgs/afrogarm_sliders/slide_1.jpg',
      '/svgs/afrogarm_sliders/slide_2.jpg',
      '/svgs/afrogarm_sliders/slide_3.jpg',
      '/svgs/afrogarm_sliders/slide_4.jpg',
    ],
    message: 'Afrogarm',
    time: 'Dec 13, 2019',
    link: '/afrogram',
    description: `Afrogarm is a marketplace for African fashion, connecting talented designers with a global audience. Focused on showcasing authentic, high-quality garments and accessories, the platform celebrates the richness of African style through curated storefronts, vibrant visuals, and smooth shopping experiences. Afrogarm empowers local creators and gives buyers around the world direct access to the continent’s most exciting fashion talent.`,
  },
  {
    id: 4,
    img: '/image/spinner.png',
    images: [
      '/products/spinner/spinner.png',
      '/products/spinner/spinner1.png',
      // '/products/spinner/spinner4.png',
      '/products/spinner/spinner2.png',
      '/products/spinner/spinner3.png', 
      
     
      // '/products/spinner/spinner5.png',
    
    ],
    message: 'Spinnersonic',
    time: 'Mar 18, 2025',
    link: '/spinner',
    description: `Spinnersonic is a high-energy fidget spinner game built for mobile and web. With multiple game modes-including multiplayer races, leaderboard challenges, and relaxed free play-it offers a fresh, dynamic take on casual gaming. Players can race, customise spinners, track spin miles, and even compete in reverse-style races where being slow is the way to win.`,
  },
  {
    id: 5,
    img: '/image/outfeatz.png',
    images: [
      '/image/outfeatz.png',
      '/image/out-5.png',
      '/image/out-6.png',
      '/image/out-1.jpg',
    ],
    message: 'Outfeatz',
    time: 'Mar 20, 2025',
    link: '/outfeatz',
    description: `Outfeatz is a creative styling tool that turns outfit photos into clean, background-free cut-outs. Users can upload pictures, remove the background instantly, and build customised digital galleries of their looks. With the ability to tag brands, create themed collections, and organise their wardrobe visually, Outfeatz empowers users to curate their fashion in a way that’s personal, expressive, and digitally organised.`,
  },
  {
    id: 6,
    img: '/image/loyalty_bot.jpg',
    images: [
      '/image/loyalty_bot.jpg',
      '/image/team.png',
      '/image/Frame_12.png',
      '/image/Frame_13.png',
    ],
    message: 'Loyalty bot',
    time: 'Mar 10, 2025',
    link: '/loyalty_bot',
    description:
      "Loyalty Bot is a productivity-focused Discord bot built to help remote teams stay accountable and on time. Designed for digital workspaces that use Discord as their primary hub, Loyalty Bot tracks break times, monitors lateness, and applies custom consequences such as salary deductions or logged infractions. \n\n Loyalty Bot acts as a quiet but firm supervisor, keeping your team aligned without constant manual checks. It integrates smoothly into your team's daily workflow, offering a subtle but effective layer of structure to how your team collaborates.",
  },
  {
    id: 7,
    img: '/icons/pinnacle-transfer.svg',
    images: ['/icons/pinnacle-transfer.svg'],
    message: 'Pinnacle Transfer',
    time: 'Apr 18, 2026',
    link: '/pinnacle-transfer',
    description: `Pinnacle Transfer is built for teams who move large files daily-design exports, video cuts, audio stems, and campaign assets-without fighting attachment limits or scattered drive links. It keeps transfers fast and intentional so collaborators spend less time waiting and more time shipping.

Whether you are handing off to a remote editor or syncing work between machines, Pinnacle Transfer focuses on a smooth, dependable handoff experience that fits naturally into a creative workflow.`,
  },
  {
    id: 8,
    img: '/icons/clipstack.svg',
    images: ['/icons/clipstack.svg'],
    message: 'Clipstack',
    time: 'Apr 18, 2026',
    link: '/clipstack',
    description: `Clipstack is a clipboard manager for people who live in copy-and-paste-developers, writers, support leads, and anyone juggling URLs, snippets, and boilerplate all day. Stack what you copy, search your history, and paste the right item in seconds instead of re-fetching tabs or retyping the same text.

It turns a chaotic stream of temporary clips into an organised, recallable library so your context stays with you across apps and sessions.`,
  },
  {
    id: 9,
    img: '/products/notepad-pro/frame-103.svg',
    images: ['/products/notepad-pro/frame-103.svg'],
    message: 'NotepadPro',
    time: 'Apr 24, 2026',
    link: '/notepadpro',
    description: `NotepadPro is a desktop thinking workspace-not a single-format notes app. Write in plain text, structure work as tasks, crunch rows in CSV, and preview HTML, with local-first speed and sync when you want it (including LAN sessions). One surface for the way you actually think.`,
  },
];

/** Hero marquee images for the Wearhouse product page */
export const wearhouseSliderImages = [
  {
    img: '/image/preluraslider1.jpeg',
  },
  {
    img: '/image/prelureslider2.jpeg',
  },
  {
    img: '/image/preluraslider3.jpeg',
  },
  {
    img: '/image/preluraslider4.jpeg',
  },
];

export const outfeatz = [
  {
    img: '/image/out-5.png',
  },
  {
    img: '/image/out-6.png',
  },
  {
    img: '/image/out-1.jpg',
  },
  {
    img: '/image/out.jpg',
  },
];

export const Aboutus = [
  {
    img: '/image/about-04.jpg',
  },

  {
    img: '/image/about-03.jpg',
  },
  {
    img: '/image/about-02.jpg',
  },
  {
    img: '/image/about-4.jpg',
  },
];

export const manyCreatives = [
  {
    id: 1,
    name: 'They don’t have agency representation, which is often expensive and selective.',
  },
  {
    id: 2,
    name: 'They lack industry connections, making it hard to find work outside personal networks.',
  },
  {
    id: 3,
    name: 'They rely on social media and scattered gig platforms, which are unreliable for securing professional jobs.',
  },
];

export const vmodelSolutions = [
  {
    id: 1,
    name: 'A centralized marketplace where models, photographers, and creatives can build an interactive portfolio and apply for jobs directly-no agency needed.',
  },
  {
    id: 2,
    name: 'Real-time job listings from brands and businesses, ensuring constant opportunities.',
  },
  {
    id: 3,
    name: 'Verified client reviews, allowing creatives to build credibility and secure more work.',
  },
];

export const slowExpensiveHiring = [
  {
    id: 1,
    name: 'According to a Business of Fashion report, brands spend an average of 4-6 weeks securing talent for campaigns due to:',
  },
  {
    id: 2,
    name: 'Agency fees and commissions, which inflate hiring costs.',
  },
  {
    id: 3,
    name: 'Lengthy negotiations, delaying project timelines.',
  },

  {
    id: 4,
    name: 'Limited access to verified portfolios, making it difficult to assess talent efficiently.',
  },
];

export const vmodelSolutions2 = [
  {
    id: 1,
    name: 'A smart search and booking system that allows businesses to instantly find talent based on location, experience, and project requirements.',
  },
  {
    id: 2,
    name: 'Pre-verified creatives, ensuring authenticity and credibility.',
  },
  {
    id: 3,
    name: 'Instant hiring capabilities, reducing the typical booking process from weeks to minutes.',
  },

  {
    id: 4,
    name: 'Limited access to verified portfolios, making it difficult to assess talent efficiently.',
  },
];

export const unfairPayment = [
  {
    id: 1,
    name: 'Takes commissions of up to 40%, significantly reducing a creative’s earnings.',
  },
  {
    id: 2,
    name: 'Delays payments, with some agencies holding funds for months',
  },
  {
    id: 3,
    name: 'Lacks transparency, leaving creatives unsure about their actual pay.',
  },
];

export const vmodelSolutions3 = [
  {
    id: 1,
    name: 'Zero agency fees - Talent set their own rates and receive 100% of their earnings.',
  },

  {
    id: 2,
    name: 'Secure escrow payments, ensuring funds are released only when work is completed.',
  },

  {
    id: 3,
    name: 'Automatic invoicing, eliminating the risk of missed or delayed payments.',
  },
];

export const fragmentWork = [
  {
    id: 1,

    name: 'Missed job opportunities due to lack of organization.',
  },

  {
    id: 2,

    name: 'Lost invoices and payment tracking issues.',
  },

  {
    id: 3,

    name: 'Difficulty maintaining a professional portfolio in one place.',
  },
];

export const vmodelSolution4 = [
  {
    id: 1,

    name: 'A fully integrated workspace with messaging, contracts, payments, and job applications all in one place.',
  },

  {
    id: 2,

    name: 'No agency bias - Clients see talent based on merit, not stereotypes.',
  },

  {
    id: 3,

    name: 'A diversity search feature, allowing brands to find talent based on their specific inclusivity goals.',
  },
];

export const vmodelSolution5 = [
  {
    id: 1,

    name: 'A mobile-first platform built specifically for the creative industry.',
  },

  {
    id: 2,

    name: 'Advanced AI job matching, automatically connecting creatives with relevant gigs.',
  },

  {
    id: 3,

    name: 'Integrated project management tools, streamlining collaboration between talent and brands.',
  },
];

export const lackOfDiversity = [
  {
    id: 1,

    name: 'Only 48% of models in major fashion campaigns were people of colour.',
  },

  {
    id: 2,

    name: 'Plus-size, disabled, and gender-diverse models make up less than 10% of industry representation.',
  },
];

export const vmodelSolution6 = [
  {
    id: 1,

    name: 'An inclusive hiring system where talent of all backgrounds are equally represented.',
  },

  {
    id: 2,

    name: 'No agency bias - Clients see talent based on merit, not stereotypes.',
  },

  {
    id: 3,
    name: 'A diversity search feature, allowing brands to find talent based on their specific inclusivity goals.',
  },
];

export const vmodelResearch = [
  {
    id: 1,
    name: 'Surveys with 500+ models, photographers, and stylists to understand their biggest pain points.',
  },

  {
    id: 2,
    name: 'Interviews with brands and agencies to identify hiring inefficiencies.',
  },

  {
    id: 3,

    name: 'Case studies on industry trends, confirming the demand for a tech-driven, decentralized hiring model.',
  },
];

export const keyFindings = [
  {
    id: 1,

    name: '84% of creatives want full control over their pricing and schedule.',
  },

  {
    id: 2,

    name: '92% of brands would book talent faster if a verified talent pool was available.',
  },

  {
    id: 3,

    name: '60% of creatives prefer direct client relationships over agency representation.',
  },
];

export const techBehind = [
  {
    id: 1,

    name: 'Frontend: Being redeveloped in Swift and Flutter for a seamless platform friendly experience.',
  },

  {
    id: 2,

    name: 'Backend: Powered by Python Django and GraphQL, ensuring efficiency and data integrity.',
  },

  {
    id: 3,
    name: 'Payments: A built-in escrow system secures all transactions.',
  },

  {
    id: 4,

    name: 'Live Collaboration: Real-time messaging & notifications keep clients and talent connected.',
  },
];

export const constantlyInnovating = [
  {
    id: 1,

    name: 'AI-powered job matching for personalized gig recommendations.',
  },

  {
    id: 2,
    name: 'Augmented reality (AR) try-ons, allowing brands to preview talent in campaigns before booking.',
  },

  {
    id: 3,
    name: 'Exclusive brand partnerships, bringing even more work opportunities.',
  },
];

export const forSellers = [
  {
    id: 1,
    name: 'List in Minutes - Snap photos, add details, and set a price in a few taps.',
  },

  {
    id: 2,
    name: 'Smart Pricing Insights - Get help pricing items competitively.',
  },

  {
    id: 3,
    name: 'Quick & Secure Payments - No waiting weeks for payouts. Sell, ship, and get paid fast.',
  },

  {
    id: 4,
    name: 'Seamless Buyer Interaction - Manage orders, respond to offers, and keep track of sales.',
  },
];

export const forBuyers = [
  {
    id: 1,
    name: 'Discover Unique Finds - Browse high-quality secondhand and vintage pieces.',
  },

  {
    id: 2,
    name: 'Graded Condition System - Clear item condition labels for total transparency.',
  },

  {
    id: 3,
    name: 'Personalized Shopping - Follow sellers, save favorite items, and get tailored recommendations.',
  },

  {
    id: 4,
    name: 'Safe & Secure Transactions - Buyer protection ensures a worry-free experience.',
  },
];

export const trustedCommunity = [
  {
    id: 1,
    name: 'Buyer & Seller Protection - Secure transactions, clear policies, and dispute resolution.',
  },

  {
    id: 2,
    name: 'Authenticity & Quality - Our grading system ensures buyers know exactly what they’re getting.',
  },

  {
    id: 3,
    name: 'Fair Pricing - No inflated markups or unfair cuts. Sellers keep more of what they earn.',
  },
];

