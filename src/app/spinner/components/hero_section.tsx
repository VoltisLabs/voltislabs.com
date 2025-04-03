'use client';

import React from 'react'
import ButtonWithBackground from './button_with_background'
import ButtonWithGradientText from './button_with_gradient_text'
import NumberCounter from './number_counter'

const HeroSection = () => {
    return (
        <section className='w-full'>
            <div className='flex flex-col lg:w-1/2 '>
                <span className=' text-4xl lg:text-6xl font-extrabold text-white uppercase leading-16'>let your mind  <span className="bg-[url('/button_bg.png')] bg-cover  bg-clip-text text-transparent">
                    explore
                </span> new world</span>
                <p className='mt-4 font-nomral text-white text-base lg:text-lg leading-8 pr-5'>Playing electronic games, whether through consoles, computers, mobile phones or another medium altogether. Gaming is a nuanced term that suggests regular gameplay, possibly as a hobby.</p>

                <div className='flex gap-4 mt-4 mb-16'>
                    <ButtonWithBackground text={"BUY NOW"} />
                    <ButtonWithGradientText />
                </div>
                <NumberCounter />
            </div>
        </section>
    )
}

export default HeroSection