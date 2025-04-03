export const titleClassName = "text-white font-bold text-[14.5px]";
export const paragrapghClassName =
  "text-white font-normal mb-3 block text-xs md:text-sm";

export const sectionTitleClassName = "text-white font-bold text-[15.5px]";

export const secondaryTitleClassName =
  "text-white w-full max-w-[40rem] mx-auto text-center font-extrabold md:text-[24px] text-[19px]";

interface AboutItem {
  title: string;
  message: string;
  route: string;

}



export const partners=[
  {
    id: 0,
    img: "/image/prelura-icon.jpg",
    message: "AMG Records",
    time: "Nov 6, 2023",
    link: "/partners/amg-record",
    description: `Amg records is a record label and music production company that specializes in discovering and promoting emerging artists. With a focus on innovation and creativity, AMG Records provides a platform for talented musicians to showcase their work and connect with a global audience. The label is dedicated to nurturing artistic talent and fostering collaboration within the music industry.`
  },
]
export const About: AboutItem[] = [
  {
    title: "Pioneering research on the path to AGI",
    message: "Learn about our research.",
    route: "/",
  },
  {
    title: "Transforming work and creativity with AI",
    message: "Explore our products.",
    route: "/",
  },
  {
    title: "Join us in shaping the future of technology",
    message: "View careers.",
    route: "/",
  },
];

export const updates = [
  {
    img: "/image/vmodel.png",
    message: "VModel 4.15 is here!",
    time: "Nov 29, 2023",
    subText: "Services updates and more",
    description: "Discover the latest features and improvements in VModel 4.15, designed to enhance your experience.",
  },
  {
    img: "/image/vmodel.png",
    message: "Earn from your skills with VModel",
    time: "Nov 17, 2023",
    spotify: true,
    spotifyLink: "https://creators.spotify.com/pod/show/vmodel",
    description: "Learn how to monetize your skills and grow your career with VModel's innovative platform.",
  },
  {
    img: "/image/voltis.png",
    message: "Voltis Labs Updates",
    time: "Nov 9, 2023",
    description: "Stay informed about the latest developments and breakthroughs at Voltis Labs.",
  },
  {
    img: "/image/prelura.jpeg",
    message: "Introducing Prelura Pro",
    time: "Nov 6, 2023",
    description: "Explore the advanced features of Prelura Pro, tailored for professionals and creators.",
  },
];

export const research = [
  {
    img: "/image/research1.png",
    message: "DALL·E 3 system card",
    time: "Oct 3, 2023",
  },
  {
    img: "/image/research2.png",
    message: "GPT-4V(ision) system card",
    time: "Sep 25, 2023",
  },
  {
    img: "/image/research3.png",
    message:
      "Confidence-Building Measures for Artificial Intelligence: Workshop proceedings",
    time: "Aug 1, 2023",
  },
  {
    img: "/image/research4.png",
    message: "Frontier AI regulation: Managing emerging risks to public safety",
    time: "Jul 6, 2023",
  },
];

export const products = [
  {
    id: 0,
    img: "/image/prelura-icon.jpg",
    message: "Prelura",
    time: "Nov 6, 2023",
    link: "/prelura",
    description: `Prelura is a secondhand fashion marketplace designed for style-conscious, sustainability-minded shoppers. It offers a seamless platform to buy and sell preloved clothing and accessories with ease. From everyday essentials to designer pieces, users can list items, grade their condition, create profiles, and manage their wardrobes in a way that feels modern, intuitive, and community-driven.`
  },
  {
    id: 1,
    img: "/image/vmodel-icon.png",
    message: "Vmodel",
    time: "Nov 6, 2023",
    link: "/vmodel",
    description: "VModel is a digital platform designed to connect creators with paid opportunities in a streamlined, visually-driven environment. Blending the functionality of a freelance marketplace with the aesthetic of a social network, VModel empowers creatives—models, photographers, stylists, videographers, and more—to showcase their work, apply for jobs, and offer services all in one place. Through sleek portfolios, verified profiles, and a personalised feed, users can build their reputation and attract brands or clients looking for talent.\n \n Built with simplicity and impact in mind, VModel eliminates the friction between creativity and commerce. The platform encourages authenticity, creativity, and community—supporting both independent creatives and brands seeking fresh, skilled collaborators. Whether you're booking a photoshoot, offering a niche service, or building your creative business, VModel is designed to help you turn your craft into opportunity."
  },
  {
    id: 3,
    img: "/image/Frame.jpg",
    message: "Afrogarm",
    time: "Oct 19, 2023",
    link: "/afrogram",
    description: `Afrogarm is a marketplace for African fashion, connecting talented designers with a global audience. Focused on showcasing authentic, high-quality garments and accessories, the platform celebrates the richness of African style through curated storefronts, vibrant visuals, and smooth shopping experiences. Afrogarm empowers local creators and gives buyers around the world direct access to the continent’s most exciting fashion talent.`
  },
  {
    id: 4,
    img: "/image/spinner.png",
    message: "Spinnersonic",
    time: "Sep 25, 2023",
    link: "/spinnersonic",
    description: `Spinnersonic is a high-energy fidget spinner game built for mobile and web. With multiple game modes—including multiplayer races, leaderboard challenges, and relaxed free play—it offers a fresh, dynamic take on casual gaming. Players can race, customise spinners, track spin miles, and even compete in reverse-style races where being slow is the way to win.`
  },
  {
    id: 5,
    img: "/image/outfeatz.png",
    message: "Outfeatz",
    time: "Sep 25, 2023",
    link: "/outfeatz",
    description: `Outfeatz is a creative styling tool that turns outfit photos into clean, background-free cut-outs. Users can upload pictures, remove the background instantly, and build customised digital galleries of their looks. With the ability to tag brands, create themed collections, and organise their wardrobe visually, Outfeatz empowers users to curate their fashion in a way that’s personal, expressive, and digitally organised.`
  },
  {
    id: 5,
    img: "/image/loyalty_bot.jpg",
    message: "Loyalty bot",
    time: "Sep 25, 2023",
    link: "/loyalty_bot",
    description: "Loyalty Bot is a productivity-focused Discord bot built to help remote teams stay accountable and on time. Designed for digital workspaces that use Discord as their primary hub, Loyalty Bot tracks break times, monitors lateness, and applies custom consequences such as salary deductions or logged infractions. \n\n Loyalty Bot acts as a quiet but firm supervisor, keeping your team aligned without constant manual checks. It integrates smoothly into your team's daily workflow, offering a subtle but effective layer of structure to how your team collaborates."
  },
];

