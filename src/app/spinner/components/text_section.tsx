import { defaultPadding } from '../data'
import React from 'react'

const TextSection = () => {
    return (
        <section className={`${defaultPadding} !pb-6 lg:pb-20 !gap-0 flex flex-col items-center`}>
            <span style={{
                fontFamily: "var(--font-titan-one)"
            }} className='text-lg lg:text-5xl font-normal text-center px-8 leading-10 mb-1 space-y-3 text-white md:leading-12 lg:leading-16'>This isn’t just a race
                <br />It’s a <span style={{
                    fontFamily: "var(--font-titan-one)"
                }} className='font-medium text-[#FFD94D]'>
                    legacy.</span>
            </span>
            <div className="lg:hidden flex flex-col space-y-3 sm:text-lg lg:text-4xl xl:text-5xl font-normal text-center px-10 text-[#FA5421]" >
                <p style={{ fontFamily: 'var(--font-titan-one)' }}>Spin fast.</p>
                <p style={{ fontFamily: 'var(--font-titan-one)' }}>Spin fierce.</p>
                <p style={{ fontFamily: 'var(--font-titan-one)' }}>Spin legendary.</p>
            </div>

            <span style={{
                fontFamily: "var(--font-titan-one)"
            }} className=' lg:block hidden lg:text-4xl xl:text-5xl font-normal text-center px-10 text-[#FA5421]'>
                Spin fast. Spin fierce. Spin legendary.
            </span>
        </section>
    )
}

export default TextSection