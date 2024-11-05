"use client";

import { useState } from "react";
import { Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, Dribbble, ChevronDown, Twitter } from "lucide-react";
import Email from "@/public/socialmedia/email.svg";
import Phone from "@/public/socialmedia/phone.svg";
import Location from "@/public/socialmedia/location.svg";
import Image from "next/image";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        help: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <section className="bg-[#010b1d] text-white pt-48 px-4">
            <div className="custom-container mx-auto grid md:grid-cols-2 gap-x-[280px]">
                {/* Left Column */}
                <div className="">
                    <h2 className="text-[90px] leading-[100px] font-semibold mb-5">
                        Lets Get in
                        <br />
                        Touch
                    </h2>

                    <div className="">
                        <p className="text-[#7B8CA3] text-xl font-semibold mb-5">Meanwhile you can contact us at:</p>
                        <div className="space-y-10">
                            <a href="mailto:connect@axiomsolic.com" className="flex items-center gap-x-[20px] text-2xl font-medium text-white hover:text-blue-300 transition-colors">
                                {/* <Mail className="w-5 h-5" /> */}
                                <Image src={Email}></Image>
                                connect@axiomsolic.com
                            </a>

                            <a href="tel:+19095598113" className="flex items-center gap-x-[20px] text-2xl font-medium text-white hover:text-blue-300 transition-colors">
                                {/* <Phone className="w-5 h-5" /> */}
                                <Image src={Phone}></Image>
                                +1 (909) 559-8113
                            </a>

                            <div className="flex items-center gap-x-[20px] text-2xl font-medium text-white hover:text-blue-300">
                                {/* <MapPin className="w-5 h-5 flex-shrink-0" /> */}
                                <Image src={Location}></Image>
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
                            <a href={"socialMedia.facebook"} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <Facebook className="text-gray-400 hover:text-[#1877F2] cursor-pointer" />
                            </a>
                            <a href={"socialMedia.twitter"} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <Twitter className="text-gray-400  hover:text-[#1C9BE9] cursor-pointer" />
                            </a>
                            <a href={"socialMedia.instagram"} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Instagram className="text-gray-400  hover:text-[#B430D7] cursor-pointer" />
                            </a>
                            <a href={"socialMedia.linkedin"} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin className="text-gray-400 hover:text-[#0270AD] cursor-pointer" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            We will be happy to tell you more about what <span className="text-blue-400 italic">WE CAN DO</span> for you
                        </h2>
                        <p className="text-gray-400">We'd love to connect with you and learn more about what we can build together. Tell us a few details and we'll be in touch.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm">
                                    Your Name*
                                </label>
                                <input id="name" type="text" className="w-full px-3 py-2 bg-[#011330] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm">
                                    Email*
                                </label>
                                <input id="email" type="email" className="w-full px-3 py-2 bg-[#011330] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm">
                                    Phone*
                                </label>
                                <input id="phone" type="tel" className="w-full px-3 py-2 bg-[#011330] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm">
                                    Company
                                </label>
                                <input id="company" type="text" className="w-full px-3 py-2 bg-[#011330] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="help" className="text-sm">
                                How Can we Help
                            </label>
                            <div className="relative">
                                <select id="help" className="w-full px-3 py-2 bg-[#011330] border border-gray-700 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.help} onChange={(e) => setFormData({ ...formData, help: e.target.value })}>
                                    <option value="">Select a service</option>
                                    <option value="web">Web Development</option>
                                    <option value="mobile">Mobile Development</option>
                                    <option value="cloud">Cloud Solutions</option>
                                    <option value="consulting">Consulting</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm">
                                Your Message
                            </label>
                            <textarea id="message" className="w-full px-3 py-2 bg-[#011330] border border-gray-700 rounded-md min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                        </div>

                        <button type="submit" className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
