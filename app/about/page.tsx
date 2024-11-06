import Image from "next/image";
import Link from "next/link";
import AxiomValues from "../components/LandingPage/Hero/AxiomValues";
import Industries from "../components/LandingPage/Hero/Industries";
// import { Linkedin } from "lucide-react";
import Linkedin from "@/public/socialmedia/Linkedin.svg";
import Jobs from "../components/Jobs/Jobs";

export default function Page() {
    const Team = [
        {
            name: "Sal Mahmood",
            role: "CEO",
            image: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730725495/Sal-Mahmood-1_uusojr.jpg",
            linkedin: "https://www.linkedin.com/in/sal-mahmood-1a1b1b1b/",
        },
        {
            name: "Akmal Ahmed",
            role: "COO",
            image: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730725496/Akmal-Ahmed_ax3le8.jpg",
            linkedin: "https://www.linkedin.com/in/sal-mahmood-1a1b1b1b/",
        },
        {
            name: "Ammara Chaudhry",
            role: "Customer Relationship Manager",
            image: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730725499/Ammara-Chaudhry_mu3zzm.jpg",
            linkedin: "https://www.linkedin.com/in/sal-mahmood-1a1b1b1b/",
        },
        {
            name: "Riz Abid",
            role: "Talent Acquisition Lead",
            image: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730725498/Riz-Abid-1_ockdqo.jpg",
            linkedin: "https://www.linkedin.com/in/sal-mahmood-1a1b1b1b/",
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
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-y-5 items-center text-white px-3">
                    <h1 className="text-base font-medium text-center uppercase text-[var(--Blue-Color)]">About Us</h1>
                    <p className="text-center text-3xl md:text-6xl md:leading-[80px] font-medium max-w-[824px]">Your Partner in Technology and Innovation</p>
                    <p className="text-center text-lg md:text-xl md:leading-[32px] max-w-2xl"> We are more than just a tech solutions provider we are your strategic partner in innovation.</p>
                </div>
            </div>

            {/* Our Story */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[30px] gap-y-10 container mx-auto px-4 py-24">
                <div className="Left ">
                    <h3 className="text-[var(--Blue-Color)] uppercase font-medium ">Our Story</h3>
                    <h4 className="font-semibold text-[44px] text-[#1E1E1E] mt-1">Empowering Business Success</h4>
                    <h5 className="text-[26px] font-semibold text-[#1E1E1E] mt-2 max-w-xl">We aim to give businesses the best tools and resources to tackle unforeseen challenges and succeed in their industry.</h5>
                    <p className="text-[#454545] mt-3 mb-11 max-w-xl">Axiom Consulting launched in 2021 after the founding partners recognized a growing need for more effective management of large dispersed cross-functional teams to drive results for businesses and organizations. With Axiom by your side, you can feel confident in your ability to navigate any obstacle and come out on top.</p>
                    <div className="">
                        <Link href="/contact" className="bg-[var(--Blue-Color)] text-lg text-white font-medium  py-3 px-6 rounded-md hover:bg-[#011633] hover:text-white hover:border-red-500 transition-colors duration-300">
                            Work With Us
                        </Link>
                    </div>
                </div>
                <div className="Right w-full flex items-center ">
                  <Image src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730787467/About_Us_dzqwdx.png" alt="storyImage" width={600} height={600}  className="mx-auto rounded-3xl border-[3px] border-white  "></Image>
                    {/* <img className=" object-cover rounded-3xl border-[3px] border-white" src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730787467/About_Us_dzqwdx.png" alt="storyImage" /> */}
                </div>
            </div>

            {/* Values */}
            <AxiomValues className="gray-gradient" />

            {/* industries */}
            <Industries />

            {/* Team */}
            <section className="custom-container py-24">
                <h2 className="text-center text-[44px] font-semibold text-[#1E1E1E]">Meet Our Team</h2>
                <p className="text-center text-lg">Alone we can do so little, together we can do so much.</p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[30px] mt-[50px] mb-16">
                    {Team.map((member, index) => (
                        <div key={index} className="space-y-[30px]">
                            <div className="relative">
                                {/* <img src={member.image} alt={member.name} className="rounded-3xl" /> */}
                                <Image src={member.image} alt={member.name} width={500} height={300} className="rounded-3xl" />
                                <Link href={member.linkedin} className="absolute bottom-4 right-4">
                                    <Image src={Linkedin} alt="Right Arrow" className=""></Image>
                                </Link>

                                {/* <Linkedin className="w-6 h-6 text-[#007EBB] mx-auto mt-2" /> */}
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-[#1E1E1E] font-semibold text-[26px]">{member.name}</h3>
                                <p className="text-[#007EBB] text-lg">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <Jobs />
            </section>
        </>
    );
}
