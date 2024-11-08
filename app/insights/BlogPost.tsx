"use client";
import React, { useState } from "react";
import PostCard from "../components/Blog/Postcard";
import { Search, ChevronDown, ArrowRight } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Image from "next/image";

interface Post {
    blogTitle: string;
    categoryID: { categoryTitle: string };
    blogImage: string;
    authorName: string;
    slug: string;
}
interface BlogPostsProps {
    post: Post[]; // This defines that `post` is an array of `Post` objects
}
const BlogPosts = ({ post }: BlogPostsProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const POSTS_PER_PAGE = 6;
    const totalPages = Math.ceil(post.length / POSTS_PER_PAGE);
    const indexOfLastPost = currentPage * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Category");

    const categories = ["All Categories", "AI & ML", "Web Development", "Mobile Development", "Cloud Computing", "DevOps"];
    return (
        <section className="custom-container mx-auto  py-20">
            {/* Search and Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="text" placeholder="Search by Keywords" className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="relative">
                    <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="w-full sm:w-48 px-4 py-3 rounded-lg border border-gray-200 bg-white flex items-center justify-between">
                        <span className="text-gray-700">{selectedCategory}</span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setIsDropdownOpen(false);
                                    }}
                                    className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700">
                                    {category}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Feature Post */}
            {currentPage === 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-5 py-8">
                <div className="left rounded-3xl overflow-hidden relative ">
                    <Image src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730894813/1585b73b41a6996e086d5a4dbba08cbe_peigez.png" alt="" width={600} height={600} layout="responsive" ></Image>
                    <span className=" absolute top-6 left-6 bg-white py-[10px] px-[16px] rounded-[8px]">FEATURED</span>
                </div>
                <div className="right  flex flex-col justify-center">
                    <p className="text-sm text-black font-semibold">AI & ML</p>
                    <h3 className="text-[#1E1E1E] text-3xl font-semibold mt-3">The Role of AI In Software Development</h3>
                    <p className="text-[#454545] text-lg mt-5">Since exploding onto the scene in late 2022, Generative AI (GenAI) in software development has helped create innovative solutions that have accelerated production across almost every industry. Gen AI has even caused a major technological shift in custom software development.</p>
                    <div className="flex items-center text-[var(--Blue-Color)] gap-x-1 py-1 mt-10">
                        <p className="Readmore font-semibold w-fit text-lg text-[var(--Blue-Color)] inline-block group">
                            Read More
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[var(--Blue-Color)]"></span>
                        </p>
                        <span className="">
                            <ArrowRight size={15} />
                        </span>
                    </div>
                </div>
            </div>)
            }

            {/* grid grid-cols-3 gap-x-[30px] gap-y-12 pb-[140px] */}
            <div className="posts grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {/* {posts.map((iteams, index) => {
                    return <PostCard key={index} title={iteams.title} category={iteams.category} imageURL={iteams.imageURL} />
                })} */}
                {currentPosts ? (
                    currentPosts.map((iteams, index) => {
                        // const categoryTitle = iteams.categoryID ? iteams.categoryID.categoryTitle : 'No Category';
                        // console.log("category iD", categoryTitle);
                        return <PostCard key={index} title={iteams.blogTitle} category={iteams.categoryID ? iteams.categoryID.categoryTitle : "No Category"} imageURL={iteams.blogImage} slug={iteams.slug} authorName={iteams.authorName} />;
                        // postslug={iteams.postslug}
                    })
                ) : (
                    <p className="">No Post Found!</p>
                )}
            </div>
            {/* Pagination */}
            {post.length > POSTS_PER_PAGE && (
                <Pagination className="mt-8">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCurrentPage((prev) => Math.max(prev - 1, 1));
                                }}
                                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                            />
                        </PaginationItem>
                        {[...Array(totalPages)].map((_, i) => (
                            <PaginationItem key={i}>
                                <PaginationLink
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCurrentPage(i + 1);
                                    }}
                                    isActive={currentPage === i + 1}>
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                                }}
                                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </section>
    );
};

export default BlogPosts;
