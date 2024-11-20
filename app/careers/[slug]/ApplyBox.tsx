"use client";

import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "@/app/constants/constants";
import { useDropzone } from "react-dropzone";
import { uploadSingleFile } from "@/app/constants/firebase";
import upload from "@/public/upload.svg";
import Image from "next/image";
import { X } from "lucide-react";
import Link from "next/link";

const ApplyBox = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
        email: "",
        resume: "",
        contactNumber: "",
    });

    const [errors, setErrors] = useState({
        FirstName: "",
        LastName: "",
        email: "",
        contactNumber: "",
        resume: "",
    });

    const [loading, setLoading] = useState(false);
    const [uploadingResume, setUploadingResume] = useState(false);

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    // Validate form inputs
    const validate = () => {
        let formValid = true;
        const newErrors = { ...errors };

        if (!formData.FirstName.trim()) {
            newErrors.FirstName = "First Name is required";
            formValid = false;
        }

        if (!formData.LastName.trim()) {
            newErrors.LastName = "Last Name is required";
            formValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            formValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email format is invalid";
            formValid = false;
        }

        if (!formData.contactNumber.trim()) {
            newErrors.contactNumber = "Phone number is required";
            formValid = false;
        } else if (!/^\d{11}$/.test(formData.contactNumber)) {
            newErrors.contactNumber = "Phone number must be exactly 11 digits";
            formValid = false;
        }

        if (!resume || !formData.resume) {
            newErrors.resume = "Resume is required";
            formValid = false;
        }

        setErrors(newErrors);
        return formValid;
    };

    const [resume, setResume] = useState<File | null>(null);

    const onDrop = async (acceptedFiles: File[]) => {
        const selectedFile = acceptedFiles[0];
        setResume(selectedFile);
        setUploadingResume(true);
        setErrors({ ...errors, resume: "" });

        if (selectedFile) {
            try {
                const url = await uploadSingleFile({
                    file: selectedFile,
                    folderName: "resumes",
                    setProgress: (progress: number) => console.log("Upload progress:", progress),
                });
                console.log("Uploaded file URL:", url);
                setFormData(prev => ({ ...prev, resume: url }));
            } catch (error) {
                console.error("Failed to upload file:", error);
                setErrors(prev => ({ ...prev, resume: "Failed to upload resume. Please try again." }));
                setResume(null);
            } finally {
                setUploadingResume(false);
            }
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: { "application/pdf": [".pdf"] },
        maxFiles: 1,
    });

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (uploadingResume) {
            alert("Please wait for resume upload to complete");
            return;
        }

        if (!validate()) return;

        try {
            setLoading(true);
            const response = await axios.post(`${backendUrl}/api/v1/jobApplications`, formData);
            
            if (response.status === 201) {
                setLoading(false);
                setIsSubmitted(true); // Show thank you message
                // Reset form state
                setFormData({
                    FirstName: "",
                    LastName: "",
                    email: "",
                    resume: "",
                    contactNumber: "",
                });
                setResume(null);
            } else {
                alert("Form submission failed. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            alert("An error occurred while submitting the form.");
        } finally {
            setLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className=" flex flex-col items-center text-center py-10 bg-[#EDF3FF] rounded-3xl p-10 h-fit">
                <h2 className="text-6xl  leading-none font-bold">
                    Thank You<span className="text-[var(--Blue-Color)]">.</span>
                </h2>
                <h3 className="text-2xl  font-semibold mt-6">
                    We&apos;ve got your Application.
                </h3>
                <p className="text-[#454545] text-lg mb-6 mt-4">
                    Thanks for Applied. Our team will reach out to you as soon as possible.
                </p>
                <Link
                    href="/careers"
                    className="bg-[var(--Blue-Color)] text-white font-semibold py-4 px-8 rounded-md hover:bg-black transition-colors duration-300"
                >
                    Back to Careers
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-[#EDF3FF] rounded-3xl p-10 h-fit">
            <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-semibold text-[26px] text-[#1E1E1E]">Apply for this Job</h3>
                {/* Resume Dropzone */}
                <div {...getRootProps()} className="relative border-2 border-dashed border-[#B7BFD0] rounded-lg px-4 py-5 text-center bg-[#DEE6F6]">
                    <input {...getInputProps()} />
                    {resume ? (
                        <div className="flex items-center justify-between">
                            <p className={uploadingResume ? "text-yellow-500" : "text-green-500"}>
                                {uploadingResume ? "Uploading: " : "Selected file: "}{resume.name}
                            </p>
                            <button
                                className="absolute top-1 right-2 hover:bg-slate-300 p-2 rounded-full focus:outline-none"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setResume(null);
                                    setFormData((prev) => ({ ...prev, resume: "" }));
                                }}
                                disabled={uploadingResume}
                            >
                                <X className="" />
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-[10px] cursor-pointer">
                            <p className="underline underline-offset-4 flex justify-center gap-x-2 font-semibold text-[var(--Blue-Color)]">
                                <Image src={upload} alt="upload"></Image>
                                Upload resume
                            </p>
                            <p>10mb max file size (Allowed file types are .doc, .pdf, .docx,)</p>
                            {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
                        </div>
                    )}
                </div>
                {/* Form fields */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="relative w-full mb-4">
                        <input id="FirstName" name="FirstName" type="text" className="w-full px-3 py-2 bg-transparent border-b border-[#305075] focus:outline-none peer" value={formData.FirstName} onChange={handleInputChange} required />
                        <label htmlFor="FirstName" className={`absolute left-3 top-2 text-sm text-gray-400 transition-all duration-200 transform ${formData.FirstName ? "-translate-y-6 scale-90 text-blue-500" : ""} peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-500`}>
                            First Name*
                        </label>
                        {errors.FirstName && <p className="text-red-500 text-sm mt-1">{errors.FirstName}</p>}
                    </div>

                    {/* Last Name */}
                    <div className="relative w-full mb-4">
                        <input id="LastName" name="LastName" type="text" className="w-full px-3 py-2 bg-transparent border-b border-[#305075] focus:outline-none peer" value={formData.LastName} onChange={handleInputChange} required />
                        <label htmlFor="LastName" className={`absolute left-3 top-2 text-sm text-gray-400 transition-all duration-200 transform ${formData.LastName ? "-translate-y-6 scale-90 text-blue-500" : ""} peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-500`}>
                            Last Name*
                        </label>
                        {errors.LastName && <p className="text-red-500 text-sm mt-1">{errors.LastName}</p>}
                    </div>

                    {/* Email Field */}
                    <div className="relative w-full mb-4">
                        <input id="email" name="email" type="email" className="w-full px-3 py-2 bg-transparent border-b border-[#305075] focus:outline-none peer" value={formData.email} onChange={handleInputChange} required />
                        <label htmlFor="email" className={`absolute left-3 top-2 text-sm text-gray-400 transition-all duration-200 transform ${formData.email ? "-translate-y-6 scale-90 text-blue-500" : ""} peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-500`}>
                            Email*
                        </label>
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone Field */}
                    <div className="relative w-full mb-4">
                        <input id="contactNumber" name="contactNumber" type="tel" className="w-full px-3 py-2 bg-transparent border-b border-[#305075] focus:outline-none peer" value={formData.contactNumber} onChange={handleInputChange} required />
                        <label htmlFor="contactNumber" className={`absolute left-3 top-2 text-sm text-gray-400 transition-all duration-200 transform ${formData.contactNumber ? "-translate-y-6 scale-90 text-blue-500" : ""} peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-500`}>
                            Phone*
                        </label>
                        {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>}
                    </div>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    className="bg-[var(--Blue-Color)] hover:bg-[#011633] w-full text-lg text-white font-medium py-3 px-6 rounded-md hover:text-white transition-colors duration-300"
                    disabled={loading || uploadingResume}
                >
                    {uploadingResume ? "Uploading Resume..." : loading ? "Submitting..." : "Apply Now"}
                </button>
            </form>
        </div>
    );
};

export default ApplyBox;