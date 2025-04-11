"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ButtonWithBackground = ({
    text,
    isWhite = false,
    onClick,
    width,
    borderWidth,
    bgColor,
    borderColor,
    font,
    shouldAnimate = false,
}: {
    text: string;
    isWhite?: boolean;
    onClick?: () => void;
    width?: string;
    borderWidth?: string;
    bgColor?: boolean | string;
    borderColor?: boolean | string;
    font?: boolean;
    shouldAnimate?: boolean;
}) => {
    const resolvedBorderColor = typeof borderColor === 'string'
        ? borderColor
        : borderColor
            ? '#FF842A'
            : '#FFD94D';

    const resolvedBgColor = typeof bgColor === 'string'
        ? bgColor
        : bgColor
            ? 'transparent'
            : '#FF842A';

    const resolvedTextColor = isWhite ? 'text-white' : 'text-black';

    const resolvedFont = font ? "var(--font-comix-loud)" : "var(--font-hammersmith-one)";
    const resolvedFontSize = font ? "text-xs md:text-base" : "text-sm md:text-[20px]";
    const resolvedWidth = width?.length ? `${width}px` : "fit-content";
    const resolvedBorderWidth = borderWidth?.length ? `${borderWidth}px` : "1px";

    return (
        <motion.button
            onClick={onClick}
            animate={shouldAnimate ? { scale: [1, 1.2, 1] } : {}}
            transition={shouldAnimate ? { duration: 0.8, repeat: Infinity, repeatType: "loop" } : {}}
            style={{
                fontFamily: resolvedFont,
                width: resolvedWidth,
                borderWidth: resolvedBorderWidth,
                backgroundColor: resolvedBgColor,
                borderColor: resolvedBorderColor,
            }}
            className={`border ${resolvedTextColor} text-nowrap text-white uppercase ${resolvedFontSize} flex items-center justify-center font-bold py-[13.5px] px-4 transform rounded-lg shadow-lg transition-all hover:opacity-80 active:scale-95`}
        >
            {text}
        </motion.button>
    );
};

export default ButtonWithBackground;
