"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import ButtonWithBackground from "./button_with_background"


export default function FidgetSpinner({
    fidget,
    onMaxRpmUpdate,
    onFinish,
    retry,
    setRetry,
}: {
    fidget: string;
    onMaxRpmUpdate?: (rpm: number) => void;
    onFinish?: (finished: boolean) => void;
    retry?: boolean; // Prop to trigger retry
    setRetry?: (value: boolean) => void;
}) {
    const [rotation, setRotation] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const elementRef = useRef<HTMLImageElement>(null);
    const lastPositionRef = useRef({ x: 0, y: 0 });
    const centerRef = useRef({ x: 0, y: 0 });
    const isDraggingRef = useRef(false);
    const velocityRef = useRef(0);
    const lastTimeRef = useRef(0);
    const animationRef = useRef<number | null>(null);
    const [rpm, setRpm] = useState(0);
    const [animatedRpm, setAnimatedRpm] = useState(0);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [maxRpm, setMaxRpm] = useState(0);
    const [step, setStep] = useState(0);
    const [selectedTime, setSelectedTime] = useState<number | null>(null);
    const [countdown, setCountdown] = useState(0);
    const [lastSelectedTime, setLastSelectedTime] = useState<number | null>(null); // Store the last selected time
    const [isRunning, setIsRunning] = useState(false);
    const endTimeRef = useRef<number | null>(null);
    const [remainingTime, setRemainingTime] = useState(0); // in ms
    const [isPlayPressed, setIsPlayPressed] = useState(false);

    const timeOptions = [30, 60, 120, 300]; // seconds

    // Retry logic
    useEffect(() => {
        if (retry && lastSelectedTime) {

            setStep(2)
            setSelectedTime(lastSelectedTime);
            handlePlay()
            if (setRetry) {
                setRetry(false); // Reset the retry state
            }
        }
    }, [retry, lastSelectedTime, setRetry]);

    useEffect(() => {
        if (rpm > maxRpm) {
            setMaxRpm(rpm);
            if (onMaxRpmUpdate) {
                onMaxRpmUpdate(rpm); // Notify parent of the new maxRpm
            }
        }
    }, [rpm, maxRpm, onMaxRpmUpdate]);
    // Smoothly animate the RPM display
    useEffect(() => {
        const controls = requestAnimationFrame(() => {
            setAnimatedRpm((prev) => prev + (rpm - prev) * 0.1);
        });

        return () => {
            cancelAnimationFrame(controls);
        };
    }, [rpm, animatedRpm]);

    useEffect(() => {
        if (!isRunning || !endTimeRef.current) return;

        intervalRef.current = setInterval(() => {
            const timeLeft = endTimeRef.current! - Date.now();
            if (timeLeft <= 0) {
                clearInterval(intervalRef.current!);
                setIsRunning(false);
                setRemainingTime(0);
                setStep(1);
                setIsAnimating(false);
                setIsPlayPressed(false)
                if (onFinish) onFinish(true);
            } else {
                setRemainingTime(timeLeft);
            }
        }, 50); // update every 50ms

        return () => clearInterval(intervalRef.current!);
    }, [isRunning]);


    useEffect(() => {
        if (isRunning && countdown !== null && countdown > 0) {
            timerRef.current = setTimeout(() => {
                setCountdown((prev) => (prev !== null && prev > 0 ? prev - 1 : 0));
            }, 1000);
        } else if (countdown === 0 && isRunning) {
            if (timerRef.current !== null) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            setIsRunning(false);
            setTimeout(() => {
                setSelectedTime(null);

                setStep(1); // Go back to timer selection
                setIsAnimating(false);
            }, 1000);
            if (onFinish) {
                onFinish(true);
            }
        }

        return () => {
            if (timerRef.current !== null) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [isRunning, countdown]);

    const handleAnimationExit = () => {
        setIsRunning(false);
        setTimeout(() => {
            setSelectedTime(null);
            setMaxRpm(0);
            setStep(0); // Go back to timer selection
            setIsAnimating(false);
            setIsPlayPressed(false)
        }, 1000);
    };

    const formatTime = (ms: number) => {
        // Ensure ms is valid and format milliseconds
        const totalSeconds = Math.floor(ms / 1000);
        const milliseconds = ms % 1000;  // Get the milliseconds part directly

        // Extract hours, minutes, seconds
        const h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
        const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
        const s = String(totalSeconds % 60).padStart(2, "0");

        // Format milliseconds to always be 3 digits
        const formattedMilliseconds = String(milliseconds).padStart(3, "0");

        return `${h}:${m}:${s}.${formattedMilliseconds}`;
    };



    const handlePlay = () => {
        if (selectedTime && step == 2) {
            const durationMs = selectedTime * 1000;
            const endTime = Date.now() + durationMs;
            endTimeRef.current = endTime;
            setLastSelectedTime(selectedTime);
            setCountdown(selectedTime);
            setIsRunning(true);
            setSelectedTime(null);
            setMaxRpm(0);
        }
    };

    const simulateRpmInput = () => {
        if (!isRunning) return;

        setMaxRpm((prev) => Math.max(prev, rpm));
    };

    // Function to handle momentum-based animation
    const animateMomentum = () => {
        if (!isAnimating) return;

        // Apply extremely minimal friction to spin for 47+ seconds (changed from 0.99 to 0.997)
        velocityRef.current *= 0.997;

        // Update rotation based on velocity
        setRotation((prev) => prev + velocityRef.current);

        // Calculate RPM (Rotations Per Minute)
        const currentRpm = Math.abs(velocityRef.current * 166.6667) / 100;
        setRpm(currentRpm);

        simulateRpmInput();

        // Stop animation when velocity becomes extremely small
        // Reduced threshold from 0.01 to 0.001 to spin much longer
        if (Math.abs(velocityRef.current) < 0.001) {
            setIsAnimating(false);
            setIsRunning(false);
            setRpm(0);
            return;
        }

        // Continue animation
        animationRef.current = requestAnimationFrame(animateMomentum);
    };

    // Start/stop animation when isAnimating changes
    useEffect(() => {
        if (isAnimating) {
            animationRef.current = requestAnimationFrame(animateMomentum);
            if (!isRunning) {
                handlePlay();
            }
        } else if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }

        // When animation stops, ensure RPM is set to 0
        if (!isAnimating) {
            setRpm(0);
        }
        if (rpm > maxRpm) {
            setMaxRpm(rpm);
        }

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isAnimating]);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!elementRef.current) return;

        // Stop any ongoing momentum animation
        setIsAnimating(false);

        velocityRef.current = 0;

        // Reset RPM when user interacts with the spinner
        setRpm(0);

        isDraggingRef.current = true;
        lastTimeRef.current = performance.now();

        // Calculate the center of the element
        const rect = elementRef.current.getBoundingClientRect();
        centerRef.current = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
        };

        // Save the starting point
        lastPositionRef.current = {
            x: e.clientX,
            y: e.clientY,
        };

        // Prevent default to avoid any browser drag behavior
        e.preventDefault();
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDraggingRef.current) return;

        const currentTime = performance.now();
        const deltaTime = currentTime - lastTimeRef.current;
        lastTimeRef.current = currentTime;

        const center = centerRef.current;
        const currentPosition = { x: e.clientX, y: e.clientY };
        const lastPosition = lastPositionRef.current;

        // Calculate vectors from center to positions
        const lastVector = {
            x: lastPosition.x - center.x,
            y: lastPosition.y - center.y,
        };

        const currentVector = {
            x: currentPosition.x - center.x,
            y: currentPosition.y - center.y,
        };

        // Calculate the cross product to determine rotation direction
        const crossProduct =
            lastVector.x * currentVector.y - lastVector.y * currentVector.x;

        // Calculate the dot product to find the angle
        const dotProduct =
            lastVector.x * currentVector.x + lastVector.y * currentVector.y;

        // Calculate magnitudes of vectors
        const lastMagnitude = Math.sqrt(
            lastVector.x * lastVector.x + lastVector.y * lastVector.y
        );
        const currentMagnitude = Math.sqrt(
            currentVector.x * currentVector.x + currentVector.y * currentVector.y
        );

        // Calculate the angle between vectors (in radians)
        const cosAngle = dotProduct / (lastMagnitude * currentMagnitude);
        // Clamp cosAngle to [-1, 1] to avoid Math.acos errors due to floating point precision
        const clampedCosAngle = Math.max(-1, Math.min(1, cosAngle));
        const angle = Math.acos(clampedCosAngle) * (180 / Math.PI);

        // Determine direction based on cross product
        const rotationChange = (crossProduct >= 0 ? angle : -angle) * 1.6;

        // Update rotation
        setRotation((prev) => prev + rotationChange);

        // Calculate velocity (degrees per millisecond)
        if (deltaTime > 0) {
            // Calculate instantaneous velocity
            const instantVelocity = rotationChange / deltaTime;

            // Increase the velocity multiplier from 24 to 30 for even more initial momentum
            velocityRef.current =
                velocityRef.current * 0.8 + instantVelocity * 0.2 * 30;

            // Update RPM during manual spinning too
            setRpm(Math.abs(velocityRef.current * 166.6667) / 100);
        }

        // Update last position for next move
        lastPositionRef.current = currentPosition;

        // Prevent default to avoid any browser drag behavior
        e.preventDefault();
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        if (isDraggingRef.current) {
            isDraggingRef.current = false;
            if (!isRunning && selectedTime == null && step == 2) {
                handlePlay();
            }
            // Start momentum animation if velocity is significant
            if (Math.abs(velocityRef.current) > 0.1) {
                setIsAnimating(true);
            } else {
                // If not enough velocity to continue spinning, reset RPM to 0
                setRpm(0);
            }

            // Prevent default to avoid any browser drag behavior
            e.preventDefault();
        }
    };

    // Touch event handlers (similar logic to mouse events)
    const handleTouchStart = (e: React.TouchEvent) => {
        if (!elementRef.current || e.touches.length !== 1) return;

        // Stop any ongoing momentum animation
        setIsAnimating(false);
        velocityRef.current = 0;

        // Reset RPM when user interacts with the spinner
        setRpm(0);

        isDraggingRef.current = true;
        lastTimeRef.current = performance.now();

        const touch = e.touches[0];
        const rect = elementRef.current.getBoundingClientRect();
        centerRef.current = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
        };

        lastPositionRef.current = {
            x: touch.clientX,
            y: touch.clientY,
        };

        // Prevent default to avoid any browser drag/scroll behavior
        e.preventDefault();
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDraggingRef.current || e.touches.length !== 1) return;

        const currentTime = performance.now();
        const deltaTime = currentTime - lastTimeRef.current;
        lastTimeRef.current = currentTime;

        const touch = e.touches[0];
        const center = centerRef.current;
        const currentPosition = { x: touch.clientX, y: touch.clientY };
        const lastPosition = lastPositionRef.current;

        // Calculate vectors from center to positions
        const lastVector = {
            x: lastPosition.x - center.x,
            y: lastPosition.y - center.y,
        };

        const currentVector = {
            x: currentPosition.x - center.x,
            y: currentPosition.y - center.y,
        };

        // Calculate the cross product to determine rotation direction
        const crossProduct =
            lastVector.x * currentVector.y - lastVector.y * currentVector.x;

        // Calculate the dot product to find the angle
        const dotProduct =
            lastVector.x * currentVector.x + lastVector.y * currentVector.y;

        // Calculate magnitudes of vectors
        const lastMagnitude = Math.sqrt(
            lastVector.x * lastVector.x + lastVector.y * lastVector.y
        );
        const currentMagnitude = Math.sqrt(
            currentVector.x * currentVector.x + currentVector.y * currentVector.y
        );

        // Calculate the angle between vectors (in radians)
        const cosAngle = dotProduct / (lastMagnitude * currentMagnitude);
        // Clamp cosAngle to [-1, 1] to avoid Math.acos errors due to floating point precision
        const clampedCosAngle = Math.max(-1, Math.min(1, cosAngle));
        const angle = Math.acos(clampedCosAngle) * (180 / Math.PI);

        // Determine direction based on cross product
        const rotationChange = crossProduct >= 0 ? angle : -angle;

        // Update rotation
        setRotation((prev) => prev + rotationChange);

        // Calculate velocity (degrees per millisecond)
        if (deltaTime > 0) {
            // Calculate instantaneous velocity
            const instantVelocity = rotationChange / deltaTime;

            // Increase the velocity multiplier from 24 to 30 for even more initial momentum
            velocityRef.current =
                velocityRef.current * 0.8 + instantVelocity * 0.2 * 30;

            // Update RPM during manual spinning too
            setRpm(Math.abs(velocityRef.current * 166.6667) / 100);
        }

        // Update last position for next move
        lastPositionRef.current = currentPosition;

        // Prevent default to avoid any browser drag/scroll behavior
        e.preventDefault();
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (isDraggingRef.current) {
            isDraggingRef.current = false;

            // Start momentum animation if velocity is significant
            if (Math.abs(velocityRef.current) > 0.1) {
                setIsAnimating(true);
            } else {
                // If not enough velocity to continue spinning, reset RPM to 0
                setRpm(0);
            }

            // Prevent default to avoid any browser drag/scroll behavior
            e.preventDefault();
        }
    };


    return (
        <div className="flex flex-col items-center pt-1 justify-center gap-3 md:gap-5 md:px-3 w-full">
            {step === 0 && (
                <ButtonWithBackground shouldAnimate onClick={() => setStep(1)} text="Play Web Leaderboard" bgColor borderColor borderWidth="3" font />
            )}
            {step === 1 && (
                <div className="flex flex-col items-center gap-2">
                    <div className="flex gap-3 font-normal">
                        {timeOptions.map((t, index) => (
                            <div className="flex flex-col gap-1.5 items-center" key={index}>
                                <div style={{ fontFamily: 'var(--font-comix-loud)' }}
                                    className={`cursor-pointer uppercase text-xs ${selectedTime === t ? 'text-[#FF842A] ' : 'text-white'}`}

                                    onClick={() => {
                                        setIsRunning(false)
                                        setSelectedTime(t)
                                    }}
                                >
                                    {t / 60 < 1 ? t : t / 60} {t / 60 < 1 ? "sec" : "min"}
                                </div>
                                {selectedTime && selectedTime == t && (
                                    <span className="text-xs font-normal text-[#393D48] uppercase"> selected</span>
                                )}
                            </div>
                        ))}

                    </div>
                    {selectedTime == null && (
                        <span className="text-xs font-normal text-[#393D48] uppercase"> select time</span>
                    )}
                </div>
            )}
            {step === 2 && (
                <div className="flex flex-col space-y-2 items-center ">

                    <div className="text-3xl font-bold text-white">{formatTime(isRunning ? remainingTime : selectedTime != null ? selectedTime * 1000 : 0)}</div>
                    {isRunning &&
                        <span className="text-base font-normal text-[#393D48]">
                            {Math.round(animatedRpm)} RPM
                        </span>
                    }

                </div>
            )}
            <div className="flex flex-col gap-2 items-center">

                <motion.img
                    ref={elementRef}
                    className="cursor-grab active:cursor-grabbing object-contain w-[280px] md:w-full max-w-[400px] md:object-cover "
                    style={{
                        rotate: `${rotation}deg`,
                        touchAction: 'none'
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    src={fidget}
                />
                <span className="text-base font-normal text-[#393D48]">
                    Swipe to spin
                </span>
            </div>
            <div >
                <div className="h-[40px] flex items-start justify-center">

                    {selectedTime && !isPlayPressed && (
                        <div style={{ fontFamily: 'var(--font-comix-loud)' }} className="cursor-pointer relative z-20 text-center uppercase text-white text-xs border border-[#FF842A] p-2.5 px-3 rounded-[10px]" onClick={() => { setStep(2); setIsPlayPressed(true) }}>Play!</div>
                    )}
                    {isPlayPressed && (
                        <div style={{ fontFamily: 'var(--font-comix-loud)' }} className="cursor-pointer relative z-20 text-center uppercase text-white text-xs border border-[#FF842A] p-2.5 px-3 rounded-[10px]" onClick={handleAnimationExit}>Exit!</div>
                    )}
                </div>
            </div>

        </div>
    );
}
