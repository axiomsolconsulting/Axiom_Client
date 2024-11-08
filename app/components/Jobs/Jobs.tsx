import { MapPin, Clock } from "lucide-react";
import RightArrow from "@/public/RightArrow.svg";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { backendUrl } from "../constants/constants";

// interface JobListing {
//     title: string;
//     location: string;
//     type: string;
//     applyLink: string;
// }

// const jobListings: JobListing[] = [
//     {
//         title: "Data Engineer",
//         location: "Houston, New York",
//         type: "Full-Time",
//         applyLink: "/",
//     },
//     {
//         title: "Business Analyst",
//         location: "Houston, New York",
//         type: "Full-Time",
//         applyLink: "/",
//     },
// ];
interface Job {
    title: string;
    type: string;
    jobApplicationDeadline: string;
    minimumExperience: string;
    experience: string;
    location: string;
    description: string;
    _id: string;
}

const Jobs = async () => {
    let jobs: Job[] | null = null;
    try {
        const response = await axios.get(`${backendUrl}/api/v1/jobs`);
        if (response.data.data) {
            jobs = response.data.data.reverse();
        } else {
            console.error("Failed to fetch jobs data:", response.statusText);
        }
    } catch (error) {
        console.log("Error fetching jobs data:", error);
    }
    return (
        <>
            <section className="py-12 bg-[#EDF3FF] rounded-3xl">
                <div className="relative">
                    <img src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730727057/Vector_2_kn8ozn.png" alt="" className="absolute left-0" />
                    <img src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730727056/Vector_3_tepnz4.png" alt="" className="absolute right-0" />
                </div>
                <h3 className="text-[44px] font-semibold text-[#000915] text-center">This Could be Your Job</h3>
                <p className="text-lg text-[#000915] text-center max-w-[946px] mx-auto mt-3">Creating solid teams is more than hiring skilled people. We believe it’s essential to develop a culture where everyone can feel heard, supported, and able to do their best, most innovative work.i</p>
                <div className=" lg:px-[124px] mt-14 divide-y-[1px] border-2">
                {/* div className=" lg:px-[124px] mt-14 divide-y-[1px] border-2"> */}
                    {jobs ? jobs.map((job, index) => (
                        <div key={index} className=" hover:bg-white transition-colors duration-100 px-6 py-8 ">
                            {/* grid grid-cols-1 lg:grid-cols-3 */}
                            {/* flex justify-between gap-6 lg:gap-8 flex-wrap */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6">
                                {/* Job Title */}
                                <h3 className="text-2xl font-semibold text-[#000915] order-1 ">{job.title}</h3>

                                {/* Location and Job Type */}
                                <div className=" order-3 col-span-2 md:col-span-1  flex flex-row items-center gap-4 xl:gap-8  mx-auto text-[#000915]">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-[#000915]" />
                                        <span className="text-lg font-semibold">{job.location}</span>
                                    </div>
                                    <div className=" flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-[#000915]" />
                                        <span className="text-lg font-semibold">{job.type}</span>
                                    </div>
                                </div>

                                {/* Apply Now Button */}
                                <Link href={`/careers/${job._id}`} className=" order-2 md:order-3 flex items-center gap-1 text-[var(--Blue-Color)] font-semibold text-lg underline underline-offset-4 hover:text-blue-600 transition-colors justify-self-end">
                                    Apply Now
                                    <Image src={RightArrow} alt="Right Arrow" className="w-4 h-4"></Image>
                                </Link>
                            </div>
                        </div>
                    ))
                : <p className="">No Job Available Right now</p>
                }
                </div>
                <div className="mt-[60px] flex justify-center">
                    <Link href="/contact" className="bg-[var(--Blue-Color)] text-lg text-white font-medium py-4 px-8 rounded-md hover:bg-[#011633] hover:text-white hover:border-red-500 transition-colors duration-300">
                        Work With Us
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Jobs;
