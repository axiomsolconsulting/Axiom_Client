"use client";
import React, { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Form from "./form";
import { socialMedia } from "../constants/constants";
import Thanks from "@/public/Thanks.svg";
import Email from "@/public/contact/Email.svg";
import Phone from "@/public/contact/Phone.svg";
import Location from "@/public/contact/Location.svg";

const Page = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleFormSuccess = () => {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <section className="bg-[#010b1d] text-white pt-28 xl:pt-48 px-4">
                <div className="custom-container mx-auto grid lg:grid-cols-2 gap-x-12 xl:gap-x-[100px] gap-y-10">
                    {isSubmitted ? (
                        <div className="custom-container flex flex-col items-center text-center col-span-2 mb-10">
                         <Image src={Thanks} alt="Thanks" className="w-1/2 xl:w-auto"></Image>
                            <h2 className="text-6xl md:text-8xl xl:text-[150px] leading-none font-bold">
                                Thank You<span className="text-[var(--Blue-Color)]">.</span>
                            </h2>
                            <h3 className="text-2xl md:text-3xl xl:text-[44px] xl:leading-[58px] font-semibold">We&apos;ve got your request.</h3>
                            <p className="text-base md:text-lg mb-4">Thanks for contacting us. Our team will reach out to you as soon as possible.</p>
                            <Link  href="/" className="bg-blue-500 text-white font-semibold py-4 px-8 rounded-md hover:bg-black hover:text-white transition-colors duration-300">
                                Back to Homepage
                            </Link>
                        </div>
                    ) : (
                        <>
                            {/* Left Column */}
                            <div className="order-2 lg:order-1 mb-6">
                                <h2 className="text-4xl md:text-[50px] lg:text-[70px] xl:text-[90px] leading-tight font-semibold mb-5">Lets Get in Touch</h2>
                                <div className="">
                                    <p className="text-[#7B8CA3] text-xl font-semibold mb-5">Meanwhile you can contact us at:</p>
                                    <div className="space-y-10">
                                        <a href="mailto:connect@axiomsolic.com" className="flex items-center gap-x-[20px] text-2xl font-medium text-white hover:text-blue-300 transition-colors">
                                            <Image src={Email} width={24} height={24} alt="Email Icon" />
                                            connect@axiomsolic.com
                                        </a>
                                        <a href="tel:+19095598113" className="flex items-center gap-x-[20px] text-2xl font-medium text-white hover:text-blue-300 transition-colors">
                                            <Image src={Phone} width={24} height={24} alt="Phone Icon" />
                                            +1 (909) 559-8113
                                        </a>
                                        <div className="flex items-center gap-x-[20px] text-2xl font-medium text-white hover:text-blue-300">
                                            <Image src={Location} width={24} height={24} alt="Location" />
                                            <span>
                                                2372 Morse Ave#968
                                                <br />
                                                Irvine, CA 92614
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4 mt-20">
                                    <p className="text-[#7B8CA3] font-semibold text-xl">Follow us on:</p>
                                    <div className="flex space-x-4">
                                        <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                            <Facebook className="text-gray-400 hover:text-[#1877F2] cursor-pointer" />
                                        </a>
                                        <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                            <Twitter className="text-gray-400 hover:text-[#1C9BE9] cursor-pointer" />
                                        </a>
                                        <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                            <Instagram className="text-gray-400 hover:text-[#B430D7] cursor-pointer" />
                                        </a>
                                        <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                            <Linkedin className="text-gray-400 hover:text-[#0270AD] cursor-pointer" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-8 order-1 lg:order-2">
                                <Form onFormSuccess={handleFormSuccess} />
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* 2nd Section Map +  Calendar */}
            <section className="py-[60pxs] xl:py-[120px]">
                <div className="custom-container mx-auto p-6 ">
                    {/* Wrapper for columns */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-x-10 gap-y-5">
                        {/* Left Column */}
                        <div className="space-y-6   max-w-lg">
                            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">Book Your Discovery Call Today</h2>
                            <p className="text-gray-700 text-base md:text-lg">Take the first step toward innovative, tailored tech solutions with Axiom. Schedule a discovery call with our team to discuss your business needs, goals, and challenges.</p>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6 w-full max-w-lg">
                            <h3 className="text-2xl font-bold text-gray-900">Where to Find Us?</h3>
                            <div className="rounded-lg overflow-hidden bg-gray-100 border border-gray-300 h-64 w-full">
                                {/* Embedded Google Map */}
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.9335074874345!2d-117.8491615!3d33.6814852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcde8dfbdf5d1b%3A0x83c90b8312321f84!2s2372%20Morse%20Ave%20%23968%2C%20Irvine%2C%20CA%2092614%2C%20USA!5e0!3m2!1sen!2sus!4v1698931200000!5m2!1sen!2sus" width="100%" height="100%" loading="lazy" style={{ border: 0 }} allowFullScreen aria-hidden="false"></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="calendly-inline-widget-container">
                    <div className="calendly-inline-widget flex flex-row" data-url="https://calendly.com/annibaba009/start-your-project-with-axiom" style={{ minWidth: "320px", height: "700px" }}></div>
                </div>
            </section>
        </>
    );
};

export default Page;
