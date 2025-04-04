'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ButtonWithBackground from './button_with_background';
import ButtonWithGradientText from './button_with_gradient_text';
import NumberCounter from './number_counter';
import ViewAllButton from '@/src/components/UI/view_all_button';

const spinners = [
    "/svgs/spinners/spinner_dragon.svg",
    "/svgs/spinners/spinner_fish.svg",
    "/svgs/spinners/spinner_bang.svg",
    "/svgs/spinners/spinner_dragon_right.svg",
    "/svgs/spinners/spinner_star.svg",
    "/svgs/spinners/spinner_round.svg"
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
        <section className='w-full flex flex-col lg:flex-row items-start justify-between'>
            {/* Left Content */}
            <div className='flex flex-col lg:w-1/2 lg:pt-20'>
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
            <div className="relative lg:w-1/2 flex flex-col h-full items-center justify-center overflow-hidden">
                {/* <FidgetSpinner /> */}
                <div className="w-full h-96 relative flex items-center">
                    <AnimatePresence custom={direction} mode="wait" >
                        <motion.img
                            key={spinners[currentIndex]}
                            src={spinners[currentIndex]}
                            alt="Spinner"
                            className=" w-full h-full object-contain"
                            initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                        <span>
                            76.0RPM
                        </span>
                    </AnimatePresence>
                </div>

                <div className='w-fit self-end'>
                    <ViewAllButton text={'Switch'} onClick={nextSlide} />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;



const FidgetSpinner = () => {
    const [rotation, setRotation] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const lastPosition = useRef(0);
    const animationFrame = useRef<number | null>(null);

    // 🎛️ Fine-tuning values
    const SENSITIVITY = 0.2; // Adjusts how movement affects spin
    const FRICTION = 0.99; // Controls slowdown effect
    const MIN_SPEED = 0.05; // Stops unnecessary small movements

    // 🎮 Start Spin (Mouse + Touch)
    const startSpin = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        setIsInteracting(true);

        const posX = "touches" in event ? event.touches[0].clientX : event.clientX;
        lastPosition.current = posX;
    };

    // 🎛️ Adjust Speed (Mouse + Touch)
    const adjustSpeed = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (!isInteracting) return;

        const posX = "touches" in event ? event.touches[0].clientX : event.clientX;
        const deltaX = posX - lastPosition.current; // Get the delta X value
        lastPosition.current = posX;

        // Adjust the speed based on the direction of the movement:
        // Moving right (positive deltaX) = clockwise spin
        // Moving left (negative deltaX) = counterclockwise spin
        if (Math.abs(deltaX) > 1) {
            setIsPaused(false); // Unpause when movement starts
            setSpeed(prevSpeed => prevSpeed + deltaX * SENSITIVITY); // Directly increase/decrease speed
        }
    };

    // 🛑 Stop Interaction (Mouse + Touch)
    const stopInteraction = () => {
        setIsInteracting(false);

        if (Math.abs(speed) < MIN_SPEED) {
            setSpeed(0);
            setIsPaused(true); // Pause if speed is too low
        }
    };

    // ⏳ Apply Momentum Effect
    useEffect(() => {
        const updateRotation = () => {
            if (isPaused || Math.abs(speed) < MIN_SPEED) {
                setSpeed(0);
                animationFrame.current = null;
                return;
            }

            setRotation(prev => prev + speed); // Apply rotation based on speed
            setSpeed(prev => prev * FRICTION); // Apply slowdown effect

            animationFrame.current = requestAnimationFrame(updateRotation);
        };

        if (animationFrame.current === null) {
            animationFrame.current = requestAnimationFrame(updateRotation);
        }

        return () => {
            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
                animationFrame.current = null;
            }
        };
    }, [speed, isPaused]);

    return (
        <div className="flex flex-col items-center justify-center h-96">
            <motion.img
                src="/svgs / spinners / spinner_star.svg"
                alt="Fidget Spinner"
                className="w-48 h-48 cursor-pointer select-none"
                style={{ rotate: `${rotation}deg` }
                }
                onMouseDown={startSpin}
                onMouseMove={adjustSpeed}
                onMouseUp={stopInteraction}
                onMouseLeave={stopInteraction}
                onTouchStart={startSpin}
                onTouchMove={adjustSpeed}
                onTouchEnd={stopInteraction}
            />
            <p className="mt-4 text-lg">
                {isPaused ? "Paused" : "Spinning"} | Speed: {speed.toFixed(2)}
            </p>
        </div >
    );
};