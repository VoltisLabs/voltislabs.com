import React from 'react';

const ButtonWithGradientText = ({ text = "PAY NOW", isWhite = false }: { text?: string, isWhite?: Boolean }) => {
    return (
        <button className={`ml-2 relative font-bold py-4 px-3 lg:px-9 transform -skew-x-12 transition-all hover:opacity-80  shadow-lg
        ${isWhite ? " bg-white text-[#FF552A] " : "text-transparent bg-gradient-to-r from-[#FF552A] to-[#FF842A]  bg-clip-text uppercase border-2 border-transparent"}`}

        >
            <span className={`text-nowrap text-xs lg:text-base ${isWhite ? "bg-white text-[#FF552A] " : "bg-gradient-to-r from-[#FF552A] to-[#FF842A] bg-clip-text text-transparent"} uppercase`}>
                {text}
            </span>
        </button>
    );
}
export default ButtonWithGradientText;
