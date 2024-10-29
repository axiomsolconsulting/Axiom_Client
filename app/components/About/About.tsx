import React from "react";
import Image from "next/image";
// import Image2 from "../../../../public/image-4.png";

const About = () => {
    return (
        <section className=" flex items-center  py-24">
            <div className="container mx-auto px-4  ">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-center">
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

                <div className="flex flex-col lg:flex-row items-center justify-center mt-12 gap-8">
                    {/* Left side: Image */}
                    <div className="relative ">
                        <img src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730137269/it-expert-updating-ai-systems_mzifnq.png" alt="Tech Image" className="w-[450px] h-[300px] sm:w-[650px] sm:h-[400px] lg:w-[650px] lg:h-[400px] rounded-3xl" />
                        <div className="absolute bottom-4 left-4 bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold flex items-center gap-1">
                                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span> Experience-Driven Solutions
                            </h3>
                            <p className="mt-2 text-base">
                                We leverage firsthand, insider experience <br /> for efficient, effective growth
                            </p>
                        </div>
                    </div>

                    {/* Right side: Stats */}
                    <div className="grid grid-cols-2  bg-blue-100 w-[450px] h-[300px] sm:w-[650px] sm:h-[400px] lg:w-[500px] lg:h-[400px] p-6 rounded-2xl shadow-md">
                        <div className="flex flex-col text-center justify-center   items-center gradient-border-bottom">
                            <p className="text-[56px] font-semibold text-black">
                                70K <span className="text-blue-600">+</span>
                            </p>
                            <p className="text-sm text-black font-medium">Years of Experience</p>
                        </div>
                        <div className="flex flex-col text-center justify-center  items-center gradient-border-bottom">
                            <p className="text-5xl font-semibold text-black">
                                140K <span className="text-blue-600">+</span>
                            </p>
                            <p className="text-sm text-black font-medium">Satisfied Clients</p>
                        </div>
                        <div className="flex flex-col text-center justify-center items-center">
                            <p className="text-5xl font-semibold text-black">
                                98.9 <span className="text-blue-600">%</span>
                            </p>
                            <p className="text-sm text-black font-medium">Satisfaction Rate</p>
                        </div>
                        <div className="flex flex-col text-center justify-center  items-center ">
                            <p className="text-5xl font-semibold text-black">
                                900M <span className="text-blue-600">+</span>
                            </p>
                            <p className="text-sm text-black font-medium">Candidate Database</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
