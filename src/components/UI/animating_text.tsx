import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";


export default function TextColorAnimation({
    text,
    fontSize,
    fontFamily,
    fontWeight,
    textAlign,
    color01,
    color02,
    Duration,
}: {
    text: string
    fontSize: number
    fontFamily: string
    fontWeight: number
    textAlign: "left" | "center" | "right"
    color01: string
    color02: string
    Duration: number
}) {
    const controls = useAnimation();
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const animateText = async () => {
            while (true) {
                await controls.start({ width: "100%" });
                await controls.start({ width: "0%" });
            }
        };
        animateText();
    }, [controls]);

    return (
        <div
            style={{
                fontSize: `${fontSize}px`,
                fontFamily: fontFamily,
                fontWeight: fontWeight,
                width: "100%",
                whiteSpace: "nowrap",
                color: color01,
                textAlign: textAlign,
                position: "relative",
                display: "inline-block",
            }}
            ref={textRef}
        >
            <span style={{ position: "relative", display: "inline-block" }}>
                {text}
                <motion.span
                    style={{
                        position: "absolute",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        color: color02,
                        top: 0,
                        left: 0,
                        width: "0%",
                    }}
                    animate={controls}
                    initial={{ width: "0%" }}
                    transition={{ duration: Duration, ease: "linear" }}
                >
                    {text}
                </motion.span>
            </span>
        </div>
    );

} 