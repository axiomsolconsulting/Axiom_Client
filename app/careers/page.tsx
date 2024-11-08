import Image from "next/image";
import Link from "next/link";
import JobCareer from "./JobCareers";
import Competitive from "@/public/careers/Competitive Base Salary.svg";
import Flexible from "@/public/careers/Flexible Working Hours.svg";
import Remote from "@/public/careers/Remote Work.svg";
import Training from "@/public/careers/Trainings & Certifications.svg";
import Health from "@/public/careers/Health Insurance.svg";
import Loyalty from "@/public/careers/Loyalty Rewards.svg";
export default function Page() {
    const benefits = [
        {
            title: "Competitive Base Salary",
            description: "We understand that great work deserves great rewards. That's why we offer a highly competitive salary package that reflects your skills.",
            icon: Competitive,
        },
        {
            title: "Flexible Working Hours",
            description: "With flexible working hours, you can manage your professional and personal responsibilities with ease.",
            icon: Flexible,
        },
        {
            title: "Remote Work",
            description: "Wherever you are, you're part of the team. We offer remote work options that allow you to work from the location that inspires you.",
            icon: Remote,
        },
        {
            title: "Trainings & Certifications",
            description: "Technology and innovation never stand still, and neither do we. we're always committed to your professional development.",
            icon: Training,
        },
        {
            title: "Health Insurance",
            description: "Your health and wellness are essential to us. Our comprehensive health insurance plans provide coverage for you and your family.",
            icon: Health,
        },
        {
            title: "Loyalty Rewards",
            description: "We offer loyalty rewards that reflect our appreciation for your commitment to Axiom and your ongoing impact on our success.",
            icon: Loyalty,
        },
    ];
    return (
        <>
            {/* Hero Section */}
            <div className="relative ">
                <div className="bg-black ">
                    {/* <img className="max-h-[650px] w-full object-cover" src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730768650/Rectangle_27_1_gekqzm.png" alt="" /> */}
                    <Image src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730768650/Rectangle_27_1_gekqzm.png" alt="About Picture" width={1920} height={650} className="min-h-[450px] md:in-h-[650px] max-h-[650px] w-full object-fill" />
                    {/* <Image src={contactHero.src} alt="logo" width={120} height={400} layout="responsive" /> */}
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white px-3">
                    <h1 className="text-base font-medium text-center uppercase text-[var(--Blue-Color)]">Careers</h1>
                    <p className="text-center text-3xl md:text-6xl md:leading-[80px] font-semibold max-w-[884px] mt-[10px] mb-[20px]">Advance Your Career and grow Alongside the Best Talent </p>
                    <p className="text-center text-lg md:text-xl md:leading-[32px] max-w-2xl"> We&apos;re committed to helping you expand your skills, achieve your goals, and unlock your full potential.</p>
                </div>
            </div>

            {/* Starting Content */}
            <div className=" text-center mt-[100px]">
                <h3 className="text-6xl text-[#1E1E1E] ">Join a Team Who Loves What They Do</h3>
                <p className="Text-[#454545] text-lg mt-[20px] mb-[50px] max-w-4xl mx-auto px-4">At Axiom, passion fuels our work. We&apos;re a team of thinkers creators and innovators who love what we do—and it shows. Here, you&apos;ll find a collaborative environment where creativity thrives, diverse perspectives are valued, and enthusiasm drives us forward.</p>
                <Link href="/" className="bg-[var(--Blue-Color)] text-lg text-white font-medium py-5 px-6 rounded-md hover:bg-[#011633] transition-colors duration-300">
                    Explore Opportunities
                </Link>
            </div>

            {/* Pictures */}
            <div className="mt-10 lg:mt-[120px]">
                <Image src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730967494/Frame_34714_1_vopxqv.png" alt="" width={2400} height={1200}></Image>
            </div>
            {/* Offering */}
            <section className="py-16 px-4">
                <div className="custom-container mx-auto">
                    <h2 className="text-[44px] font-semibold text-center mb-12">Axiom: A Great Place to Grow</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="p-6 bg-white rounded-[20px] border border-[#E7EAF2] hover:shadow-2xl duration-200 transition-shadow">
                                <div className="flex gap-4">
                                    
                                    <div className="flex-shrink-0"><Image src={benefit.icon} alt={benefit.title} className=""></Image></div>
                                    <div>
                                        <h3 className="text-2xl text-[#1C2539] font-semibold mb-5">{benefit.title}</h3>
                                        <p className="text-[#304874] text-lg">{benefit.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Careeers */}
            <JobCareer />
        </>
    );
}
