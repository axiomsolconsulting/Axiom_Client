import { MapPin, Clock } from "lucide-react";
import RightArrow from "@/public/RightArrow.svg";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { backendUrl } from "@/app/constants/constants";

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

const JobCareer = async () => {
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
            <section className="py-12 bg-[#EDF3FF] rounded-3xl mx-auto container mb-10 xl:mb-20">
                <div className="relative">
                    <img src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730727057/Vector_2_kn8ozn.png" alt="" className="absolute left-0" />
                    <img src="https://res.cloudinary.com/ddmanxpsb/image/upload/v1730727056/Vector_3_tepnz4.png" alt="" className="absolute right-0" />
                </div>
                <h3 className="text-[44px] font-semibold text-[#000915] text-center">Current Openings</h3>
                <p className="text-lg text-[#000915] text-center max-w-[946px] mx-auto mt-3">Explore our open positions and find the role that&apos;s right for you. Each opportunity at Axiom is a chance to make an impact and grow your career.</p>
                <div className=" lg:px-[124px] mt-14 divide-y-[1px] border-b ">
                    {jobs ? (
                        jobs.map((job, index) => (
                            <div key={index} className={`hover:bg-white transition-colors duration-100 px-6 py-8 `}>
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
                    ) : (
                        <p className="">No Job Available Right now</p>
                    )}
                </div>
                <div className="mt-[60px] text-center bg-gradient lg:mx-[124px] rounded-3xl space-y-5 pt-[75px] pb-[95px] mx-4 px-4 md:px-0 ">
                    <h3 className="text-white text-4xl font-semibold">Can&apos;t see a position that interests you?</h3>
                    <p className="text-lg text-white max-w-3xl mx-auto">
                        Didn&apos;t see the right opening for you? Send your resume and cover letter to
                        <a href="mailto:careers@axiom.com" className="font-bold underline underline-offset-2">
                            careers@axiom.com
                        </a>
                        and tell us what you&apos;re looking for.
                    </p>
                </div>
            </section>
        </>
    );
};

export default JobCareer;