export const prelura = [
  {
    img: "/image/preluraslider1.jpeg",
  },
  {
    img: "/image/prelureslider2.jpeg",
  },
  {
    img: "/image/preluraslider3.jpeg",
  },
  {
    img: "/image/preluraslider4.jpeg",
  },
];

export const outfeatz = [
  {
    img: "/image/out-5.png",
  },
  {
    img: "/image/out-6.png",
  },
  {
    img: "/image/out-1.jpg",
  },
  {
    img: "/image/out.jpg",
  },
];



export const Aboutus = [
  {
    img: "/image/about-04.jpg",
  },

  {
    img: "/image/about-03.jpg",
  },
  {
    img: "/image/about-02.jpg",
  },
  {
    img: "/image/about-4.jpg",
  },
];

export const manyCreatives = [
  {
    id: 1,
    name: "They don’t have agency representation, which is often expensive and selective.",
  },
  {
    id: 2,
    name: "They lack industry connections, making it hard to find work outside personal networks.",
  },
  {
    id: 3,
    name: "They rely on social media and scattered gig platforms, which are unreliable for securing professional jobs.",
  },
];

export const vmodelSolutions = [
  {
    id: 1,
    name: "A centralized marketplace where models, photographers, and creatives can build an interactive portfolio and apply for jobs directly—no agency needed.",
  },
  {
    id: 2,
    name: "Real-time job listings from brands and businesses, ensuring constant opportunities.",
  },
  {
    id: 3,
    name: "Verified client reviews, allowing creatives to build credibility and secure more work.",
  },
];

export const slowExpensiveHiring = [
  {
    id: 1,
    name: "According to a Business of Fashion report, brands spend an average of 4-6 weeks securing talent for campaigns due to:",
  },
  {
    id: 2,
    name: "Agency fees and commissions, which inflate hiring costs.",
  },
  {
    id: 3,
    name: "Lengthy negotiations, delaying project timelines.",
  },

  {
    id: 4,
    name: "Limited access to verified portfolios, making it difficult to assess talent efficiently.",
  },
];

export const vmodelSolutions2 = [
  {
    id: 1,
    name: "A smart search and booking system that allows businesses to instantly find talent based on location, experience, and project requirements.",
  },
  {
    id: 2,
    name: "Pre-verified creatives, ensuring authenticity and credibility.",
  },
  {
    id: 3,
    name: "Instant hiring capabilities, reducing the typical booking process from weeks to minutes.",
  },

  {
    id: 4,
    name: "Limited access to verified portfolios, making it difficult to assess talent efficiently.",
  },
];

export const unfairPayment = [
  {
    id: 1,
    name: "Takes commissions of up to 40%, significantly reducing a creative’s earnings.",
  },
  {
    id: 2,
    name: "Delays payments, with some agencies holding funds for months",
  },
  {
    id: 3,
    name: "Lacks transparency, leaving creatives unsure about their actual pay.",
  },
];

export const vmodelSolutions3 = [
  {
    id: 1,
    name: "Zero agency fees – Talent set their own rates and receive 100% of their earnings.",
  },

  {
    id: 2,
    name: "Secure escrow payments, ensuring funds are released only when work is completed.",
  },

  {
    id: 3,
    name: "Automatic invoicing, eliminating the risk of missed or delayed payments.",
  },
];

