import React from 'react'
import ButtonWithBackground from './button_with_background'

const GameCard = ({ profilepicture, name, brand, image }: { profilepicture: string, name: string, brand: string, image: string }) => {
    return (
        <div className='flex-1 rounded-xl flex flex-col py-5 px-4 pb-9 border border-white '>
            <img src={image} className='w-full h-full object-cover object-top aspect-video min-h[221px]' />
            <h3 className='text-2xl text-white font-medium  font-white capitalize mt-7'>
                core philosophies
            </h3>
            <div className='flex gap-2.5 items-center mt-5 mb-7'>
                <img src={profilepicture} className='lg:w-16 lg:h-16 w-11 h-11 rounded-full' />
                <div>
                    <h5 className=' text-base lg:text-2xl text-white font-medium font-white'>{name}</h5>
                    <p className='text-[8px] md:text-xs text-white font-medium font-white'>{brand}</p>
                </div>
            </div>

            <ButtonWithBackground text={"Live demo"} />
        </div>
    )
}
export default GameCard