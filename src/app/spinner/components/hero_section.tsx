'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ButtonWithBackground from './button_with_background';
import ButtonWithGradientText from './button_with_gradient_text';
import NumberCounter from './number_counter';
import ViewAllButton from '@/src/components/UI/view_all_button';
import FidgetSpinner from './fidget_spinner';
import { TbFidgetSpinner } from 'react-icons/tb';

const spinners = [
    "/svgs/spinners/fidget_spiner.png",
    "/svgs/spinners/fidget_spiner_1.png",
    "/svgs/spinners/fidget_spiner_2.png",
    "/svgs/spinners/fidget_spiner_3.png",
    // "/svgs/afrogarm_sliders/slide_1.png"
    // "/svgs/spinners/spinner_dragon.svg",
    // "/svgs/spinners/spinner_fish.svg",
    // "/svgs/spinners/spinner_bang.svg",
    // "/svgs/spinners/spinner_dragon_right.svg",
    // "/svgs/spinners/spinner_star.svg",
    // "/svgs/spinners/spinner_round.svg"
];

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [isPaused, setIsPaused] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    const lastMouseX = useRef(0);
    const lastTime = useRef(performance.now());
    const spinnerRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        let animationFrameId: number;

        const updateRotation = () => {
            if (!isPaused) {
                setRotation(prev => prev + speed);
                animationFrameId = requestAnimationFrame(updateRotation);
            }
        };

        if (!isPaused) {
            animationFrameId = requestAnimationFrame(updateRotation);
        }

        return () => cancelAnimationFrame(animationFrameId);
    }, [speed, isPaused]);

    const handleMouseEnter = (event: React.MouseEvent) => {
        lastMouseX.current = event.clientX;
        lastTime.current = performance.now();
        setIsHovered(true);
    };

    const handleMouseMove = (event: React.MouseEvent) => {
        if (!isHovered) return;

        const now = performance.now();
        const deltaTime = now - lastTime.current;
        lastTime.current = now;

        const deltaX = event.clientX - lastMouseX.current;
        lastMouseX.current = event.clientX;

        if (Math.abs(deltaX) > 2) {
            const velocity = deltaX / deltaTime; // Speed factor
            const newSpeed = Math.min(Math.max(velocity * 10, -20), 20); // Keep within a reasonable range
            setSpeed(newSpeed);
            setIsPaused(false);
            setIsHovered(false); // Lock direction after first move
        }
    };

    const togglePause = () => {
        setIsPaused(prev => !prev);
    };

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === spinners.length - 1 ? 0 : prevIndex + 1));
        setRotation(0);
        setSpeed(0);
        setIsPaused(true);
    };

    return (
        <section className='w-full flex flex-col lg:flex-row items-center justify-between'>
            {/* Left Content */}
            <div className='flex flex-col lg:w-1/2 '>
                <span className='text-4xl lg:text-6xl font-extrabold text-white uppercase leading-16'>
                    let your mind <span className="bg-[url('/button_bg.png')] bg-cover bg-clip-text text-transparent"> explore</span> new world
                </span>
                <p className='mt-4 font-normal text-white text-base lg:text-lg leading-8 pr-5'>
                    Spinnersonic is a high-speed fidget spinner game with multiple gameplay modes, dynamic environments, and competitive online racing. Whether you’re battling in real-time multiplayer or cruising in free mode, Spinnersonic is built for players who love fast, fluid gameplay with a twist.
                </p>

                <div className='flex gap-4 mt-4 mb-16'>
                    <ButtonWithBackground text="PLAY NOW" />
                    <ButtonWithGradientText text='LEADERBOARDS' />
                </div>
                <NumberCounter />
            </div>

            {/* Right Spinner Carousel */}
            <div className="relative lg:w-1/2 flex flex-col h-full gap-3 justify-center overflow-hidden">
                {/* <FidgetSpinner /> */}
                <div className="w-full relative flex flex-col gap-6 lg:gap-0 lg:flex-row justify-center items-center">
                    <AnimatePresence custom={direction} mode="wait" >
                        <FidgetSpinner
                            key={spinners[currentIndex]}
                            imageUrl={spinners[currentIndex]}

                        />
                        {/* <TbFidgetSpinner className="size-28" /> */}
                        <span>
                            76.0RPM
                        </span>
                    </AnimatePresence>
                </div>

                <div className='w-fit ml-auto '>
                    <ViewAllButton text={'Switch'} onClick={nextSlide} />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;



