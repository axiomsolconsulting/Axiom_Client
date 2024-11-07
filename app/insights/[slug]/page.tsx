// "use client";
import React from "react";
import axios from "axios";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { backendUrl } from "@/app/constants/constants";
import Link from "next/link";
import Image from "next/image";
import PostCard from "@/app/components/Blog/Postcard";
import { websiteUrl } from "@/app/components/constants/constants";

interface Post {
    blogImage: string;
    blogTitle: string;

    authorName: string;
    blogData: string;
    metaDescription: string;
    createdAt: string;
}

export interface Params {
    params: Promise<{
        slug: string;
    }>;
}

const PostView = async ({ params }: Params) => {
    const { slug } = await params;

    //  For Current Blog Post from the backend
    let post: Post | null = null;
    try {
        const response = await axios.get(`${backendUrl}/api/v1/web/blogs/${slug}`);
        if (response.data.data) {
            post = response.data.data;
        } else {
            console.error("Failed to fetch blog data:", response.statusText);
        }
    } catch (error) {
        console.log("Error fetching blog data:", error);
    }
    // For Related Blog Post from the backend
    let relatedpost: Post[] = [];
    try {
        const response = await axios.get(`${backendUrl}/api/v1/blog`);
        if (response.data.data) {
            relatedpost = response.data.data.reverse().slice(0, 3); // 3 Related Post
        } else {
            console.error("Failed to fetch blog data:", response.statusText);
        }
    } catch (error) {
        console.log("Error fetching blog data:", error);
    }

    if (!post) {
        return <div className="">Loading</div>;
    }

    return (
        <>
            {/* bg-slate-200 shadow */}
            <main className="hero-section  container mx-auto py-5 px-5 mt-[167px]">
                {/* Content */}
                <div className="max-w-[950px] mx-auto">
                    {/* Back Button */}
                    <Link href="/insights" className="text-[var(--Blue-Color)] flex items-center gap-x-2">
                        <span className="">
                            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.3125 15.6208L2.73364 7.8104L8.3125 0L5.57886 4.77965e-07L1.36561e-06 7.8104L5.57886 15.6208L8.3125 15.6208Z" fill="#1C85FF" />
                            </svg>
                        </span>
                        Back to Blogs
                    </Link>
                    <h2 className="text-[#1E1E1E] text-[44px] leading-[60px] font-semibold my-5"> {post.blogTitle} </h2>
                    <p className="pb-5">{post.metaDescription}</p>
                    {/* bg-white overflow-hidden rounded-md shadow-lg border */}
                    <Image className="w-full aspect-video max-h-[450px] object-cover rounded-3xl" src={post.blogImage} width={1200} height={1200} alt=""></Image>
                    {/* Post Data + Social + Tags */}
                    <div className="grid  md:grid-cols-[65%_35%] gap-4 mt-10">
                        {/* Thumbnal */}
                        {/* <div className="">
                            <img className="w-full aspect-video max-h-96 object-cover" src={post.blogImage} width={100} height={100} alt="" />
                            <Image className="w-full aspect-video max-h-[450px] object-cover rounded-3xl" src={post.blogImage} width={1200} height={1200} alt=""></Image>
                        </div> */}
                        {/* Content Left */}
                        <div className="px-4 py-5">
                            {/* <h2 className="text-2xl font-semibold font-roboto "> {post.blogTitle} </h2> */}
                            <div className="space-x-3 flex items-center pt-1 text-gray-400 text-sm">
                                <a href="" className="hover:text-blue-500 ">
                                    <span className="flex items-center gap-1">{post.authorName}</span>
                                </a>
                                <div className="text-[10px]  text-gray-400 md:text-base lg:text-sm xl:text-sm 2xl:text-md ">
                                    {new Date(post.createdAt).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </div>
                            </div>
                            <div className="text-gray-500 mt-5" dangerouslySetInnerHTML={{ __html: post.blogData }}></div>
                            {/* <>{parse( post.blogData)}</> */}
                        </div>
                        {/* Right Side */}
                        <div className=" ">
                            <div className="bg-[#EDF3FF] p-10 rounded-3xl divide-y ">
                                <div className="1 space-y-[6px] py-7">
                                    <h4 className=" font-bold text-sm text-black">CATEGORY</h4>
                                    <p className="text-lg text-[#454545]"></p>
                                </div>
                                <div className="3 space-y-[6px] py-7">
                                    <h4 className="font-bold text-sm text-black">DATE</h4>
                                    <p className=" text-lg text-[#454545]">
                                        {new Date(post.createdAt).toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </p>
                                </div>
                                <div className="3 space-y-[6px] py-7">
                                    <h4 className="font-bold text-sm text-black">SHARE ON</h4>
                                    <div className="flex gap-2 ">
                                        <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${websiteUrl}/${slug}`)}`} className="p-2 cursor-pointer hover:text-[#1877F2]" target="_blank" rel="noopener noreferrer">
                                            <Facebook />
                                        </Link>
                                        <Link href="https://www.instagram.com/yourusername" className=" p-2 cursor-pointer hover:text-[#B430D7]" target="_blank" rel="noopener noreferrer">
                                            <Instagram />
                                        </Link>
                                        <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${websiteUrl}/${slug}`)}`} className=" p-2 cursor-pointer hover:text-[#0270AD]" target="_blank" rel="noopener noreferrer">
                                            <Linkedin />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Horizontal Line */}
                <div className="relative w-full my-20">
                    {/* Horizontal Line */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>

                    {/* Centered Logo */}
                    <div className="relative flex justify-center">
                        <div className="bg-white px-4">
                            <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 17.0566H8.95787L11.0988 13.8453M11.0988 13.8453L14.3101 9.02832L20.4651 17.0566H13.7749L11.0988 13.8453Z" stroke="url(#paint0_linear_450_1385)" stroke-width="2" />
                                <path d="M21 1.00001L14.0421 1.00001L11.9012 4.21133M11.9012 4.21133L8.68992 9.02832L2.53488 1.00001L9.22514 1.00001L11.9012 4.21133Z" stroke="url(#paint1_linear_450_1385)" stroke-width="2" />
                                <defs>
                                    <linearGradient id="paint0_linear_450_1385" x1="17.7028" y1="17.0168" x2="11.2646" y2="7.43811" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#70A8EA" />
                                        <stop offset="1" stop-color="#32649F" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_450_1385" x1="14.8759" y1="10.2646" x2="7.18157" y2="-0.0992158" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#70A8EA" />
                                        <stop offset="1" stop-color="#32649F" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                {/* Realated Post */}
                <h4 className="text-center text-[#1E1E1E] text-[44px] font-semibold">Related Reads You Might Like</h4>
                <div className="Related-Post grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5 ">
                    {relatedpost.map((item, index) => (
                        <div key={index} className="bg-white rounded-md">
                            <PostCard title={item.blogTitle} category="No Category" imageURL={item.blogImage} slug={item.blogTitle} authorName={item.authorName} />
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
};

export default PostView;
