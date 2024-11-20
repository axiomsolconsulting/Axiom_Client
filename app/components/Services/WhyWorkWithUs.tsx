import Partner from '@/public/services/Partner.svg';
import Scale from '@/public/services/Scale.svg';
import Transparency from '@/public/services/Tranparency.svg';
import Link from 'next/link';


const WhyWorkWithUs = () => {

    const offers = [
        {
            title: "Scale & Speed",
            description: "We understand that in today's fast-paced digital landscape, the ability to scale rapidly and execute efficiently is crucial for success.",
            image: Scale
        },
        {
            title: "Transparency",
            description: "We believe in fostering trust through transparency. Axiom maintains open lines of communication throughout every project.",
            image: Transparency
        },
        {
            title: "Partner Approach",
            description: "Axiom adopts a true partner approach, working alongside you to understand your goals, challenges, and aspirations.",
            image: Partner
        }
    ];

    return (
        <section className="py-[60px] xl:py-[120px] custom-container mx-auto">
            <div className="grid lg:grid-cols-2 gap-y-[60px] gap-x-[124px]">
                {/* Left Column */}
                <div className="">
                    <div>
                        <h2 className="text-[44px] leading-[60px] font-semibold mb-5 text-[#1E1E1E]">Why Work With Us</h2>
                        <p className="text-[#454545] text-lg">Choosing Axiom as your strategic partner means embracing a collaborative approach to technology solutions that prioritize your business success. Here&apos;s why you should work with us:</p>
                    </div>

                    <div className="bg-[#EDF3FF] rounded-3xl p-8 pb-12  mt-10 border md:mr-[17px] border-[var(--Blue-Color)]">
                        <h3 className="text-2xl font-bold text-black mb-5">Book a discovery call to discuss your needs.</h3>
                        <p className="text-gray-600 mb-10">Ready to take the next step? Let&apos;s connect! We invites you to book a discovery call.</p>
                        <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-5 rounded-md transition-colors text-lg font-medium">Book a Call</Link>
                    </div>
                </div>

                {/* Right Column */}
                <div className="divide-y-2">
                    {/* Offers */}
                    {offers.map((offer, index) => (
                        <div key={index} className="flex gap-6 py-[20px]">
                            <div className="flex-shrink-0 w-12 h-12">
                                <img src={offer.image.src} alt={offer.title} className="w-full h-full" />
                            </div>
                            <div>
                                <h3 className="text-[32px] leading-[42px] font-semibold">{offer.title}</h3>
                                <p className="text-[#454545] mt-5">{offer.description}</p>
                            </div>
                        </div>
                    ))}

                    {/* Scale & Speed */}
                    {/* <div className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12">
                            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
                                <rect x="12" y="12" width="16" height="16" stroke="currentColor" strokeWidth="2" />
                                <rect x="20" y="20" width="16" height="16" stroke="currentColor" strokeWidth="2" />
                                <path d="M32 12L38 6" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-[32px] leading-[42px] font-semibold">Scale & Speed</h3>
                            <p className="text-[#454545] mt-5">We understand that in today's fast-paced digital landscape, the ability to scale rapidly and execute efficiently is crucial for success.</p>
                        </div>
                    </div> */}

                    {/* Transparency */}
                    {/* <div className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12">
                            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
                                <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                                <circle cx="24" cy="24" r="8" fill="currentColor" fillOpacity="0.2" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-[32px] leading-[42px] font-semibold">Transparency</h3>
                            <p className="text-[#454545] mt-5">We believe in fostering trust through transparency. Axiom maintains open lines of communication throughout every project.</p>
                        </div>
                    </div> */}

                    {/* Partner Approach */}
                    {/* <div className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12">
                            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
                                <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2" />
                                <circle cx="12" cy="32" r="6" stroke="currentColor" strokeWidth="2" />
                                <circle cx="36" cy="32" r="6" stroke="currentColor" strokeWidth="2" />
                                <path d="M24 24V32M12 32H36" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-[32px] leading-[42px] font-semibold">Partner Approach</h3>
                            <p className="text-[#454545] mt-5">Axiom adopts a true partner approach, working alongside you to understand your goals, challenges, and aspirations.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default WhyWorkWithUs;
