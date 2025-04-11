import React from 'react'
import ButtonWithGradientText from './button_with_gradient_text'
import { defaultPadding } from '../data'

const ThirdSection = () => {
    return (
        <section className={`flex flex-col-reverse lg:flex-row items-center relative w-full overflow-hidden  py-10 rounded-xl lg:py-0  lg:mt-0 ${defaultPadding}`}>
            <img src="/svgs/virtual.svg" className="absolute  lg:top-0 left-0 w-full md:left-1/4 lg:left-0 md:w-1/2 object-cover" />
            <div className="w-full flex lg:justify-end border border-white  py-8 lg:py-16 px-5 lg:px-8 lg:mt-20 rounded-xl pb-[300px] lg:pb-10">
                <div className='flex flex-col items-start lg:w-1/2  '>
                    <h2 className='text-3xl lg:text-6xl font-extrabold text-white uppercase '>Join the <div className={`text-white bg-clip-text `}>
                        Community
                    </div></h2>
                    <p className=' mt-4 font-normal text-white text-base lg:text-lg leading-8 mb-9'>
                        Want sneak peeks, updates, and live tournaments?, Join the Spinnersonic Discord and become part of the spin revolution.
                    </p>
                    <ButtonWithGradientText isWhite text='JOIN' />
                </div>
            </div>
        </section>
    )
}

export default ThirdSection