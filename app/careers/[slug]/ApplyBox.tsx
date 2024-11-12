"use client";

import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "@/app/constants/constants";
import { useDropzone } from "react-dropzone";
import { uploadSingleFile } from "@/app/constants/firebase";
const ApplyBox = () => {
    const [formData, setFormData] = useState({
        quoteFirstName: "",
        quoteLastName: "",
        quoteEmail: "",
        quoteMobile: "",
    });

    const [errors, setErrors] = useState({
        quoteFirstName: "",
        quoteLastName: "",
        quoteEmail: "",
        quoteMobile: "",
    });

    const [loading, setLoading] = useState(false);

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" }); // Reset error for the field
    };

    // Validate form inputs
    const validate = () => {
        let formValid = true;
        const newErrors = { ...errors };

        // First Name validation
        if (!formData.quoteFirstName.trim()) {
            newErrors.quoteFirstName = "First Name is required";
            formValid = false;
        }

        // Last Name validation
        if (!formData.quoteLastName.trim()) {
            newErrors.quoteLastName = "Last Name is required";
            formValid = false;
        }

        // Email validation
        if (!formData.quoteEmail.trim()) {
            newErrors.quoteEmail = "Email is required";
            formValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.quoteEmail)) {
            newErrors.quoteEmail = "Email format is invalid";
            formValid = false;
        }

        // Phone number validation
        if (!formData.quoteMobile.trim()) {
            newErrors.quoteMobile = "Phone number is required";
            formValid = false;
        } else if (!/^\d{11}$/.test(formData.quoteMobile)) {
            newErrors.quoteMobile = "Phone number must be exactly 11 digits";
            formValid = false;
        }

        setErrors(newErrors);
        return formValid;
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Validate the form
        if (!validate()) return;

        // Send the form data to the backend
        try {
            setLoading(true);
            const response = await axios.post(`${backendUrl}/api/v1/jobApplications`, formData);

            if (response.status === 201) {
                setLoading(false);
                alert("Form submitted successfully!");
                // Reset the form after successful submission
                setFormData({
                    quoteFirstName: "",
                    quoteLastName: "",
                    quoteEmail: "",
                    quoteMobile: "",
                });
            } else {
                alert("Form submission failed. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            alert("An error occurred while submitting the form.");
            setLoading(false);
        }
    };

    const [resume, setResume] = useState<File | null>(null);

    // Handle Dropzone file upload
    const onDrop = (acceptedFiles: File[]) => {
        const selectedFile = acceptedFiles[0];
        setResume(selectedFile); // Save the first selected file
    
        // Check if the file exists, then upload with all necessary parameters
        if (selectedFile) {
            uploadSingleFile({
                file: selectedFile,
                folderName: "resumes", // Example folder name; adjust as needed
                urlSetter: (url: string) => console.log("Uploaded file URL:", url), // Replace with actual URL setter
                setProgress: (progress: number) => console.log("Upload progress:", progress), // Replace with actual progress setter
            });
        }
    };
    

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: { "application/pdf": [".pdf"] }, // Accept PDF files only
        maxFiles: 1, // Limit to one file
    });




    return (
        <div className="bg-[#EDF3FF] rounded-3xl p-10 h-fit">
            <h3 className="font-semibold text-[26px] text-[#1E1E1E]">Apply for this Job</h3>
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6  pb-10   pt-10 ">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="relative w-full mb-4">
                        <input id="quoteFirstName" name="quoteFirstName" type="text" className="w-full px-3 py-2 bg-transparent border-b border-[#305075] focus:outline-none peer" value={formData.quoteFirstName} onChange={handleInputChange} required />
                        <label htmlFor="quoteFirstName" className={`absolute left-3 top-2 text-sm text-gray-400 transition-all duration-200 transform ${formData.quoteFirstName ? "-translate-y-6 scale-90 text-blue-500" : ""} peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-500`}>
                            First Name*
                        </label>
                        {errors.quoteFirstName && <p className="text-red-500 text-sm mt-1">{errors.quoteFirstName}</p>}
                    </div>

                    {/* Last Name */}
                    <div className="relative w-full mb-4">
                        <input id="quoteLastName" name="quoteLastName" type="text" className="w-full px-3 py-2 bg-transparent border-b border-[#305075] focus:outline-none peer" value={formData.quoteLastName} onChange={handleInputChange} required />
                        <label htmlFor="quoteLastName" className={`absolute left-3 top-2 text-sm text-gray-400 transition-all duration-200 transform ${formData.quoteLastName ? "-translate-y-6 scale-90 text-blue-500" : ""} peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-500`}>
                            Last Name*
                        </label>
                        {errors.quoteLastName && <p className="text-red-500 text-sm mt-1">{errors.quoteLastName}</p>}
                    </div>

                    {/* Email Field */}
                    <div className="relative w-full mb-4">
                        <input id="quoteEmail" name="quoteEmail" type="email" className="w-full px-3 py-2 bg-transparent border-b border-[#305075] focus:outline-none peer" value={formData.quoteEmail} onChange={handleInputChange} required />
                        <label htmlFor="quoteEmail" className={`absolute left-3 top-2 text-sm text-gray-400 transition-all duration-200 transform ${formData.quoteEmail ? "-translate-y-6 scale-90 text-blue-500" : ""} peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-500`}>
                            Email*
                        </label>
                        {errors.quoteEmail && <p className="text-red-500 text-sm mt-1">{errors.quoteEmail}</p>}
                    </div>

                    {/* Phone Field */}
                    <div className="relative w-full mb-4">
                        <input id="quoteMobile" name="quoteMobile" type="tel" className="w-full px-3 py-2 bg-transparent border-b border-[#305075] focus:outline-none peer" value={formData.quoteMobile} onChange={handleInputChange} required />
                        <label htmlFor="quoteMobile" className={`absolute left-3 top-2 text-sm text-gray-400 transition-all duration-200 transform ${formData.quoteMobile ? "-translate-y-6 scale-90 text-blue-500" : ""} peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-500`}>
                            Phone*
                        </label>
                        {errors.quoteMobile && <p className="text-red-500 text-sm mt-1">{errors.quoteMobile}</p>}
                    </div>

                    {/* Resume Dropzone */}
                    <div {...getRootProps()} className="border-2 border-dashed rounded-lg p-4 text-center">
                        <input {...getInputProps()} />
                        {resume ? <p className="text-green-500">Selected file: {resume.name}</p> : <p>Drag & drop your resume here, or click to select (PDF only)</p>}
                    </div>
                </div>
                {/* Submit Button */}
                <button type="submit" className="bg-[var(--Blue-Color)] hover:bg-[#011633] w-full text-lg text-white font-medium py-3 px-6 rounded-md  hover:text-white transition-colors duration-300">
                    {!loading ? "Apply Now" : "Submitting..."}
                </button>
            </form>
        </div>
    );
};

export default ApplyBox;
