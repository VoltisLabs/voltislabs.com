"use client"
import React from 'react'
import ArticleHeader from './components/articleHeader'
import ProductShowcase from './components/productShowcase'
import { titleClassName } from '../data'
import { motion } from 'framer-motion'
import Sidebar from '@/src/components/UI/SideBar'
import May2025 from './components/may2025'
import April2025 from './components/april2025'

const page = () => {
    const menuItems = [
        { name: 'May 2025', route: 'may2025' },
        { name: 'April 2025', route: 'april2025' },

    ];


    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl text-white pt-24">
            <Sidebar tbList={menuItems} />
            <May2025 />


            <div className='p-8'></div>
            <div className="h-0.5 bg-gray-500 w-full"></div>
            <div className='p-8'></div>
            <April2025 />

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