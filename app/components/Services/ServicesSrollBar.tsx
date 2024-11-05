"use client";
import React, { useState } from "react";
import  RightArrow  from "../../../public/RightArrow.svg"
import LeftArrow from "../../../public/LeftArrow.svg"
import Image from "next/image";

const services = ["Digital Solutions", "DevOps Solutions", "Mobile App Development", "Game Development", "Web Development", "Cybersecurity Service", "Cloud Solutions"];
const ServicesSrollBar = () => {
    const [activeService, setActiveService] = useState(0);

    const scrollLeft = () => {
        if (activeService > 0) setActiveService(activeService - 1);
    };

    const scrollRight = () => {
        if (activeService < services.length - 1) setActiveService(activeService + 1);
    };

    return (
        <>
            {/* Navigation Bar */}
            <div className="relative service-scrollbar-gradient py-7">
                <div className="max-w-7xl mx-auto px-4 flex items-center">
                    <button onClick={scrollLeft} className="p-2 hover:bg-blue-900/50 rounded-full transition-colors" aria-label="Scroll left">
                    <Image src={LeftArrow} alt="Left Arrow" className="w-6 h-6"></Image>
                    </button>

                    <div className="flex-1 overflow-hidden">
                        <div className="flex gap-8 transition-transform duration-300" style={{ transform: `translateX(-${activeService * 200}px)` }}>
                            {services.map((service, index) => (
                                <button key={service} onClick={() => setActiveService(index)} className={`text-white text-lg font-semibold  whitespace-nowrap px-4 py-2 rounded-md transition-colors ${index === activeService ? "text-blue-400" : "hover:text-blue-400"}`}>
                                    {service}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button onClick={scrollRight} className="p-2 hover:bg-blue-900/50 rounded-full transition-colors" aria-label="Scroll right">
                    <Image src={RightArrow} alt="Right Arrow" className="w-6 h-6"></Image>
                        
                    </button>
                </div>
            </div>
        </>
    );
};

export default ServicesSrollBar;
