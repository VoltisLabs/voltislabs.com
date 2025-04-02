import React from 'react'
import Image from "next/image";

const FifthSection = () => {
    return (
        <section id="loaylty-more" className='  md:h-auto flex flex-col-reverse md:flex-row gap-10 flex-nowrap items-start justify-between md:py-32 2xl:p-0'>
            <div className=' md:flex-1 flex-shrink  flex flex-col justify-start items-start gap-7 text-balance'>
                <h1 className='text-white text-2xl md:text-3xl font-extrabold uppercase text-wrap'>
                    How it works
                </h1>

                <span className='text-white text-[21.6px] font-light leading-8  break-normal'>
                    1. Invite Loyalty Bot to your Discord server
                    <span className='font-bold'>
                        Setup takes less than 2 minutes.
                    </span>
                    <br />
                    <br />

                    2.  <span className='font-bold'>
                        Configure
                    </span> your team rules
                    Set your break limits, penalties, working hours, and alerts.
                    <br />
                    <br />
                    3. Let the bot do the rest
                    It tracks activity and steps in only when needed -  <span className='font-bold'>
                        no disruptions.
                    </span>
                </span>
            </div>
            <div className='md:flex-1 flex-shrink-0  flex items-start relative w-full '>

                <Image
                    src="/workspace.svg"
                    alt="Icon"
                    layout="responsive"
                    width={280} // Adjust width as needed
                    height={300} // Adjust height as needed
                    className=" h-auto object-cover rounded-3xl"
                />

            </div>
        </section>
    )
}

export default FifthSection