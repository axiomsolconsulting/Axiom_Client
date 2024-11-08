"use client";

import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../constants/constants";
import { ChevronDown } from "lucide-react";

const Form = () => {
    const [formData, setFormData] = useState({
        quoteName: "",
        quoteEmail: "",
        quoteMobile: "",
        quoteTechnology: "",
        quoteDescription: "",
    });

    const [errors, setErrors] = useState({
        quoteName: "",
        quoteEmail: "",
        quoteMobile: "",
        quoteTechnology: "",
        quoteDescription: "",
    });

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" }); // Reset error for the field
    };

    // Validate form inputs
    const validate = () => {
        let formValid = true;
        const newErrors = { ...errors };

        // Name validation (required)
        if (!formData.quoteName.trim()) {
            newErrors.quoteName = "Full Name is required";
            formValid = false;
        }

        // Email validation (required and format)
        if (!formData.quoteEmail.trim()) {
            newErrors.quoteEmail = "Email is required";
            formValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.quoteEmail)) {
            newErrors.quoteEmail = "Email format is invalid";
            formValid = false;
        }

        // Phone number validation (required, number, and length)
        if (!formData.quoteMobile.trim()) {
            newErrors.quoteMobile = "Phone number is required";
            formValid = false;
        } else if (!/^\d{11}$/.test(formData.quoteMobile)) {
            newErrors.quoteMobile = "Phone number must be exactly 11 digits";
            formValid = false;
        }

        // Technology field validation (required)
        if (!formData.quoteTechnology.trim()) {
            newErrors.quoteTechnology = "This field is required";
            formValid = false;
        }

        // Description field validation (required)
        if (!formData.quoteDescription.trim()) {
            newErrors.quoteDescription = "Description is required";
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
            const response = await axios.post(`${backendUrl}/api/v1/quote`, formData);

            if (response.status === 201) {
                alert("Form submitted successfully!");
                // Reset the form after successful submission
                setFormData({
                    quoteName: "",
                    quoteEmail: "",
                    quoteMobile: "",
                    quoteTechnology: "",
                    quoteDescription: "",
                });
            } else {
                alert("Form submission failed. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            alert("An error occurred while submitting the form.");
        }
    };

    return (
        <>
            <div>
                <h2 className="text-[44px] leading-[60px] font-semibold">
                    We will be happy to tell you more about what <span className="text-[var(--Blue-Color)] italic">WE CAN DO</span> for you
                </h2>
                <p className="text-[#7B8CA3] text-lg max-w-xl mt-5">We&apos;d love to connect with you and learn more about what we can build together. Tell us a few details and we&apos;ll be in touch.</p>
            </div>
            {/* Contact Forn */}
            <form onSubmit={handleSubmit} className="space-y-6 border border-b-0 pb-10 rounded-t-[20px] px-10 pt-10">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="quoteName" className="text-sm">
                            Your Name*
                        </label>
                        <input id="quoteName" name="quoteName" type="text" className="w-full px-3 py-2 bg-[#011330] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.quoteName} onChange={handleInputChange} required />
                        {errors.quoteName && <p className="text-red-500 text-sm">{errors.quoteName}</p>}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                        <label htmlFor="quoteEmail" className="text-sm">
                            Email*
                        </label>
                        <input id="quoteEmail" name="quoteEmail" type="email" className="w-full px-3 py-2 bg-[#011330] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.quoteEmail} onChange={handleInputChange} required />
                        {errors.quoteEmail && <p className="text-red-500 text-sm">{errors.quoteEmail}</p>}
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-2">
                        <label htmlFor="quoteMobile" className="text-sm">
                            Phone*
                        </label>
                        <input id="quoteMobile" name="quoteMobile" type="tel" className="w-full px-3 py-2 bg-[#011330] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.quoteMobile} onChange={handleInputChange} required />
                        {errors.quoteMobile && <p className="text-red-500 text-sm">{errors.quoteMobile}</p>}
                    </div>

                    {/* Technology Field */}
                    <div className="space-y-2">
                        <label htmlFor="quoteTechnology" className="text-sm">
                            How Can We Help*
                        </label>
                        <div className="relative">
                            <select id="quoteTechnology" name="quoteTechnology" className="w-full px-3 py-2 bg-[#011330] border border-gray-700 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.quoteTechnology} onChange={handleInputChange} required>
                                <option value="">Select a service</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Mobile Development">Mobile Development</option>
                                <option value="Cloud Solutions">Cloud Solutions</option>
                                <option value="Consulting">Consulting</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                        {errors.quoteTechnology && <p className="text-red-500 text-sm">{errors.quoteTechnology}</p>}
                    </div>
                </div>

                {/* Description Field */}
                <div className="space-y-2">
                    <label htmlFor="quoteDescription" className="text-sm">
                        Your Message*
                    </label>
                    <textarea id="quoteDescription" name="quoteDescription" className="w-full px-3 py-2 bg-[#011330] border border-gray-700 rounded-md min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.quoteDescription} onChange={handleInputChange} required></textarea>
                    {errors.quoteDescription && <p className="text-red-500 text-sm">{errors.quoteDescription}</p>}
                </div>

                <div className="flex justify-end">
                    <button type="submit" className="bg-[var(--Blue-Color)] text-lg text-white font-medium py-3 px-6 rounded-md hover:bg-white hover:text-black transition-colors duration-300">
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};

export default Form;