export const fragmentWork = [
  {
    id: 1,

    name: "Missed job opportunities due to lack of organization.",
  },

  {
    id: 2,

    name: "Lost invoices and payment tracking issues.",
  },

  {
    id: 3,

    name: "Difficulty maintaining a professional portfolio in one place.",
  },
];

export const vmodelSolution4 = [
  {
    id: 1,

    name: "A fully integrated workspace with messaging, contracts, payments, and job applications all in one place.",
  },

  {
    id: 2,

    name: "No agency bias – Clients see talent based on merit, not stereotypes.",
  },

  {
    id: 3,

    name: "A diversity search feature, allowing brands to find talent based on their specific inclusivity goals.",
  },
];

export const vmodelSolution5 = [
  {
    id: 1,

    name: "A mobile-first platform built specifically for the creative industry.",
  },

  {
    id: 2,

    name: "Advanced AI job matching, automatically connecting creatives with relevant gigs.",
  },

  {
    id: 3,

    name: "Integrated project management tools, streamlining collaboration between talent and brands.",
  },
];

export const lackOfDiversity = [
  {
    id: 1,

    name: "Only 48% of models in major fashion campaigns were people of colour.",
  },

  {
    id: 2,

    name: "Plus-size, disabled, and gender-diverse models make up less than 10% of industry representation.",
  },
];

export const vmodelSolution6 = [
  {
    id: 1,

    name: "An inclusive hiring system where talent of all backgrounds are equally represented.",
  },

  {
    id: 2,

    name: "No agency bias – Clients see talent based on merit, not stereotypes.",
  },

  {
    id: 3,
    name: "A diversity search feature, allowing brands to find talent based on their specific inclusivity goals.",
  },
];

export const vmodelResearch = [
  {
    id: 1,
    name: "Surveys with 500+ models, photographers, and stylists to understand their biggest pain points.",
  },

  {
    id: 2,
    name: "Interviews with brands and agencies to identify hiring inefficiencies.",
  },

  {
    id: 3,

    name: "Case studies on industry trends, confirming the demand for a tech-driven, decentralized hiring model.",
  },
];

export const keyFindings = [
  {
    id: 1,

    name: "84% of creatives want full control over their pricing and schedule.",
  },

  {
    id: 2,

    name: "92% of brands would book talent faster if a verified talent pool was available.",
  },

  {
    id: 3,

    name: "60% of creatives prefer direct client relationships over agency representation.",
  },
];

export const techBehind = [
  {
    id: 1,

    name: "Frontend: Being redeveloped in Swift and Flutter for a seamless platform friendly experience.",
  },

  {
    id: 2,

    name: "Backend: Powered by Python Django and GraphQL, ensuring efficiency and data integrity.",
  },

  {
    id: 3,
    name: "Payments: A built-in escrow system secures all transactions.",
  },

  {
    id: 4,

    name: "Live Collaboration: Real-time messaging & notifications keep clients and talent connected.",
  },
];

export const constantlyInnovating = [
  {
    id: 1,

    name: "AI-powered job matching for personalized gig recommendations.",
  },

  {
    id: 2,
    name: "Augmented reality (AR) try-ons, allowing brands to preview talent in campaigns before booking.",
  },

  {
    id: 3,
    name: "Exclusive brand partnerships, bringing even more work opportunities.",
  },
];

export const forSellers = [
  {
    id: 1,
    name: "List in Minutes – Snap photos, add details, and set a price in a few taps.",
  },

  {
    id: 2,
    name: "Smart Pricing Insights – Get help pricing items competitively.",
  },

  {
    id: 3,
    name: "Quick & Secure Payments – No waiting weeks for payouts. Sell, ship, and get paid fast.",
  },

  {
    id: 4,
    name: "Seamless Buyer Interaction – Manage orders, respond to offers, and keep track of sales.",
  },
];

export const forBuyers = [
  {
    id: 1,
    name: "Discover Unique Finds – Browse high-quality secondhand and vintage pieces.",
  },

  {
    id: 2,
    name: "Graded Condition System – Clear item condition labels for total transparency.",
  },

  {
    id: 3,
    name: "Personalized Shopping – Follow sellers, save favorite items, and get tailored recommendations.",
  },

  {
    id: 4,
    name: "Safe & Secure Transactions – Buyer protection ensures a worry-free experience.",
  },
];

export const trustedCommunity = [
  {
    id: 1,
    name: "Buyer & Seller Protection – Secure transactions, clear policies, and dispute resolution.",
  },

  {
    id: 2,
    name: "Authenticity & Quality – Our grading system ensures buyers know exactly what they’re getting.",
  },

  {
    id: 3,
    name: "Fair Pricing – No inflated markups or unfair cuts. Sellers keep more of what they earn.",
  },
];
