import Image from "next/image";
import Link from "next/link";
import ServicesSrollBar from "../components/Services/ServicesSrollBar";
import { backendUrl } from "../components/constants/constants";
import axios from "axios";
import RightArrow from "@/public/RightArrow.svg";
import WhyWorkWithUs from "../components/Services/WhyWorkWithUs";

const stats = [
    { value: "70K+", label: "Years of Experience" },
    { value: "140K+", label: "Satisfied Clients" },
    { value: "98.9%", label: "Satisfaction Rate" },
    { value: "900M+", label: "Candidate Database" },
];
// const services = [
//     {
//         title: "Digital Solutions",
//         id: "web",
//         link: "/services/web-development",
//         description: "Our Digital Solutions are designed to empower your business in the digital age. From scalable platforms to seamless applications, we create solutions that drive engagement, streamline operations, and enhance user experience. Our team combines deep technical expertise with innovative thinking to deliver digital products that align with your vision and adapt to the fast-evolving market. ",
//         image: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730790532/_%C3%83_%C3%83_%C3%83_%C3%83__1_zikitt.png",
//         // icon: <Code className="h-10 w-10 text-primary" />,
//     },
//     {
//         title: "DevOps Solutions",
//         id: "web",
//         link: "/services/web-development",
//         description: "Our solutions bridge the gap between development and operations, enabling faster, more reliable software delivery. By integrating automation, continuous integration, and continuous delivery (CI/CD) pipelines, we streamline your workflows, reduce deployment times, and enhance overall system stability. Our DevOps approach emphasizes collaboration, efficiency, and rapid feedback loops.",
//         image: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730790069/Group_7_h0plyx.png",
//         // icon: <Code className="h-10 w-10 text-primary" />,
//     },
//     {
//         title: "Mobile App Development",
//         id: "web",
//         link: "/services/web-development",
//         description: "Crafting engaging and user-friendly mobile applications seamlessly across platforms.",
//         image: "mobile",
//         // icon: <Code className="h-10 w-10 text-primary" />,
//     },
//     {
//         title: "Game Development (AR & VR)",
//         id: "web",
//         link: "/services/web-development",
//         description: "Immersive and captivating game development leveraging augmented reality and virtual reality technologies.",
//         image: "game",
//         // icon: <Code className="h-10 w-10 text-primary" />,
//     },
//     {
//         title: "Web Development",
//         id: "web",
//         link: "/services/web-development",
//         description: "Custom Web Development: Building responsive, intuitive websites tailored to your unique.",
//         image: "cms",
//         // icon: <Code className="h-10 w-10 text-primary" />,
//     },
//     {
//         title: "Cybersecurity Service",
//         id: "web",
//         link: "/services/web-development",
//         description: "Custom Web Development: Building responsive, intuitive websites tailored to your unique.",
//         image: "ssl",
//         // icon: <Code className="h-10 w-10 text-primary" />,
//     },
//     {
//         title: "Cloud Services",
//         id: "web",
//         link: "/services/web-development",
//         description: "Cloud Operations and Migration: Smooth transition and efficient management of cloud.",
//         image: "Cloud",
//         // icon: <Code className="h-10 w-10 text-primary" />,
//     },
//     {
//         title: "Staff Augmentation",
//         id: "web",
//         link: "/services/web-development",
//         description: "Staff Augmentation: Augmenting your workforce with skilled professionals to meet evolving.",
//         image: "avator",
//         // icon: <Code className="h-10 w-10 text-primary" />,
//     },
//     {
//         title: "Custom Enterprise Solutions",
//         id: "web",
//         link: "/services/web-development",
//         description: "Developing scalable and robust applications tailored to your business needs.",
//         image: "Bussiness",
//         // icon: <Code className="h-10 w-10 text-primary" />,
//     },
// ];

interface Service {
    title: string;
    shortDescription: string;
    description: string;
    homeImage: string;
    image: string;
    link?: string;
}

