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
        <section
            className="my-16"

        >
            <div className="grid grid-cols-1  gap-8">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="border-b border-gray-200 rounded p-6 hover:shadow-lg transition-all"

                    >

                        {/* Placeholder for product icon */}
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                            <img
                              src={product.image}
                              alt={product.name}
                              className={
                                product.image?.endsWith(".svg")
                                  ? "h-9 w-auto max-w-[2.75rem] object-contain"
                                  : "h-8 w-8 object-cover"
                              }
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                        <p className="text-white text-sm mb-4 whitespace-pre-line">{product.description}</p>
                        <a
                            href={product.link}
                            target={product.link.startsWith("http") ? "_blank" : undefined}
                            rel={product.link.startsWith("http") ? "noopener noreferrer" : undefined}
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
        </section>
    )
}

export default ProductShowcase