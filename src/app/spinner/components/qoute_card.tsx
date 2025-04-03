import React from 'react'
import Rating from './Ratings'

const QuoteCard = ({ description, profilepicture, name, brand }: { description: string, profilepicture: string, name: string, brand: string }) => {
    return (
        <div className='rounded-xl flex flex-col items-center lg:items-start  py-14 px-4 lg:px-12 pb-9 border border-white  relative  overflow-visible mt-10'>
            <img src="/svgs/qoute.svg" className='absolute h-11 lg:h-20 -top-5 lg:-top-10 right-5' />
            <Rating />
            <p className='text-white text-base leading-7 font-medium mt-10 text-center lg:text-start'>
                {description}
            </p>
            <div className="w-full px-2 h-[1px] bg-gradient-to-r from-gray-500 to-transparent my-4"></div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2.5 items-center mt-5 mb-7'>
                    <img src={profilepicture} className='lg:w-16 lg:h-16 w-10 h-10 rounded-full' />
                    <div>
                        <h5 className='text-base lg:text-xl text-white font-medium font-white'>{name}</h5>
                        <p className='text-xs text-white font-medium font-white'>{brand}</p>
                    </div>
                </div>
                <div>
                    <img src="/svgs/verified.svg" className='max-w-12' />

                </div>
            </div>
        </div>
    )
}
export default QuoteCard