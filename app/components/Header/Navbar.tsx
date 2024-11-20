"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation"; // Import usePathname
import { getLink } from "@/app/services/getLink";

const Navbar = () => {
    const navRef = useRef<HTMLDivElement>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const pathname = usePathname(); // Get current route

    // Define allowed routes, including the '/services' base route
    const allowedRoutes = [
        // "/services",
        "/about",
        "/careers",
        "/insights",
        "/",
        "/contact",
        "/",
        // '/privacy-policy',
        // '/terms-and-conditions',
    ];

    // Check if the current route is allowed or starts with '/services'
    const Light = allowedRoutes.includes(pathname) || pathname.startsWith("/services");

    const Navbar = [
        { name: "Services", link: "/services", subNavbar: ["Digital Solutions","Web Development", "Mobile App Development", "DevOps Solution", "Game Development (AR & VR)"] },
        { name: "About", link: "/about" },
        { name: "Careers", link: "/careers" },
        { name: "Insights", link: "/insights" },
        { name: "FAQs", link: "/faq" },
    ];

    const handleClickOutside = (event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setIsMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);


    const toggleSubMenu = (index : number  ) => {
        setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
    };
    return (
        <>
            {/* Desktop Navbar */}
            <nav className="absolute top-0 left-0 right-0 bg-transparent text-white z-10">
                <div className="flex items-center justify-between container px-5 mx-auto h-20">
                    <Link href="/" className="text-2xl font-bold">
                        <Image src={Light ? "https://res.cloudinary.com/ddmanxpsb/image/upload/v1731071967/Group_1018_1_aee90q.png" : "https://res.cloudinary.com/ddmanxpsb/image/upload/v1731071968/Group_1018_1_1_trvhrh.png"} width={155} height={38} alt="Axiom Logo" />
                    </Link>
                    <ul className={`lg:flex items-center justify-between gap-x-7 hidden text-lg font-medium ${Light ? "text-white" : "text-black"}`}>
                        {Navbar.map((item, index) => (
                            <li key={index}>
                                <Link href={item.link} className={`hover:text-gray-300 py-2 ${pathname === item.link ? "border-b-2 border-[#1C85FF]" : ""}`}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center space-x-4">
                        <div className="md:flex items-center space-x-4 hidden">
                            <Link href="/contact" className={`py-2 px-6 text-lg font-medium ${Light ? "animated-border bg-transparent" : " bg-[var(--Blue-Color)] rounded-[6px] hover:bg-[#011633] duration-300"}`}>
                                Book a Call
                            </Link>
                        </div>
                        <button aria-label="Mobile Menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`lg:hidden transition duration-300 ${Light ? "text-white" : "text-black"}`}>
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navbar */}
            {isMobileMenuOpen && (
                <div ref={navRef} className={`lg:hidden flex flex-col justify-between ${Light ? "bg-white" : "bg-gradient"} absolute top-20 left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out z-20 ${isMobileMenuOpen ? "screen-minus-80 opacity-100 visible" : "h-0 opacity-0 invisible"}`}>
                    <nav className={`container mx-auto  py-4 flex flex-col ${Light ? "text-black" : "text-white"} divide-y-[1px]`}>
                        {Navbar.map((item, index) => (
                            <div key={index}>
                                <Link
                                    href={item.link}
                                    onClick={() => {
                                        if (item.subNavbar) {
                                            toggleSubMenu(index);
                                        } else {
                                            setIsMobileMenuOpen(false);
                                        }
                                    }}
                                    className="hover:bg-gray-100 py-4 text-xl font-medium flex justify-between items-center px-5">
                                    {item.name}
                                    {item.subNavbar && <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openSubMenuIndex === index ? "rotate-180" : ""}`} />}
                                </Link>
                                {item.subNavbar && openSubMenuIndex === index && (
                                    <div className="w-full  hover:text-gray-300 pb-4 text-base  ">
                                        {item.subNavbar.map((subItem, subIndex) => (
                                            <Link href={getLink(subItem)} key={subIndex} onClick={() => setIsMobileMenuOpen(false)} className="inline-block   w-full pl-8 pr-4 py-4 text-left hover:bg-gray-100 text-gray-700">
                                                {subItem}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                    <div className="flex items-center px-4 justify-between py-4 border-t">
                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/contact" className={`w-full text-xl font-medium text-center px-6 py-5 ${Light ? "rounded-lg hover:bg-[#011633] bg-[var(--Blue-Color)] text-white" : "rounded-lg text-black bg-white hover:bg-[var(--Blue-Color)] hover:text-white"} hover:border border transition-colors duration-300`}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
