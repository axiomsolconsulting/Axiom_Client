import React from "react";
// import Image from "next/image";
// import Image2 from "../../../../public/image-4.png";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Image from "next/image";
import image1 from "../../../public/image3.png";
import image2 from "../../../public/image2.png";
import image3 from "../../../public/image1.png";
import bulb from "../../../public/bulb.png";

const people = [
    {
        id: 1,
        name: "Sal Mahmood",
        designation: "",
        image: image1,
    },
    {
        id: 2,
        name: "Ammara Chaudhry",
        designation: "",
        image: image2,
    },
    {
        id: 3,
        name: "Akmal Ahmed",
        designation: "",
        image: image3,
    },
];

const About = () => {
    return (
        <section id="About" className=" flex items-center py-[60px] xl:py-[120px]">
            <div className="container mx-auto px-4 ">
                {/* Top title Desciption */}
                <h2 className="text-xl md:text-3xl lg:text-[44px] lg:leading-[58px] font-medium leading-relaxed text-center">
                    At Axiom, we are a team
                    <br className="block md:hidden" />
                    <span className="inline-flex mr-7 ml-3  items-center">
                        <AnimatedTooltip items={people} />
                    </span>
                    <br className="block md:hidden" />
                    of passionate <br />
                    innovators, dedicated to revolutionizing industries <br />
                    through cutting-edge software solutions
                    <span>
                        <Image src={bulb} alt="lightbulb" width={70} height={70} className="inline" />
                    </span>
                </h2>

                {/* Picture + Stats */}
                {/* flex flex-col lg:flex-row items-center justify-center mt-12 gap-5 */}

                <div className="lg:flex gap-x-5 space-y-5 lg:space-y-0 mt-8">
                    {/* Left side: Image */}
                    <div className="relative lg:w-[60%]">
                        <img src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730137269/it-expert-updating-ai-systems_mzifnq.png" alt="Tech Image" className="rounded-3xl w-full h-auto" />
                        <div className="absolute bottom-4 left-4 w-full max-w-xs sm:max-w-sm lg:max-w-md bg-white/80 border border-gray-300 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg text-black">
                            <h3 className="text-base sm:text-lg lg:text-xl font-semibold flex items-center gap-2">
                                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                                Experience-Driven Solutions
                            </h3>
                            <p className="mt-2 text-xs sm:text-sm lg:text-base">
                                We leverage firsthand, insider experience <br /> for efficient, effective growth.
                            </p>
                        </div>
                    </div>

                    {/* Right side: Stats */}
                    {/* w-[450px] h-[300px] sm:w-[650px] sm:h-[400px] lg:w-[500px] lg:h-[400px] */}
                    <div className="grid grid-cols-2 lg:w-[40%] bg-[#E5EBF8]  py-6 px-1 rounded-3xl shadow-md gap-5 relative ">
                        <div className="flex flex-col text-center justify-center   items-center ">
                            <p className="text-4xl md:text-5xl xl:text-[56px] font-bold text-black">
                                70K<span className="text-[var(--Blue-Color)]">+</span>
                            </p>
                            <p className="text-base xl:text-lg text-black font-medium md:mt-2">Years of Experience</p>
                        </div>

                        <div className="flex flex-col text-center justify-center  items-center ">
                            <p className="text-4xl md:text-5xl xl:text-[56px]  font-bold text-black">
                                140K<span className="text-[var(--Blue-Color)]">+</span>
                            </p>
                            <p className="text-base xl:text-lg text-black font-medium md:mt-2">Satisfied Clients</p>
                        </div>
                        <div className="flex flex-col text-center justify-center items-center">
                            <p className="text-4xl md:text-5xl xl:text-[56px]  font-bold text-black">
                                98.9<span className="text-[var(--Blue-Color)]">%</span>
                            </p>
                            <p className="text-base xl:text-lg text-black font-medium md:mt-2">Satisfaction Rate</p>
                        </div>
                        <div className="flex flex-col text-center justify-center  items-center ">
                            <p className="text-4xl md:text-5xl xl:text-[56px] font-bold text-black">
                                900M<span className="text-[var(--Blue-Color)]">+</span>
                            </p>
                            <p className=" text-base xl:text-lg text-black font-medium md:mt-2">Candidate Database</p>
                        </div>
                        {/* Vertical divider */}
                        <div className="absolute inset-0 flex justify-center py-8">
                            <div className="w-[1px] h-full stats-grandient-line "></div>
                        </div>

                        {/* Horizontal divider */}
                        <div className="absolute inset-0 flex items-center px-4">
                            <div className="w-full h-[1px] stats-grandient-line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
