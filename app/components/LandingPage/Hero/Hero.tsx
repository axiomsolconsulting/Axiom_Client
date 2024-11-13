import React from "react";
import Link from "next/link";
// import { ChevronDown } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative min-h-[650px] h-svh flex items-center justify-center overflow-hidden ">
            {/* Particle effect background */}
            <div className="absolute top-0 left-0 w-full h-full ">
                <video src="https://res.cloudinary.com/ddmanxpsb/video/upload/v1730133449/covervideo_mxojrk.mov" loop autoPlay muted className="w-full h-full object-cover"></video>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent opacity-85"></div>
            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl sm:text-5xl md:text-[86px] md:leading-[92px] font-semibold text-white mb-10 ">
                    Revolutionize Your
                    <br />
                    Operations with Axiom
                </h1>
                <p className="text-[22px] leading-[36px] text-gray-300 max-w-3xl mb-10  mx-auto">Axiom is your strategic partner, delivering tailored tech solutions to boost efficiency, foster innovation, and drive long-term success.</p>
                <Link href="/contact" className="bg-[var(--Blue-Color)] text-lg text-white font-medium py-4 px-8 rounded-md hover:bg-white hover:text-black transition-colors duration-300">
                    Book a Call
                </Link>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-center">
                <p className="text-sm mb-2">Scroll to Explore</p>
                <Link href="#About">
                    <Image src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730135026/Group_4_1_fpbhf3.png" width={72} height={72} alt="Axiom Logo" className="mx-auto"></Image>
                </Link>
            </div>
        </section>
    );
};

export default Hero;
