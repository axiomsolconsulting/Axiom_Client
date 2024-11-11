import Image from "next/image";
import axios from "axios";
import { backendUrl } from "../constants/constants";
import BlogPosts from "../insights/BlogPost";

export default async function Page() {
    let post = null;
    try {
        const response = await axios.get(`${backendUrl}/api/v1/blog`);
        if (response.data.data) {
            post = response.data.data.reverse();
        } else {
            console.error("Failed to fetch blog data:", response.statusText);
        }
    } catch (error) {
        console.log("Error fetching blog data:", error);
    }
    if (!post) {
        return <div className="text-center text-white text-2xl py-10">Loading...</div>;
    }
    return (
        <>
            {/* Hero Section */}
            <div className="relative ">
                <div className="bg-black ">
                    {/* <img className="max-h-[650px] w-full object-cover" src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730768650/Rectangle_27_1_gekqzm.png" alt="" /> */}
                    <Image src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730768650/Rectangle_27_1_gekqzm.png" alt="About Picture" width={1920} height={650} className="min-h-[550px] max-h-[650px] w-full object-fill" />
                    {/* <Image src={contactHero.src} alt="logo" width={120} height={400} layout="responsive" /> */}
                </div> 
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white px-3">
                    <h1 className="text-base font-medium text-center uppercase text-[var(--Blue-Color)]">Insights</h1>
                    <p className="text-center text-2xl sm:text-3xl md:text-5xl xl:text-6xl md:leading-[80px] font-medium max-w-[824px] mt-2 lg:mt-5">Updates, Insights and Tips</p>
                    <p className="text-center text-base sm:text-lg md:text-xl md:leading-[32px] max-w-2xl mt-3 lg:mt-7">Stay ahead with Axiom as we bring you the latest updates, insightful perspectives, and practical tips.</p>
                    <div className="border-2 border-[var(--Blue-Color)] w-12 my-3 lg:my-7"></div>
                    <p className="">Get started with one of these topics</p>
                    <div className=" space-x-3 mt-2 lg:mt-7">
                        <button className="bg-[#193352] hover:bg-[var(--Blue-Color)] duration-300 text-white text-lg font-semibold px-[20px] py-[10px] rounded-md mt-4">Web Insights</button>
                        <button className="bg-[#193352] hover:bg-[var(--Blue-Color)] duration-300 text-white text-lg font-semibold px-[20px] py-[10px] rounded-md mt-4">Digital Marketing</button>
                        <button className="bg-[#193352] hover:bg-[var(--Blue-Color)] duration-300 text-white text-lg font-semibold px-[20px] py-[10px] rounded-md mt-4">Gaming</button>
                        {/* <button className="bg-[#193352] hover:bg-[var(--Blue-Color)] duration-300 text-white text-lg font-semibold px-[20px] py-[10px] rounded-md mt-4">Cloud Services</button> */}
                    </div>
                </div>
            </div>

            

            {/* <section className="custom-container mx-auto grid grid-cols-3 gap-x-[30px] gap-y-12 pb-[140px]">
                <PostCard title="A Software Maintenance Team — What does it do? Why is it important?" category="Web Insights" imageURL="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730884700/6c9f617cc777a22afc601c2cf9c65dfa_aegmyr.png" />
                <PostCard title="A Software Maintenance Team — What does it do? Why is it important?" category="Web Insights" imageURL="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730884700/6c9f617cc777a22afc601c2cf9c65dfa_aegmyr.png" />
                <PostCard title="A Software Maintenance Team — What does it do? Why is it important?" category="Web Insights" imageURL="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730884700/6c9f617cc777a22afc601c2cf9c65dfa_aegmyr.png" /> <PostCard title="A Software Maintenance Team — What does it do? Why is it important?" category="Web Insights" imageURL="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730884700/6c9f617cc777a22afc601c2cf9c65dfa_aegmyr.png" />
                <PostCard title="A Software Maintenance Team — What does it do? Why is it important?" category="Web Insights" imageURL="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730884700/6c9f617cc777a22afc601c2cf9c65dfa_aegmyr.png" />
                <PostCard title="A Software Maintenance Team — What does it do? Why is it important?" category="Web Insights" imageURL="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730884700/6c9f617cc777a22afc601c2cf9c65dfa_aegmyr.png" />
            </section> */}
            <BlogPosts post={post || []} />
        </>
    );
}
