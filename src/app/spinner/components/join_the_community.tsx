"use client";
import { defaultPadding } from '@/data'
import React from 'react'
import ButtonWithBackground from './button_with_background'

const discordFeatures = [
    `	🏆 Exclusive Tournaments:     \nShow off your skills and win rare spinner skins and rewards.`,
    "	🔥 Early Access Drops:     \nBe the first to unlock new characters, modes, and spinners.",
    "   🎨 Fan Art Fridays:     \nShare your designs, spinner concepts, and wild art for a chance to be featured!",
    "	🧩 Tips, Tricks & Challenges:     \nLevel up your gameplay with secret pro moves and weekly challenges.",
    "	🎉 Hangouts and Events:     \nSpin, chat, and chill with fellow racers from around the globe.",
    "	🎤 Developer Chats:     \nMeet the team behind the magic. Help shape the future of SpinnerSonic!",
]

const JoinTheCommunity = () => {
    return (
        <section className={`flex  flex-col text-white pt-7 lg:py-[57px] !pr-0 gap-10 bg-gradient-to-br from-[#52085C] to-[#DE22FF] !pb-0`}>
            <h2 className='  px-6 lg:px-10 text-xs md:text-lg sm:text-base lg:text-4xl lg:text-[30px] xl:pt-1 font-normal text-wrap leading-9' style={{ fontFamily: 'var(--font-comix-loud)' }}>
                JOIN THE SPINNERSONIC COMMUNITY!
            </h2>
            <p style={{
                fontFamily: "var(--font-comfortaa)",
            }} className='  px-6 lg:px-10 font-bold text-base lg:text-xl'>The race doesn’t stop when the game ends.<br />
                Jump into our official SpinnerSonic Discord and become part of the fastest, fiercest, and friendliest spinner crew in the world! 🎮✨</p>
            <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row lg:items-center'>
                <div className=' flex flex-col gap-6 flex-1 '>
                    <h2
                        className="px-6 lg:px-10 leading-9 text-xs md:text-lg sm:text-base lg:text-xl xl:pt-1 font-normal text-wrap "
                        style={{ fontFamily: 'var(--font-comix-loud)' }}
                    >
                        INSIDE SPINNERSONIC DISCORD <img src="/svgs/discordIcon.svg" className="inline size-8 lg:size-12 align-center my-auto" />
                    </h2>


                    <ul className='pl-6 lg:pl-10 list-disc list-inside pb-8'>
                        {discordFeatures.map((feature, index) => (
                            <li key={`list-${index}`} style={{
                                fontFamily: "var(--font-hammersmith-one)"
                            }} className='lg:text-base xl:text-lg font-light leading-8 whitespace-pre-line break-words text-wrap'>{feature}</li>
                        )
                        )}
                    </ul>
                </div>
                <div className="w-full  flex flex-1 relative items-center">
                    <div className='absolute -translate-x-1/2 bottom-4 left-1/2 w-fit h-fit z-30 '>

                        <ButtonWithBackground font borderColor="bg-transparent" borderWidth='0' bgColor="#5865F2" text="JOIN NOW" />
                    </div>
                    <img src="/images/communityBkg.png" alt="" className='h-fit w-full relative  lg:aspect-auto object-center xl:object-contain' />
                </div>
            </div>
        </section >
    )
}

export default JoinTheCommunity