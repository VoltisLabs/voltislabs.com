import React from 'react'
import Image from "next/image";

const SecondSection = () => {
    return (
        <section id="loyalty-workspace" className=' md:h-screen 2xl:h-auto flex flex-col gap-10 md:flex-row  flex-nowrap items-start justify-between pt-32 2xl:pb-16'>
            <div className='md:flex-1 relative  md:max-w-lg lg:max-w-xl flex-shrink-0'>
                <Image
                    src="/ipad_pro.svg"
                    alt="Icon"
                    layout="responsive"
                    width={280} // Adjust width as needed
                    height={300} // Adjust height as needed
                    className=" object-contain h-auto "
                />
            </div>
            <div className=' md:flex-1  flex flex-col justify-start items-start gap-7 text-balance flex-shrink'>
                <h1 className='text-white text-2xl md:text-3xl font-extrabold uppercase text-wrap'>
                    Built for Discord-first Remote teams
                </h1>

                <span className='text-white text-[21.6px] font-light leading-8 break-normal'>
                    Loyalty Bot was created with one core belief: <span className='font-bold'>
                        your workspace should work where your team already is.
                    </span>
                    <br />
                    <br />
                    For teams using Discord as their primary office, communication hub, and daily base of operations, Loyalty Bot integrates seamlessly, no extra tools, no complicated platforms to manage.
                </span>
            </div>
        </section>
    )
}

export default SecondSection