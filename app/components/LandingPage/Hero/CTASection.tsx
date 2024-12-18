import Image from "next/image";
import Link from "next/link";

export default function AxiomCTASection() {
    const services = [
        { name: "DIGITAL SOLUTIONS", percentage: 87 },
        { name: "WEB & APP DEVELOPMENT", percentage: 99 },
        { name: "DEVOPS SOLUTIONS", percentage: 90 },
        { name: "CYBERSECURITY SOLUTIONS", percentage: 80 },
        { name: "BUSINESS PROCESS ", percentage: 95 },
    ];
    return (
        <section className="bg-CTA py-16 lg:py-32 px-4 sm:px-6 lg:px-8">
            <div className="container px-4 mx-auto  ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
                    {/* Left Div */}
                    <div>
                        <h2 className=" text-4xl  xl:text-[44px] xl:leading-[60px] font-semibold text-gray-900 mb-10  md:pr-5">Discover Axiom: Your Gateway To Custom Software Solutions. Contact Us Today.</h2>
                        <p className="text-lg leading-[30px] text-[#454545] mb-10 md:pr-7">Experience the innovation of Axiom, where ideas become reality. Our custom software solutions are tailored to your needs, driving efficiency and success. Ready to transform your business? Contact us now.</p>
                        <Link href="/contact" className="bg-blue-500 text-white font-semibold py-4 px-8 rounded-md hover:bg-black hover:text-white transition-colors duration-300">
                            Book a Call
                        </Link>
                    </div>
                    {/* Right Div */}
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
                        <Image src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730202299/representation-user-experience-interface-design_ixjxo0.png" alt="Axiom software dashboard" layout="fill" objectFit="cover" className="" />
                    </div>
                </div>
            </div>

            {/* Desktop Stats */}
            <div className="container hidden text-xl text-black  mt-10 mx-auto lg:grid grid-cols-5 border-b  ">
                {services.map((service, index) => (
                    <div key={index} className="">
                        <div className={`px-4 min-h-[100px] flex flex-col justify-between pt-3 pb-8 gap-y-5 border-l  ${index === services.length - 1 ? 'border-r' : ''}`}>
                            <h3 className="font-bold text-base h-12">{service.name}</h3>
                            <p className="text-[32px] font-bold">{service.percentage}%</p>
                        </div>
                        <div className={`h-10 ${index % 2 === 0 ? "bg-[#D4E0FA]" : "bg-[#CDD9F3]"} relative overflow-hidden`}></div>
                        <div className={`h-[290px] ${index % 2 === 0 ? "bg-[#D4E0FA]" : "bg-[#CDD9F3]"} relative overflow-hidden`}>
                            <div className={`absolute bottom-0 left-0 rounded-tl-[20px] right-0 ${index % 2 === 0 ? "bg-[#1C85FF]" : "bg-[#16253A]"}`} style={{ height: `${(service.percentage / 100) * 290}px` }} />
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Mobile Stats */}
            <div className="container lg:hidden text-xl text-black  mt-10 mx-auto ">
                {services.map((service, index) => (
                    <div key={index} className={` ${index % 2 === 0 ? "bg-[#D4E0FA]" : "bg-[#CDD9F3]"} relative overflow-hidden `}>
                        <div className={` bottom-0 left-0 h-full right-0 rounded-r-full  ${index % 2 === 0 ? "bg-blue-500" : "bg-blue-900"}`} style={{ width: `${service.percentage}%` }}>
                            <div className="px-4 py-2 text-white">
                                <h3 className="font-bold text-base">{service.name}</h3>
                                <p className="text-2xl font-bold">{service.percentage}%</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
