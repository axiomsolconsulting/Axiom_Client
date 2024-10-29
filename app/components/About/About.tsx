import React from "react";
// import Image from "next/image";
// import Image2 from "../../../../public/image-4.png";

const About = () => {
    return (
        <section className=" flex items-center  py-24">
            <div className="container mx-auto px-4  ">
                {/* Top title Desciption */}
                <h2 className="text-xl md:text-3xl lg:text-[44px] lg:leading-[58px] font-medium leading-relaxed text-center">
                    At Axiom, we are a team
                    <span role="img" aria-label="team">
                        👨‍💻👩‍💻👨‍🔬
                    </span>{" "}
                    of passionate <br />
                    innovators, dedicated to revolutionizing industries <br />
                    through cutting-edge software solutions{" "}
                    <span role="img" aria-label="lightbulb">
                        💡
                    </span>
                </h2>
                
                {/* Picture + Stats */}
                {/* flex flex-col lg:flex-row items-center justify-center mt-12 gap-5 */}
               
                <div className=" grid grid-cols-1 lg:grid-cols-[60%_40%] gap-5 mt-8">
                    {/* Left side: Image */}
                    <div className="relative ">
                    {/* w-[450px] h-[300px] sm:w-[650px] sm:h-[400px] lg:w-[650px] lg:h-[400px] */}
                        <img src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730137269/it-expert-updating-ai-systems_mzifnq.png" alt="Tech Image" className=" rounded-3xl" />
                        <div className="absolute bottom-4 left-4 bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-md text-black">
                            <h3 className="text-xl font-semibold flex items-center gap-1">
                                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span> Experience-Driven Solutions
                            </h3>
                            <p className="mt-2 text-base ">
                                We leverage firsthand, insider experience <br /> for efficient, effective growth
                            </p>
                        </div>
                    </div>

                    {/* Right side: Stats */}
                    {/* w-[450px] h-[300px] sm:w-[650px] sm:h-[400px] lg:w-[500px] lg:h-[400px] */}
                    <div className="grid grid-cols-2  bg-blue-100  p-6 rounded-3xl shadow-md gap-5">
                        <div className="flex flex-col text-center justify-center   items-center">
                            <p className="text-4xl md:text-[56px] font-bold text-black">
                                70K<span className="text-[var(--Blue-Color)]">+</span>
                            </p>
                            <p className="text-base xl:text-lg text-black font-medium md:mt-2">Years of Experience</p>
                        </div>

                        <div className="flex flex-col text-center justify-center  items-center ">
                            <p className="text-4xl md:text-[56px]  font-bold text-black">
                                140K<span className="text-[var(--Blue-Color)]">+</span>
                            </p>
                            <p className="text-base xl:text-lg text-black font-medium md:mt-2">Satisfied Clients</p>
                        </div>
                        <div className="flex flex-col text-center justify-center items-center">
                            <p className="text-4xl md:text-[56px]  font-bold text-black">
                                98.9<span className="text-[var(--Blue-Color)]">%</span>
                            </p>
                            <p className="text-base xl:text-lg text-black font-medium md:mt-2">Satisfaction Rate</p>
                        </div>
                        <div className="flex flex-col text-center justify-center  items-center ">
                            <p className="text-4xl md:text-[56px] font-bold text-black">
                                900M<span className="text-[var(--Blue-Color)]">+</span>
                            </p>
                            <p className=" text-base xl:text-lg text-black font-medium md:mt-2">Candidate Database</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
