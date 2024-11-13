"use client";
import React, {  useRef } from "react";
import RightArrow from "../../../public/RightArrow.svg";
import LeftArrow from "../../../public/LeftArrow.svg";
import Image from "next/image";
import { getLink } from "@/app/services/getLink";
import Link from "next/link";

const services = ["Digital Solutions", "DevOps Solutions", "Mobile App Development", "Game Development", "Web Development", "Cybersecurity Service", "Cloud Services"];
const ServicesSrollBar = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 200;
            const newScrollLeft = direction === "left" ? scrollContainerRef.current.scrollLeft - scrollAmount : scrollContainerRef.current.scrollLeft + scrollAmount;

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            {/* Navigation Bar */}
            <div className="relative service-scrollbar-gradient py-7">
                <div className="max-w-7xl mx-auto px-4 flex items-center">
                    <button  onClick={() => scroll("left")} className="p-2 hover:bg-blue-900/50 rounded-full transition-colors" aria-label="Scroll left">
                        <Image src={LeftArrow} alt="Left Arrow" className="w-6 h-6"></Image>
                    </button>

                    <div ref={scrollContainerRef} className="flex-1 overflow-hidden">
                        <div className="flex gap-8 transition-transform duration-300" >
                            {services.map((service, index) => (
                                <Link key={service} href={getLink(service)}  className={`text-white text-lg font-semibold  whitespace-nowrap px-4 py-2 rounded-md transition-colors `}>
                                    {service}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <button onClick={() => scroll("right")} className="p-2 hover:bg-blue-900/50 rounded-full transition-colors" aria-label="Scroll right">
                        <Image src={RightArrow} alt="Right Arrow" className="w-6 h-6"></Image>
                    </button>
                </div>
            </div>
        </>
    );
};

export default ServicesSrollBar;
