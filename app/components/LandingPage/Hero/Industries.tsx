"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const industries = [
    { name: "Healthcare", icon: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730201821/Frame_1_uvdfjy.png" },
    { name: "Finance", icon: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730201818/Frame_wuebn2.png" },
    { name: "Restaurant", icon: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730201820/Frame_2_k20t6a.png" },
    { name: "Ecommerce", icon: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730201823/Frame_3_j3il3p.png" },
    { name: "Logistic", icon: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730201824/Frame_4_rc4pjk.png" },
    { name: "Game & Sport", icon: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730201835/Frame_5_qgwd50.png" },
    { name: "Travel", icon: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730201820/Frame_2_k20t6a.png" },
    { name: "Real Estate", icon: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730201821/Frame_1_uvdfjy.png" },
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
