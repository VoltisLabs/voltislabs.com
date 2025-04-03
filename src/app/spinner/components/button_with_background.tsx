import React from 'react'

const ButtonWithBackground = ({ text }: { text: String }) => {
    return (
        <button className="text-nowrap ml-2 uppercase bg-[url('/button_bg.png')] bg-cover text-white font-bold py-4 px-6 lg:px-9  transform -skew-x-12 shadow-lg transition-all hover:opacity-80 active:scale-95  text-xs lg:text-base ">
            {text}
        </button>

    )
}

export default ButtonWithBackground