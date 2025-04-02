import React from 'react'
import Image from "next/image";

const ThirdSection = () => {
    return (
        <section id="loyalty-lightweight" className=' md:h-auto 2xl:h-auto flex flex-col md:flex-row-reverse flex-nowrap items-start md:py-16'>
            <div className='md:flex-1 flex-shrink-0 relative md:max-w-lg lg:max-w-xl '>
                <div className='w-full  '>
                    <Image
                        src="/ipad_pro_left.svg"
                        alt="Icon"
                        layout="responsive"
                        width={600} // Adjust width as needed
                        height={600} // Adjust height as needed
                        className="object-cover h-auto w-full"
                    />
                </div>
            </div>
            <div className='flex-1 flex-shrink-0 flex flex-col justify-start items-start gap-7 md:pr-10'>
                <h1 className='text-white text-2xl md:text-3xl font-extrabold uppercase text-wrap'>
                    Lightweight but powerful
                </h1>

                <span className='text-white text-[21.6px] font-light leading-8 text-pretty'>
                    Loyalty Bot is designed to do
                    <span className='font-bold'> exactly what you need
                    </span> without cluttering your workspace or slowing your team down. It runs quietly in the background, tracking time and applying rules with minimal disruption. There’s no complicated UI, no bloated dashboards, and no unnecessary features getting in the way of your workflow.
                </span>
            </div>
        </section>
    )
}

export default ThirdSection;
