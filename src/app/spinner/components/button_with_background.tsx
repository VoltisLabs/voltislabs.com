import React from 'react'
import { motion } from 'framer-motion'

const ButtonWithBackground = ({
    text,
    isWhite = false,
    onClick,
    width,
    borderWidth,
    bgColor,
    borderColor,
    font,
    shouldAnimate = false // new prop
}: {
    text: string,
    isWhite?: boolean,
    onClick?: () => void,
    width?: string,
    borderWidth?: string,
    bgColor?: boolean,
    borderColor?: boolean,
    font?: boolean,
    shouldAnimate?: boolean
}) => {
    return (
        <motion.button
            onClick={onClick}
            animate={shouldAnimate ? { scale: [1, 1.2, 1] } : {}}
            transition={shouldAnimate ? { duration: 0.8, repeat: Infinity, repeatType: "loop" } : {}}
            style={{
                fontFamily: font ? "var(--font-comix-loud)" : "var(--font-hammersmith-one)",
                width: width?.length !== 0 ? `${width}px` : "fit-content",
                borderWidth: borderWidth?.length !== 0 ? `${borderWidth}px` : "1px"
            }}
            className={`border ${borderColor ? "border-[#FF842A]" : "border-[#FFD94D]"} text-nowrap uppercase ${bgColor ? "bg-transparent" : "bg-[#FF842A]"} text-white flex items-center justify-center font-bold py-[13.5px] px-4 transform rounded-lg shadow-lg transition-all hover:opacity-80 active:scale-95 ${font ? "text-xs md:text-base" : "text-sm md:text-[20px]"}`}
        >
            {text}
        </motion.button>
    )
}

export default ButtonWithBackground
