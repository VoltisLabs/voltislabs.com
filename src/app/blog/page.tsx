"use client"
import React from 'react'
import ArticleHeader from './components/articleHeader'
import ProductShowcase from './components/productShowcase'
import { titleClassName } from '../data'
import { motion } from 'framer-motion'
import Sidebar from '@/src/components/UI/SideBar'

const page = () => {
    const menuItems = [
        { name: 'May 2025', route: 'may' },

    ];
    const products = [
        {
            name: 'VModel',
            description: 'A streamlined space for freelancers and creators to manage their work. Whether you’re a photographer, model, or designer.VModel brings your portfolio, bookings, and brand under one roof.\n Creatives shouldn’t have to juggle five apps to manage one career.VModel simplifies the chaos. ',
            link: 'https://www.vmodelapp.com/',
            image: "/image/vmodel-icon.png",
        },
        {
            name: 'Prelura',
            description: `Second-hand fashion meets smart design. Prelura makes it easy (and fun) to resell, discover, and shop fashion with purpose. \n Resale shouldn’t feel clunky. Prelura is built for the next generation of sustainable style.`,
            link: 'https://prelura.com/',
            image: "/image/prelura-icon.jpg",
        },
        {
            name: 'Outfeatz',
            description: 'Your digital closet—finally organized with background-free cutouts. Think of Outfeatz as your wardrobe’s creative assistant. Less clutter, more style.',
            link: 'https://outfeatz.com/',
            image: "/image/outfeatz.png",
        },
        {
            name: 'Afrogarm',
            description: `Afrocentric fashion, rooted in heritage and elevated by design. Afrogarm isn’t just a product showcase-it’s a platform honoring identity, storytelling, and diaspora creativity. \n Culture isn’t a trend. It’s a legacy. And Afrogarm is here to celebrate it. `,
            link: 'https://afrogarm.com/',
            image: "/image/Frame.jpg",
        },
        {
            name: 'Spinnersonic',
            description: 'A competitive mobile game that doubles as a cognitive tool for focus and rhythm. Built with ADHD support in mind, Spinnersonic combines speed and intention.  \n It’s gaming that actually helps you find your focus-not lose it. ',
            link: 'https://spinnersonic.com/',
            image: "/image/spinner.png",
        },
        {
            name: 'Productivity Hub',
            description: `The background cropper, content cleaner, and editing assistant every creator didn’t know they needed. Productivity Hub is your behind-the-scenes powerhouse. \n
We don’t always need “smarter AI.” Sometimes we just need tools that quietly work.` ,
            link: 'https://bgremover.uk/',

        },
        {
            name: 'Voltis Labs Academy',
            description: `A learning hub for creative minds who want to do more than consume tech - they want to understand it, shape it, and grow with it. \n Voltis Labs Academy is our way of opening the door. Through live workshops, creator toolkits, and mentorship sessions, we’re helping the next generation of freelancers, designers, culture builders, and innovators grow the confidence and skills they need to thrive in the digital world. `,
            link: 'https://academy.voltislabs.com/',
            image: "/images/voltis-labs-academy.png"
        }
    ]

    return (
        <div id='may' className="container mx-auto px-4 py-12 max-w-4xl text-white pt-24">
            <Sidebar tbList={menuItems} />
            <ArticleHeader
                title="Rethinking the Future of Tech: Why the Future of Tech Should Feel More Human"
                author="Voltis Labs"
                date="Published on Tuesday 6th May, 2025"
            />

            {/* Hero Image Placeholder */}
            <div className="my-12 h-96 bg-gray-100 rounded-xl flex items-center justify-center">
                <img src='/images/blog_first_image.png' className='rounded-md' />
            </div>

            <div className="prose lg:prose-xl">
                <p className="lead">
                    Let's be honest: most tech today feels like it's built for scale, not people. We've all used
                    apps that feel bloated, disconnected, or designed more for investors than users. At
                    Voltis Labs, we're taking a different approach.
                </p>

                <p>
                    We believe the future of technology should be human-centered, design-forward, and
                    culturally inclusive. We're not here to disrupt just for the sake of headlines—we're here
                    to rebuild what should've been done right the first time.
                </p>
                <br />
                <h2 className={titleClassName}>So, what does that actually mean?</h2>

                <p>
                    It means creating tools that help people express, organize, connect, and focus—without
                    friction. It means designing for real lives, not just data models. And it means making
                    space for underrepresented voices and creative communities at the heart of everything
                    we build.
                </p>

                {/* Philosophy Illustration Placeholder */}
                <div className="my-12 h-64 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                    <img src='/images/blog_second_image.jpg' className='rounded-md object-contain' />
                </div>

                <h2 className={titleClassName}>One Vision, Many Tools: The Voltis Labs Ecosystem</h2>

                <p>
                    We've been busy designing an ecosystem of products that support real creativity,
                    culture, and focus. From fashion to freelancing to mobile gaming, every platform is
                    rooted in helping people live and create with more clarity.
                </p>
            </div>

            {/* Product Showcase Section */}
            <ProductShowcase products={products} />

            <div className="prose lg:prose-xl mt-16">
                <h2 className={titleClassName}>So, Why Build Like This?</h2>

                <p>
                    We get asked a lot: why this collection of tools? Why fashion and gaming and
                    productivity?
                </p>

                <p>
                    The answer is simple: humans are complex. Creators are multidimensional.
                    Communities aren't made of single-use cases.
                </p>

                <p>
                    Every platform we build is connected by one philosophy—design tools that empower
                    people to express themselves, organize their lives, and create without barriers.
                </p>

                {/* Team/Culture Image Placeholder */}
                <div className="my-12 h-96 bg-gray-100 rounded-xl overflow-hidden">
                    <img src='/images/blog_third_image.jpg' className='rounded-md object-cover size-full' />
                </div>
                <br />
                <h2 className={titleClassName}>What's Next?</h2>

                <p>
                    We're not chasing viral features. We're not racing to "disrupt."
                </p>

                <p>
                    We're building the digital infrastructure for creators, communities, and culture to thrive.
                    Clean. Useful. Beautiful. Empowering.
                </p>
                <br />
                <p className=" font-medium">
                    This is just the beginning.
                </p>

                <p>
                    If you're someone who cares about tech that respects people's time, creativity, and
                    identity—we're building for you.
                </p>

                <p>
                    Follow along. Sign up. Reach out. Or just watch—we're okay earning your trust slowly.
                </p>

                <p className="text-2xl font-bold mt-12 text-center">
                    Voltis Labs is building better. And we're doing it together.
                </p>
            </div>

            {/* Call to Action Section */}
            <motion.div
                className="mt-16 bg-transparent border border-gray-400 rounded-xl p-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                <motion.h3
                    className="text-2xl font-bold mb-4 text-white"

                >Want to stay updated?</motion.h3>
                <motion.p className="mb-6 text-gray-400 max-w-lg mx-auto">
                    Join our newsletter to get updates on new products, features, and our philosophy of human-centered tech.
                </motion.p>
                <motion.div
                    className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
                    whileTap={{ scale: 0.98 }}
                >
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="flex-grow px-4 py-2 bg-transparent rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <motion.button
                        className="bg-black text-white px-6 py-3 rounded-lg font-medium"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 5px 15px rgba(255, 255, 255, 0.2)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Subscribe
                    </motion.button>
                </motion.div>
            </motion.div>
        </div >
    )
}

export default page