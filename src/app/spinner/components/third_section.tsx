import React from 'react'
import ButtonWithGradientText from './button_with_gradient_text'

const ThirdSection = () => {
    return (
        <section className='flex flex-col-reverse lg:flex-row items-center relative w-full overflow-hidden  py-10 rounded-xl lg:py-0 mt-10 lg:mt-0'>
            <img src="/svgs/virtual.svg" className="absolute  lg:top-0 left-0 w-full lg:w-1/2 object-cover" />
            <div className="w-full flex lg:justify-end border border-white py-16 px-5 lg:px-8 mt-20 rounded-xl pb-[300px] lg:pb-10">
                <div className='flex flex-col items-start lg:w-1/2  '>
                    <span className='text-3xl lg:text-6xl font-extrabold text-white uppercase '>discover the <span className="bg-[url('/button_bg.png')] bg-cover  bg-clip-text text-transparent">
                        Virtual
                    </span> reality gaming </span>
                    <p className=' mt-4 font-normal text-white text-base lg:text-lg leading-8 mb-9'>
                        A well-designed gaming header often incorporates elements such as game characters, iconic symbols, vibrant colors, and dynamic visuals to convey excitement, adventure, and the immersive nature of gaming.
                    </p>
                    <ButtonWithGradientText />
                </div>
            </div>
        </section>
    )
}

export default ThirdSection