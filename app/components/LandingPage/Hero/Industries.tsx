"use client";

import { useEffect, useRef } from "react";

const industries = [
    { name: "Healthcare", icon: "★" },
    { name: "Finance", icon: "❄" },
    { name: "Restaurant", icon: "♦" },
    { name: "Ecommerce", icon: "☀" },
    { name: "Logistic", icon: "■" },
    { name: "Game & Sport", icon: "❄" },
    { name: "Travel", icon: "♦" },
    { name: "Real Estate", icon: "★" },
];

export default function Industries() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollElement = scrollRef.current;
        if (scrollElement) {
            const scrollWidth = scrollElement.scrollWidth;
            const animationDuration = scrollWidth / 100; // Adjust speed here

            scrollElement.style.setProperty("--scroll-width", `${scrollWidth}px`);
            scrollElement.style.setProperty("--animation-duration", `${animationDuration}s`);
        }
    }, []);

    return (
        <div className="bg-gray-900 overflow-hidden">
            <div
                ref={scrollRef}
                className="whitespace-nowrap py-4 animate-scroll"
                style={{
                    animationDuration: "var(--animation-duration)",
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                }}>
                {[...industries, ...industries].map((industry, index) => (
                    <span key={index} className="inline-flex items-center mx-4">
                        <span className="text-white text-lg font-medium">{industry.name}</span>
                        <span className="text-blue-400 text-2xl mx-2">{industry.icon}</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
