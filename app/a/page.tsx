import React from "react";
import Image from "next/image";
import Thanks from "@/public/Thanks.svg";
import Link from "next/link";

const Page = () => {
    return (
        <div className="mt-[167px]">
            <div className="custom-container flex flex-col items-center text-center">
                <Image src={Thanks} alt="Thanks" className="w-1/2 xl:w-auto"></Image>
                <h2 className="text-8xl xl:text-[150px] leading-none font-bold ">
                    Thank You<span className="text-[var(--Blue-Color)]">.</span>
                </h2>
                <h3 className="text-3xl xl:text-[44px] leading-[58px] font-semibold">We’ve got your request.</h3>
                <p className="text-[#454545] text-lg mb-[30px]">Thanks for contacting us. Our team will reach out to you as soon as possible.</p>
                <Link href="/careers" className="bg-blue-500 text-white font-semibold py-4 px-8 rounded-md hover:bg-black hover:text-white transition-colors duration-300">
                    Back to Careres
                </Link>
            </div>
        </div>
    );
};

export default Page;