export default async function Page() {
    let services: Service[] | null = null;
    try {
        const response = await axios.get(`${backendUrl}/api/v1/service`);
        if (response.data.data) {
            services = response.data.data;
        } else {
            console.error("Failed to fetch blog data:", response.statusText);
        }
    } catch (error) {
        console.log("Error fetching blog data:", error);
    }

    if (!services) {
        return <div className="text-center text-white text-2xl py-10">Loading...</div>;
    }

    return (
        <>
            {/* Hero Section */}
            <div className="relative ">
                <div className="bg-black">
                    {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent opacity-50"></div> */}
                    <Image src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730768650/Rectangle_27_1_gekqzm.png" alt="About Picture" width={1920} height={650} className="min-h-[450px] md:in-h-[650px] max-h-[650px] w-full object-fill" />
                    {/* <img className="max-h-[650px] w-full object-cover" src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730768650/Rectangle_27_1_gekqzm.png" alt="" /> */}
                    {/* <Image src={contactHero.src} alt="logo" width={120} height={400} layout="responsive" /> */}
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center lg:gap-y-5 items-center text-white px-3">
                    <h1 className="text-base font-medium text-center uppercase text-[var(--Blue-Color)]">SERVICES</h1>
                    <p className="text-center text-3xl md:text-6xl md:leading-[80px] font-medium max-w-[824px]">A One Stop Shop for Your Digital Products</p>
                    <p className="text-center text-lg md:text-xl md:leading-[32px] max-w-2xl"> Through our tailored solutions, we harness the power of technology to drive efficiency, innovation, and lasting success for your enterprise.</p>
                    <div className="md:mt-5 flex justify-center">
                        <Link href="/contact" className="bg-[var(--Blue-Color)] text-lg text-white font-medium py-3 px-6 rounded-md hover:bg-white hover:text-black hover:border-red-500 transition-colors duration-300">
                            Work With Us
                        </Link>
                    </div>
                </div>
            </div>

            {/* pt-40  md:pt-32 */}
            <section className="relative  pb-16 ">
                {/* Stats Box - Positioned 50% above */}
                <section className="relative pt-40 md:pt-32 pb-16">
                    {/* Stats Box - Positioned 50% above */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 custom-container">
                        <div className="bg-white rounded-xl shadow-xl p-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x-2">
                                {stats.map((stat) => {
                                    const mainValue = stat.value.replace(/[^0-9KkMm.]/g, ""); // Extract main value (e.g., "70K")
                                    const prefix = stat.value.replace(/[0-9KkMm.]/g, ""); // Extract prefix (e.g., "+")
                                    return (
                                        <div key={stat.label} className="text-center text-[#1E1E1E] ">
                                            <div className="text-[56px] leading-[50px] font-bold mb-3">
                                                {mainValue}
                                                <span className="text-blue-500">{prefix}</span>
                                            </div>
                                            <div className="text-lg font-medium">{stat.label}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                {/* Main Content */}
                <div className="custom-container ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-auto">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold leading-tight">We transform concepts into strong creative execution that&apos;s driven by both form and function.</h2>
                            <p className="text-gray-600 leading-relaxed">We believe in more than just ideas – we bring them to life with precision and purpose. By blending form with function, we transform your concepts into robust solutions that are not only visually compelling but strategically crafted to drive tangible results. Our expertise ensures that every execution is anchored in creativity and engineered for impact.</p>
                            {/* <Button className="bg-blue-500 hover:bg-blue-600 text-white">Learn More</Button> */}
                        </div>

                        <div className="relative h-[400px] rounded-2xl overflow-hidden">
                            <Image src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730743234/c5e89b809cf6f6f90a351564e1c60489_jk4cj7.jpg" alt="Hands typing on keyboard" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Scroll Bar */}
            <ServicesSrollBar />

            {/* Services */}
            <section className="bg-[#000409]">
                <div className="custom-container mx-auto divide-y-2 ">
                    {services.map((service, index) => (
                        <div key={index} className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-[180px] gap-y-10 items-center py-[120px]">
                            <div className="">
                                <h2 className="text-4xl font-bold text-white">{service.title}</h2>
                                <p className="leading-relaxed text-[#D1D1D1] mt-5">{service.description}</p>
                                <a href="#" className="inline-flex items-center text-white gap-x-2 hover:text-blue-300 transition-colors mt-10">
                                    Learn more
                                    <Image src={RightArrow} alt="Right Arrow" className=""></Image>
                                </a>
                            </div>
                            <div className="mx-auto">
                                <Image src={service.homeImage} alt={service.title} width={600} height={600} className="rounded-3xl" layout="responsive" objectFit="contain" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Work With Us */}
            <WhyWorkWithUs />
        </>
    );
}