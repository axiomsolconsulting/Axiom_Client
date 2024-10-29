import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Digital Solutions",
            id: "web",
            link: "/services/web-development",
            description: "Digital Consulting and Strategy: Tailored guidance and planning to maximize your digital presence.",
            image: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730183673/_%C3%83_%C3%83_%C3%83_%C3%83__1_yjljhh.png",
            // icon: <Code className="h-10 w-10 text-primary" />,
        },
        {
            title: "DevOps Solutions",
            id: "web",
            link: "/services/web-development",
            description: "Streamlining development processes, enhancing collaboratio.",
            image: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730184035/Interface_smytie.png",
            // icon: <Code className="h-10 w-10 text-primary" />,
        },
        {
            title: "Mobile App Development",
            id: "web",
            link: "/services/web-development",
            description: "Crafting engaging and user-friendly mobile applications seamlessly across platforms.",
            image: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730183997/Frame_dfcnkv.png",
            // icon: <Code className="h-10 w-10 text-primary" />,
        },
        {
            title: "Game Development (AR & VR)",
            id: "web",
            link: "/services/web-development",
            description: "Immersive and captivating game development leveraging augmented reality and virtual reality technologies.",
            image: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730183995/Illustration_jztt00.png",
            // icon: <Code className="h-10 w-10 text-primary" />,
        },
        {
            title: "Web Development",
            id: "web",
            link: "/services/web-development",
            description: "Custom Web Development: Building responsive, intuitive websites tailored to your unique.",
            image: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730183673/_%C3%83_%C3%83_%C3%83_%C3%83__1_yjljhh.png",
            // icon: <Code className="h-10 w-10 text-primary" />,
        },
        {
            title: "Cybersecurity Service",
            id: "web",
            link: "/services/web-development",
            description: "Custom Web Development: Building responsive, intuitive websites tailored to your unique.",
            image: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730183994/Frame_1_bs0nqo.png",
            // icon: <Code className="h-10 w-10 text-primary" />,
        },
        {
            title: "Cloud Services",
            id: "web",
            link: "/services/web-development",
            description: "Cloud Operations and Migration: Smooth transition and efficient management of cloud.",
            image: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730183989/Frame_2_zgdktr.png",
            // icon: <Code className="h-10 w-10 text-primary" />,
        },
        {
            title: "Staff Augmentation",
            id: "web",
            link: "/services/web-development",
            description: "Staff Augmentation: Augmenting your workforce with skilled professionals to meet evolving.",
            image: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730183992/Group_13_c2yfjm.png",
            // icon: <Code className="h-10 w-10 text-primary" />,
        },
        {
            title: "Custom Enterprise Solutions",
            id: "web",
            link: "/services/web-development",
            description: "Developing scalable and robust applications tailored to your business needs.",
            image: "https://res.cloudinary.com/ddmanxpsb/image/upload/v1730183991/Business_nlxexk.png",
            // icon: <Code className="h-10 w-10 text-primary" />,
        },
    ];

    return (
        <section className="service-gradient">
            <div className="container mx-auto px-4 py-24">
                <h2 className="text-[var(--Blue-Color)] text-sm font-semibold tracking-wide uppercase mb-4 text-center ">SERVICES</h2>
                <h3 className="text-3xl sm:text-4xl md:text-5xl mb-12 font-semibold text-white text-center ">
                    Provides Custom Software For Optimized <br /> Processes, Innovation, and Growth.
                </h3>
                <div className="services">
                    {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="service bg-blue-100 p-8 rounded-[20px] shadow-lg min-h-96 box-gradient">
                            <h4 className="text-2xl font-bold text-blue-800 ">Digital Solution</h4>
                            <p className="text-gray-500 ">We build custom web applications that are scalable, secure, and easy to manage.</p>
                        </div>
                        <div className="service bg-blue-100 p-8 rounded-lg shadow-lg min-h-96">
                            <h4 className="text-2xl font-bold text-blue-800 ">Digital Solution</h4>
                            <p className="text-gray-500 ">We build custom web applications that are scalable, secure, and easy to manage.</p>
                        </div>

                        <div className="service col-span-2 bg-blue-100 p-8 rounded-lg shadow-lg min-h-96">
                            <h4 className="text-2xl font-bold text-blue-800 ">Digital Solution</h4>
                            <p className="text-gray-500 ">We build custom web applications that are scalable, secure, and easy to manage.</p>
                        </div>

                        <div className="service col-span-2 bg-blue-100 p-8 rounded-lg shadow-lg min-h-96">
                            <h4 className="text-2xl font-bold text-blue-800 ">Digital Solution</h4>
                            <p className="text-gray-500 ">We build custom web applications that are scalable, secure, and easy to manage.</p>
                        </div>
                        <div className="service bg-blue-100 p-8 rounded-lg shadow-lg min-h-96">
                            <h4 className="text-2xl font-bold text-blue-800 ">Digital Solution</h4>
                            <p className="text-gray-500 ">We build custom web applications that are scalable, secure, and easy to manage.</p>
                        </div>

                        <div className="service  bg-blue-100 p-8 rounded-lg shadow-lg min-h-96">
                            <h4 className="text-2xl font-bold text-blue-800 ">Digital Solution</h4>
                            <p className="text-gray-500 ">We build custom web applications that are scalable, secure, and easy to manage.</p>
                        </div>
                    </div> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                        {services.map((service, index) => (
                            <div key={index} className={`relative p-6 text-white rounded-[20px] shadow-lg min-h-[424px] box-gradient ${[2, 5, 8].includes(index) ? "md:col-span-2" : ""} ${[2, 3, 8].includes(index) ? "lg:col-span-2" : ""} ${index === 5 ? "lg:col-span-1" : ""}`}>
                                <h4 className="text-2xl font-bold">{service.title}</h4>
                                <p className="text-[var(--Gray-Color)] text-base mt-7">{service.description}</p>
                                <div className="absolute bottom-6 right-6 max-w-[calc(100%-3rem)]">
                                {/* max-w-[calc(100%-3rem)] */}
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={250}
                                        height={200}
                                        className="object-cover "
                                        priority={index < 4} // Load first 4 images immediately
                                        quality={80}
                                    />
                                </div>
                                {[2, 3, 8].includes(index) && (
                                    <p className="absolute bottom-6 flex items-center">
                                        Learn more <ChevronRight size={16} className="text-[var(--Blue-Color)]" />
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>                
                </div>
            </div>
        </section>
    );
}
