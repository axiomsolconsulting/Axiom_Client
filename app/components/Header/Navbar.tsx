"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation"; // Import usePathname


const Navbar = () => {
    const navRef = useRef<HTMLDivElement>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const pathname = usePathname(); // Get current route
    
    // Define allowed routes, including the '/services' base route
    const allowedRoutes = [
        "/services", 
        "/about", 
        "/careers", 
        "/insights", 
        "/", 
        "/contact",
        "/faq"
    ];

    // Check if the current route is allowed or starts with '/services'
    const Light = allowedRoutes.includes(pathname) || pathname.startsWith("/services");

    const Navbar = [
        { name: "Services", link: "/services" },
        { name: "About", link: "/about" },
        { name: "Careers", link: "/careers" },
        { name: "Insights", link: "/insights" },
        { name: "FAQs", link: "/faq" }
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

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="absolute top-0 left-0 right-0 bg-transparent text-white z-10">
                <div className="flex items-center justify-between container px-5 mx-auto h-20">
                    <Link href="/" className="text-2xl font-bold">
                        <Image
                            src={Light 
                                ? "https://res.cloudinary.com/ddmanxpsb/image/upload/v1731071967/Group_1018_1_aee90q.png" 
                                : "https://res.cloudinary.com/ddmanxpsb/image/upload/v1731071968/Group_1018_1_1_trvhrh.png"}
                            width={155} 
                            height={38} 
                            alt="Axiom Logo"
                        />
                    </Link>
                    <ul className={`lg:flex items-center justify-between gap-x-7 hidden text-lg font-medium ${Light ? 'text-white' : 'text-black'}`}>
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
                            <Link href="/contact" className={`py-2 px-6 text-lg font-medium ${Light ? 'animated-border bg-transparent' : ' bg-[var(--Blue-Color)] rounded-[6px] hover:bg-[#011633] duration-300'}`}>
                                Book a Call
                            </Link>
                        </div>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`lg:hidden transition duration-300 ${Light ? 'text-white' : 'text-black'}`}>
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navbar */}
            <div ref={navRef} className={`lg:hidden bg-gradient absolute top-16 left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out z-20 ${isMobileMenuOpen ? "max-h-fit opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}>
                <nav className="container mx-auto px-5 py-4 flex flex-col text-white">
                    {Navbar.map((item, index) => (
                        <Link key={index} href={item.link} className="hover:text-gray-300 py-2">
                            {item.name}
                        </Link>
                    ))}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                        <Link href="/contact" className="bg-white text-black font-semibold py-2 px-4 rounded-full hover:bg-[var(--Blue-Color)] hover:text-white hover:border border transition-colors duration-300">
                            Contact Us
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;




