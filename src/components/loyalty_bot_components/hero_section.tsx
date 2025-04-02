import React from 'react'

const HeroSection = () => {
    return (
        <section className=' h-screen 2xl:h-auto flex gap-16 items-center pt-16'>
            <div className='  flex flex-col justify-start items-start gap-7  md:pr-10 flex-1'>
                <h1 className='text-white text-3xl md:text-3xl font-extrabold uppercase text-wrap'>
                    Keep your team sharp, on time, and accountable
                </h1>

                <span className='text-white text-[21.6px] font-light leading-8'>
                    Loyalty Bot is a productivity and moderation tool built specifically for teams who run their work life on Discord. Loyalty Bot helps you track<span className='font-bold'> break times, monitor lateness</span>, and hold everyone to the<span className='font-bold'> same standard</span> — fairly, automatically, and without micromanagement.
                </span>
            </div>
            <div className=' hidden  relative md:flex items-center justify-end  flex-1 '>
                <img
                    src="/logo.svg"
                    alt="Icon"
                    className=" object-contain h-auto w-full 2xl:w-full hidden md:block"
                />
            </div>
        </section>
    )
}

export default HeroSection