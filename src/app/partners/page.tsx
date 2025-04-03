import React from 'react'
import { partners } from '../data'
import Card from '../products/components/card'

const page = () => {
    return (
        <div className='pt-32 px-10 md:px-20 xl:px-0'>
            <h1 className='text-white font-medium text-4xl'>Partners</h1>
            <p className='text-lg font-normal leading-7 mt-16 mb-20 text-white'>At Voltis Labs we partner with ....</p>

            <div className="grid grid-cols-1 gap-12 md:gap-24 py-10">
                {partners.map((product, index) => (
                    <Card key={index} title={product.message} description={product.description} image={product.img} link={product.link} />
                ))}
            </div>
        </div>
    )
}

export default page