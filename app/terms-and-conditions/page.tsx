import React from "react";
import axios from "axios";
import { backendUrl } from "../constants/constants";

const page = async () => {
    interface Post {
        tacTitle: string;
        tacData: string;
        updatedAt: string;
    }

    let post: Post[] | null = null;
    try {
        const response = await axios.get(`${backendUrl}/api/v1/web/terms-and-conditions`, {
            headers: {
                "Cache-Control": "public, max-age=60", // This sets a 5-minute cache time
            },
        });
        if (response.data.data) {
            post = response.data.data;
        } else {
            console.error("Failed to fetch Services data:", response.statusText);
        }
    } catch (error) {
        console.log("Error fetching Services Data:", error);
    }
    if (!post) {
        return <div className="mt-[167]">Loading</div>;
    }

    // Format the updated date
    const formattedDate = new Date(post[0].updatedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <div className="mt-[120px] mb-10 xl:mt-[168px] max-w-[950px] mx-auto px-4">
            <h1 className="text-4xl xl:text-6xl font-semibold text-[#000915]">{post[0].tacTitle}</h1>
            <p className="font-bold xl:text-lg mt-3">
                Last Updated: <span className="">{formattedDate}</span>
            </p>
            <div className="text-gray-500 mt-5 post-content" dangerouslySetInnerHTML={{ __html: post[0].tacData }}></div>
        </div>
    );
};

export default page;
