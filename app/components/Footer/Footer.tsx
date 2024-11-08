// import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Youtube, Dribbble } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { socialMedia } from "@/app/constants/constants";
export default function Footer() {
    const navlist = [
        {
            title: "Services",
            link: "/services",
        },
        {
            title: "About",
            link: "/about",
        },
        {
            title: "Careers",
            link: "/careers",
        },
        {
            title: "Insights",
            link: "/insights",
        },
        {
            title: "Contact",
            link: "/contact",
        },
        {
            title: "FAQs",
            link: "/faq",
        },
    ];
    return (
        <footer className="bg-gradient text-white pt-[60px] lg:pt-[80px] pb-[30px] ">
            <div className="container px-4 mx-auto">
                {/* Call to Action Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14 gap-5 flex-wrap">
                    <div>
                        <h2 className="text-3xl sm:text-[56px] leading-none font-semibold mb-6">
                            Ready To Work, <span className="border-b-4 italic">Let&apos;s Chat</span>
                        </h2>
                        <p className="text-gray-300 mb-6 md:mb-0 text-[20px]">Let&apos;s take your project to new heights, reach out and see how we can help you.</p>
                    </div>
                    <Link href="/contact" className="bg-blue-500  font-semibold py-4 px-8 rounded-md hover:bg-white hover:text-black transition-colors duration-300">
                        Book a Call
                    </Link>
                </div>

                {/* Main Footer Content */}
                <div className="bg-[var(--Blue-Color)] rounded-[20px] p-8">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-24">
                        {/* Logo */}
                        <Link href="/" className="text-2xl font-bold">
                            <Image src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730128712/axiom-logo-white_2_1_y8ykgw.png" width={191} height={56} alt="Axiom White Logo"></Image>
                        </Link>
                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <Link href={socialMedia.facebook} aria-label="Facebook" className="text-white hover:text-gray-200 transition-colors">
                                <Facebook size={26} />
                            </Link>
                            <Link href={socialMedia.instagram} aria-label="Instagram" className="text-white hover:text-gray-200 transition-colors">
                                <Instagram size={26} />
                            </Link>
                            <Link href={socialMedia.linkedin} aria-label="Linkedin" className="text-white hover:text-gray-200 transition-colors">
                                <Linkedin size={26} />
                            </Link>
                            <Link href={socialMedia.youtube} aria-label="Youtube" className="text-white hover:text-gray-200 transition-colors">
                                <Youtube size={26} />
                            </Link>
                            <Link href={socialMedia.facebook} aria-label="Dribbble" className="text-white hover:text-gray-200 transition-colors">
                                <Dribbble size={26} />
                            </Link>
                        </div>
                    </div>
                    <hr className="mt-3 mb-8 bg-[#479CFF] h-[1px] border-0" />

                    {/* Footer Nav Menu */}
                    <div className="flex flex-wrap  justify-between gap-y-3  text-[20px]">
                        <div className="flex flex-wrap justify-center gap-4 mx-auto md:mx-0">
                            {navlist.map((item, index) => (
                                <Link key={index} href={item.link} className=" hover:underline">
                                    {item.title}
                                </Link>
                            ))}
                        </div>

                        <div className="flex mx-auto md:mx-0 ">
                            {["Terms", "Privacy Policy"].map((item) => (
                                <a key={item} href="#" className="ml-6 mb-2 hover:underline">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-center">Copyright © 2024 Axiom. All Rights Reserved.</p>
                    <p className="mt-2 md:mt-0 text-center ">Agency Partner Interactive | Web Design & Development Agency</p>
                </div>
            </div>
        </footer>
    );
}
