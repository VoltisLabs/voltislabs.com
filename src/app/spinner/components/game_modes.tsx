

"use client";
import React from "react";
import Marquee from "react-fast-marquee";

type MarqueeDirection = "left" | "right" | "up" | "down";

interface GameModeRow {
    labels: string[];
    gap: string;
    direction: MarqueeDirection;
    speed: number;
}

const gameModeRows: GameModeRow[] = [
    {
        labels: ["SPIN RACE", "FREE MODE"],
        gap: "mx-44", // Moderate spacing
        direction: "left",
        speed: 40,
    },
    {
        labels: ["SLOW MOTION", "RPM CHASER"],
        gap: "mx-36", // Wider spacing
        direction: "right",
        speed: 30,
    },
    {
        labels: ["RACE A FRIEND", "ENDLESS RACER"],
        gap: "mx-24", // Wider spacing
        direction: "left",
        speed: 50,
    },
];

export default function GameModes() {
    return (
        <div className="relative w-full flex items-center  my-5  text-white overflow-hidden px-6 py-2">
            {/* Fixed "GAME MODES" section - 30% width */}
            <div className="w-1/3 pr-4">
                <h1
                    style={{
                        fontFamily: "var(--font-comfortaa)",
                    }}
                    className="text-lg lg:text-5xl font-semibold z-10 lg:text-nowrap"
                >
                    GAME MODES
                </h1>
            </div>

            {/* Scrolling marquees section - 70% width */}
            <div className="w-2/3 flex flex-col">
                {gameModeRows.map((row, rowIndex) => (
                    <Marquee
                        key={rowIndex}
                        gradient={false}
                        speed={row.speed}
                        direction={row.direction}
                        autoFill
                        pauseOnHover={true}
                    >
                        {row.labels.map((label, index) => (
                            <span
                                key={index}
                                className={`text-sm lg:text-3xl font-medium uppercase ${row.gap} hover:scale-110 transition-transform cursor-pointer`}
                            >
                                {label}
                            </span>
                        ))}
                    </Marquee>
                ))}
            </div>
        </div>
    );
}
