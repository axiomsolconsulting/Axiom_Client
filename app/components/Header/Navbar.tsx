import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 right-0 bg-transparent text-white  z-10">
            <nav className="flex items-center justify-between container px-5 mx-auto h-16">
                {/* 1 */}

                <Link href="/" className="text-2xl font-bold">
                    {/* <span className="text-purple-600">&#62;</span>  */}
                    <Image src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1728063186/Axiom_Logo_copy_n4y5vv.png" width={160} height={100} alt="Axiom Logo"></Image>
                    {/* <img src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1728063186/Axiom_Logo_copy_n4y5vv.png" width={160} height={100} alt='Axiom Logo' className="" /> */}
                </Link>
                {/* 2 */}
                <ul className="lg:flex items-center justify-between gap-x-7 hidden text-white">
                    <li className="">
                        <Link href="/services" className="hover:text-gray-300">
                            Services
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/about" className="hover:text-gray-300">
                            About
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/careers" className="hover:text-gray-300">
                            Careers
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/insights" className="hover:text-gray-300">
                            Insights
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/careers" className="hover:text-gray-300">
                            FAQs
                        </Link>
                    </li>
                </ul>
                {/* 3 */}
                <div className="flex items-center space-x-4">
                    <div className="md:flex items-center space-x-4 hidden">
                        {/* <button className="hover:text-gray-300"><Search className="w-5 h-5" /> </button> */}
                        <Link href="/contact" className="bg-white text-black font-semibold py-2 px-4 rounded-md hover:bg-[var(--Blue-Color)] hover:text-white hover:border border transition-colors duration-300">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </nav>
        </nav>
    );
};

export default Navbar;
