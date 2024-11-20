"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const industries = [
    { name: "Healthcare", icon: "/industries/star.png" },
    { name: "Finance", icon: "/industries/startic.png" },
    { name: "Restaurant", icon: "/industries/Frame_2.png" },
    { name: "Ecommerce", icon: "/industries/Frame_3.png" },
    { name: "Logistic", icon: "/industries/Frame_4.png" },
    { name: "Game & Sport", icon: "/industries/Frame_5.png" },
    { name: "Travel", icon: "/industries/Frame_6.png" },
    { name: "Real Estate", icon: "/industries/Frame_7.png" },
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
        <div className="bg-gray-900 overflow-hidden h-[100px] flex items-center">
            <div
                ref={scrollRef}
                className="whitespace-nowrap py-4 animate-scroll "
                style={{
                    animationDuration: "var(--animation-duration)",
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                }}>
                {[...industries, ...industries].map((industry, index) => (
                    <span key={index} className="inline-flex items-center">
                        <span className="text-white text-3xl font-medium">{industry.name}</span>
                        {/* <span className="text-blue-400 text-3xl mx-2">{industry.icon}</span> */}
                        <Image src={industry.icon} width={36} height={36} alt={industry.name} className="mx-6" />
                    </span>
                ))}
            </div>
        </div>
    );
}
