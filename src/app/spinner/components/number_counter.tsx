'use client';
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import "./counter.css";

const NumberCounter = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true, // Run animation only once
    });

    const sizes = [
        { count: 50, title: "Unique style" },
        { count: 120, title: "Projects finiished" }, ,
        { count: 10, title: "Happy customers" },

    ];

    const [animatedCounts, setAnimatedCounts] = useState(
        sizes.map(() => 0) // Initialize all counts to 0
    );

    useEffect(() => {
        if (inView) {
            sizes.forEach((size, index) => {
                animateCounter(index, size!.count);
            });
        }
    }, [inView]); // Trigger when inView changes

    const animateCounter = (index: number, target: number) => {
        let start = 0;
        const duration = 1500; // Animation duration in ms
        const stepTime = 1000 / 60; // Approx. 60fps
        const increment = Math.ceil(target / (duration / stepTime));

        const updateCount = () => {
            start += increment;
            if (start >= target) {
                start = target;
            }
            setAnimatedCounts((prev) => {
                const updated = [...prev];
                updated[index] = start;
                return updated;
            });
            if (start < target) {
                requestAnimationFrame(updateCount);
            }
        };

        requestAnimationFrame(updateCount);
    };

    return (
        <div >
            <div >
                <div>

                    <div
                        ref={ref}
                        className="flex  items-center gap-4"
                    >
                        {sizes?.map((value, index) => (
                            <div
                                key={`sizes-${value?.title}`}
                                className="flex flex-col gap-1 text-left w-fit"
                            >
                                <div className={`text-xl lg:text-3xl text-accent text-center font-extrabold ${index == 1 ? "bg-[url('/button_bg.png')] bg-cover bg-center bg-clip-text text-transparent" : ""}`}
                                >
                                    {animatedCounts[index]}+
                                </div>
                                <span className="text-xs text-[15px] sm:text-base md:text-lg font-normal whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                                    {value?.title}
                                </span>
                            </div>
                        ))}                    </div>
                </div>
            </div>
        </div>
    );
};

export default NumberCounter;
