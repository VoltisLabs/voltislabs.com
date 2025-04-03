import React from 'react';

const ButtonWithGradientText = ({ text = "PAY NOW" }: { text?: string }) => {
    return (
        <button className="ml-2 relative text-transparent font-bold py-4 px-3 lg:px-9 transform -skew-x-12 transition-all hover:opacity-80 
            border border-transparent border-solid 
            bg-[url('/button_bg.png')] bg-cover bg-center bg-clip-text 
            [border-image-source:url('/button_bg.png')] [border-image-slice:1]"
        >
            <span className="text-nowrap text-xs lg:text-base bg-[url('/button_bg.png')] bg-cover bg-center bg-clip-text text-transparent uppercase">
                {text}
            </span>
        </button>
    );
}

export default ButtonWithGradientText;
