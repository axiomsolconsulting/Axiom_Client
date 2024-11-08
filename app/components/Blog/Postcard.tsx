
import Link from "next/link";
import { ArrowRight } from "lucide-react";


interface PostCardProps {
    imageURL: string;
    category: string;
    title: string;
    slug: string;
    authorName: string;
}

const PostCard: React.FC<PostCardProps> = (props) => {



    return (
        <>
            <div className="relative overflow-hidden">
                <Link href={`/insights/${props.slug}`}>
                    {/* Post Card */}
                    <div className=" hover:shadow-lg duration-300 ">
                        {/* Thumbnail Picture + Category */}
                        <div className="image  relative rounded-3xl border overflow-hidden">
                            {/* <div className="category absolute top-0 right-0 font-semibold text-sm px-3 py-2 bg-[--Blue-Color] w-fit z-10 text-white">{props.category} </div> */}
                            <img src={props.imageURL} alt="" className="w-full  object-cover aspect-video hover:scale-110 duration-500 " />
                        </div>
                        {/* Details */}
                        <div className="details mt-7">
                            {/* Category */}
                            <p className="uppercase hover:text-[var(--Blue-Color)] font-semibold text-sm">{props.category}</p>
                            {/* Title */}
                            <h3 className="posttitle mt-2 text-2xl h-16 font-semibold line-clamp-2 text-[#1E1E1E] duration-300 hover:text-[var(--Blue-Color)]">{props.title}</h3>
                            {/* Read More & Sharing Icon */}
                            <div className="flex justify-between items-center relative mt-7 ">
                                {/* Read More */}
                                <div className="flex items-center text-[var(--Blue-Color)] gap-x-1 py-1">
                                    <p className="Readmore font-semibold w-fit text-lg text-[var(--Blue-Color)] inline-block group">
                                        Read Full Blog
                                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[var(--Blue-Color)]"></span>
                                    </p>
                                    <span className="">
                                        <ArrowRight size={15} />
                                    </span>
                                </div>
                                {/*Sharing Icon */}

                                {/* <div onClick={toggleOpen} className="border rounded-full p-2 cursor-pointer transition-colors duration-300 hover:bg-gray-100 ">
                                    <FiSend size={20} />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </Link>

                {/* <div ref={dropdownRef} className={`absolute bottom-[17px] right-4 flex border rounded-full bg-white overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
                    <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${websiteUrl}/${props.slug}`)}`} target="_blank" rel="noopener noreferrer" className="block py-2 px-3 z-10 cursor-pointer hover:text-[#1877F2] transition-colors duration-300 bg-white">
                        {" "}
                        <FaFacebookF size={20} />{" "}
                    </Link>
                    <Link href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${websiteUrl}/${props.slug}`)}&text=Check%20this%20out!`} target="_blank" rel="noopener noreferrer" className="p-2 cursor-pointer hover:text-[#1C9BE9] transition-colors duration-300 bg-white">
                        {" "}
                        <FaTwitter size={20} />{" "}
                    </Link>
                    <Link href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-2 cursor-pointer hover:text-[#B430D7] transition-colors duration-300 bg-white">
                        {" "}
                        <FaInstagram size={20} />{" "}
                    </Link>
                    <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${websiteUrl}/${props.slug}`)}`} target="_blank" rel="noopener noreferrer" className="py-2 px-3 cursor-pointer hover:text-[#0270AD] transition-colors duration-300 bg-white">
                        {" "}
                        <BiLogoLinkedin size={20} />
                    </Link>
                </div> */}
            </div>
        </>
    );
};

export default PostCard;
