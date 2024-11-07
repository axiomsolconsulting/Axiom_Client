"use client";
import React from "react";
import axios from "axios";
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { BiLogoLinkedin } from "react-icons/bi";
import { backendUrl } from "@/app/constants/constants";
// import { useParams } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import PostCard from "@/app/components/Blog/Postcard";
// import { websiteUrl } from "@/app/constants/constants";
// import parse from "html-react-parser";

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
    
    const {slug} = await params;
    
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

    // console.log(slug);
    // const { slug } = useParams();
    // console.log(post.blogImage);

    // const [post, setPost] = useState<Post | null>(null);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get(`${backendUrl}/api/v1/web/blogs/${slug}`);
    //       console.log(response.data.data);
    //       if (response.data.data) {
    //         setPost(response.data.data);
    //       }
    //     } catch (error) {
    //       console.error("Error fetching post:", error);
    //     }
    //   };
    //   fetchData();

    // }, [slug])

    if (!post) {
        return <div className="">Loading</div>;
    }

    return (
        <>
            {/* bg-slate-200 shadow */}
            <main className="hero-section  container mx-auto py-5 px-5 lg:flex  md:gap-x-3 space-y-5 md:space-y-0  mt-[167px]">
                <div className="max-w-[950px] mx-auto">
                    <p className="text-[var(--Blue-Color)] ">Back to Blogs</p>
                    <h2 className="text-[#1E1E1E] text-[44px] leading-[60px] font-semibold my-5"> {post.blogTitle} </h2>
                    <p className="pb-5">{post.metaDescription}</p>
                    {/* bg-white overflow-hidden rounded-md shadow-lg border */}
                    <div className="">
                        {/* Thumbnal */}
                        <div className="">
                            {/* <img className="w-full aspect-video max-h-96 object-cover" src={post.blogImage} width={100} height={100} alt="" /> */}
                            <Image className="w-full aspect-video max-h-[450px] object-cover rounded-3xl" src={post.blogImage} width={1200} height={1200} alt=""></Image>
                        </div>
                        {/* Content */}
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
                            {/* <p className=" text-gray-500 mt-5"><>{post.postcontent}</></p> */}
                            {/* <div
                                className={`mt-5 [&>h1]:text-[32px] [&>h1]:font-bold [&>h1]:mb-2.5 [&>h1]:text-black
              [&>h2]:text-[24px] [&>h2]:font-bold [&>h2]:mb-2.5 [&>h2]:text-black
              [&>h3]:text-[18.72px] [&>h3]:font-bold [&>h3]:mb-2.5 [&>h3]:text-black
              [&>h4]:text-[16px] [&>h4]:font-bold [&>h4]:mb-2.5 [&>h4]:text-black
              [&>h5]:text-[13.28px] [&>h5]:font-bold [&>h5]:mb-2.5 [&>h5]:text-black
              [&>h6]:text-[10px] [&>h6]:font-bold [&>h6]:mb-2.5 [&>h6]:text-black
              md:[&>p]:text-[16px] [&>p]:text-[13px] [&>p]:mb-1.5 [&>p]:text-black
              [&>ul]:list-disc [&>ul]:ml-[16px] md:[&>ul]:text-[16px] [&>ul]:text-[13px] [&>ul]:mb-1 [&>ul]:text-black
              [&>ol]:list-decimal md:[&>ol]:text-[16px] [&>ol]:text-[13px] [&>ol]:ml-[16px] [&>li]:mb-10 
              [&>li]:list-decimal [&>ol]:mb-2 [&>ol]:text-black
              [&>img]:rounded-lg
            [&_a]:text-[#A1258F] `}
                                dangerouslySetInnerHTML={{ __html: post.blogData }}></div> */}
                            <div className="text-gray-500 mt-5" dangerouslySetInnerHTML={{ __html: post.blogData }}></div>
                            {/* <>{parse( post.blogData)}</> */}
                            <div className="Tags flex gap-2 mt-5 flex-wrap text-sm">
                                <span className=" border py-1 px-2 hover:bg-blue-500 hover:text-white cursor-pointer duration-300 transition transform">Fashion</span>
                                <span className=" border py-1 px-2 hover:bg-blue-500 hover:text-white cursor-pointer duration-300 transition transform">Sports</span>
                                <span className=" border py-1 px-2 hover:bg-blue-500 hover:text-white cursor-pointer duration-300 transition transform">Cricket</span>
                                <span className=" border py-1 px-2 hover:bg-blue-500 hover:text-white cursor-pointer duration-300 transition transform">Crypto </span>
                                <span className=" border py-1 px-2 hover:bg-blue-500 hover:text-white cursor-pointer duration-300 transition transform">Football</span>
                            </div>
                            <hr className="line my-5" />
                            {/* <div className="Social flex gap-2 mt-2">
                        <span className="border p-2 cursor-pointer hover:text-[#1877F2] "><FaFacebookF /></span>
                        <span className="border p-2 cursor-pointer hover:text-[#1C9BE9]"> <FaTwitter /></span>
                        <span className="border p-2 cursor-pointer hover:text-[#B430D7]"><FaInstagram /></span>
                        <span className="border p-2 cursor-pointer hover:text-[#0270AD]"><BiLogoLinkedin /></span>
                    </div> */}
                        </div>
                    </div>

                    <div className="flex bg-white border py-2  justify-between px-3 items-center mt-5 shadow">
                        <h3 className="text-lg font-semibold">Related Articles</h3>
                        <button>
                            <Link href="/blogs" className="bg-blue-500 text-white text-sm font-medium py-1 px-2 hover:text-blue-500 hover:bg-white hover:border-blue-500 border transition transform duration-300">
                                SEE MORE
                            </Link>
                        </button>
                    </div>
                    {/* Realated Post */}
                    <div className="regularpost grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5 ">
                        {relatedpost.map((item, index) => (
                            <div key={index} className="bg-white rounded-md">
                                <PostCard title={item.blogTitle} category="No Category" imageURL={item.blogImage} slug={item.blogTitle} authorName={item.authorName} />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
};

export default PostView;