// import { Eye, Rocket } from "lucide-react";
import Image from "next/image";

export default function AxiomValues() {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-[var(--Blue-Color)] text-sm font-semibold tracking-wide uppercase text-center mb-4">AXIOM&apos;S VALUES</h2>
                <h3 className="text-3xl sm:text-[44px] sm:leading-[60px] font-semibold text-center mb-4 max-w-4xl mx-auto text-black">Provides Custom Software For Optimized Processes, Innovation, and Growth.</h3>
                <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto text-lg leading-[30px]">At the heart of our mission lies a dedication to excellence, integrity, and collaboration. By upholding the highest standards in all our endeavors, we foster a culture of trust and innovation. Our relentless pursuit of customer satisfaction drives us to deliver transformative solutions, while our commitment to teamwork ensures seamless collaboration both internally and with our valued clients.</p>

                {/* Card Box */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Left Card */}
                    {/* <Card title="Axiom's Vision" subtitle="Transforming businesses with digital solutions." description="" icon={} className="bg-blue-600 text-white" /> */}
                    <div className={`rounded-lg p-9 max-w-[460px] bg-[--Blue-Color] text-white space-y-5`}>
                        <div className="">
                            <Image src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730187544/_%C3%83_%C3%83_%C3%83_%C3%83__1_txjnej.png" width={78} height={65} alt=""></Image>
                        </div>
                        <h4 className="text-4xl font-bold">Axiom&apos;s Vision</h4>
                        <p className="font-semibold text-[22px] leading-[34px]">Transforming businesses with digital solutions.</p>
                        <p className="text-sm text-[var(--Gray-Color)] text-[18px] leading-[30px]">To be the foremost innovator, revolutionizing industries with groundbreaking software solutions that drive efficiency, agility, and sustainable growth on a global scale.</p>
                    </div>

                    {/* <div className="relative w-48 h-48">
                        <div className="absolute inset-0 bg-gray-100 rounded-full"></div>
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="48" fill="none" stroke="#3B82F6" strokeWidth="4" strokeDasharray="301.59 301.59" strokeDashoffset="150.795" transform="rotate(-90 50 50)" />
                            <circle cx="50" cy="50" r="48" fill="none" stroke="#1E3A8A" strokeWidth="4" strokeDasharray="301.59 301.59" strokeDashoffset="-150.795" transform="rotate(-90 50 50)" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="w-24 h-24 text-blue-900" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                    </div> */}

                    {/* Center Rotating Arrows + Logo */}
                    <div className="relative w-full max-w-lg mx-auto">
                        <div className="relative mx-auto">
                            <Image src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730201398/Group_442_ygdafq.png" width={450} height={450} className="rotate-90 lg:rotate-0 duration-300 mx-auto" alt="" />
                            <Image src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730201032/Group_19_tfcrlo.png" width={100} height={200} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />
                        </div>
                    </div>
                    {/* Right Card */}
                    <div className={`rounded-lg p-9 max-w-[460px] bg-gradient text-white space-y-5`}>
                        <div className="">
                            <Image src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730187550/Group_20_iudc3e.png" width={71} height={71} alt=""></Image>
                        </div>
                        <h4 className="text-4xl font-bold ">Axiom&apos;s Mission</h4>
                        <p className="font-semibold text-[22px] leading-[34px]">Driving digital innovation for thriving businesses</p>
                        <p className="text-sm text-[var(--Gray-Color)] text-[18px] leading-[30px]">To engineer innovative software solutions that redefine industry standards, empower businesses to thrive, and drive sustainable growth in a dynamic digital world.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
