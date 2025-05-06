"use client"

import { motion } from 'framer-motion'
import React from 'react'

interface Product {
    name: string
    description: string
    link: string
    image?: string
}

interface ProductShowcaseProps {
    products: Product[]
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ products }) => {
    return (
        <motion.section
            className="my-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="grid grid-cols-1  gap-8">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="border-b border-gray-200 rounded p-6 hover:shadow-lg transition-all"

                    >

                        {/* Placeholder for product icon */}
                        <div className="w-12 h-12 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                            <img src={product.image} className="text-white text-xs" alt={product.name} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                        <p className="text-white text-[12px] mb-4 whitespace-pre-line">{product.description}</p>
                        <a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-grtey-400 hover:underline inline-flex items-center"

                        >
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </motion.section>
    )
}

export default ProductShowcase