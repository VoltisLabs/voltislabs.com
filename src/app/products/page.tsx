import React from 'react'
import { products } from '../data'
import Card from './components/card'

const page = () => {
    return (
        <div className='pt-32 px-10 md:px-20 xl:px-0'>
            <h1 className='text-white font-medium text-4xl'>Products</h1>
            <p className='text-lg font-normal leading-7 mt-16 mb-20 text-white'>At Voltis Labs, we build purposeful, imaginative tools for the modern digital world. From creator platforms and fashion marketplaces to cutting-edge games and productivity bots, each product is designed to solve real problems with creativity, clarity, and innovation at its core. Explore our growing ecosystem below—built for thinkers, makers, players, and teams who want to do more with less friction.</p>

            <div className="grid grid-cols-1 gap-12 md:gap-24 py-10">
                {products.map((product, index) => (
                    <Card key={index} title={product.message} description={product.description} image={product.img} link={product.link} />
                ))}
            </div>
        </div>
    )
}

export default page