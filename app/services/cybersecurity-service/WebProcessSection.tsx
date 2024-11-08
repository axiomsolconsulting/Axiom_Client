export default function WebProcessSection() {
    const steps = [
        {
            number: "1",
            title: "Discovery & Planning",
            description: "Understand your needs and goals to tailor our services.",
        },
        {
            number: "2",
            title: "Design & Development",
            description: "Create and implement the website, focusing on aesthetics and functionality.",
        },
        {
            number: "3",
            title: "Testing & Launch",
            description: "Extensive testing ensures a bug-free, optimized website launch.",
        },
        {
            number: "4",
            title: "Post-Launch Support",
            description: "Ongoing support and maintenance for peak website performance.",
        },
    ];

    return (
        <section className="bg-process text-white py-10 lg:pt-[100px] lg:pb-[130px] px-4">
            <div className="custom-container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Our Process</h2>
                    <p className="text-gray-400 max-w-3xl mx-auto">We follow a proven, collaborative process to ensure every web development project aligns perfectly with your business goals and vision.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {steps.map((step, index) => (
                        <div key={index} className="relative z-50">
                            <div className="mb-10 ">
                                <div className="w-[46px] h-[46px] flex items-center justify-center  rounded-full bg-blue-500 text-white font-semibold">{step.number}</div>
                            </div>

                            <h3 className="text-xl font-bold mb-5">{step.title}</h3>

                            <p className="text-gray-400">{step.description}</p>

                            {/* Connector line - only show between items */}
                            {/* {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-4 left-[calc(100%_-_1rem)] w-full h-[2px] bg-blue-500/20">
                                    <div className="absolute left-0 top-0 h-full w-1/3 bg-blue-500"></div>
                                </div>
                            )} */}
                        </div>
                    ))}
                    <div className="hidden lg:block absolute border border-[#1D3F6D] w-full top-5 "></div>
                </div>
            </div>
        </section>
    );
}
