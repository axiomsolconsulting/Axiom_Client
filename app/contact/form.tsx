"use client";

import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../constants/constants";
import { ChevronDown } from "lucide-react";

type FormProps = {
    onFormSuccess?: () => void; // Define onFormSuccess as an optional function
  };
  
  const Form: React.FC<FormProps> = ({ onFormSuccess }) => {
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

    const [loading, setLoading] = useState(false);

    console.log("loading", loading);

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
        e.preventDefault();

        if (!validate()) return;

        try {
            setLoading(true);
            const response = await axios.post(`${backendUrl}/api/v1/quote`, formData);

            if (response.status === 201) {
                setLoading(false);
                // Call the success callback instead of showing alert
                if (onFormSuccess) {
                    onFormSuccess();
                }
                // Reset the form
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
                <h2 className="text-4xl lg:text-[44px] lg:leading-[60px] font-semibold">
                    We will be happy to tell you more about what <span className="text-[var(--Blue-Color)] italic">WE CAN DO</span> for you
                </h2>
                <p className="text-[#7B8CA3] text-lg max-w-xl mt-5">We&apos;d love to connect with you and learn more about what we can build together. Tell us a few details and we&apos;ll be in touch.</p>
            </div>
            {/* Contact Forn */}
            <form onSubmit={handleSubmit} className="space-y-6  bg-[#011330] border-b-0 pb-10 rounded-t-[20px] px-10 pt-10">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative w-full">
                        <input id="quoteName" name="quoteName" type="text" className="w-full px-3 py-2 bg-[#011330] border-b border-[#305075] focus:outline-none " value={formData.quoteName} onChange={handleInputChange} required />
                        <label htmlFor="quoteName" className={`absolute left-3 top-2 text-sm text-gray-400 transition-all duration-200 transform ${formData.quoteName ? "-translate-y-6 scale-90 text-blue-500" : ""} peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-500`}>
                            Your Name*
                        </label>
                        {errors.quoteName && <p className="text-red-500 text-sm mt-1">{errors.quoteName}</p>}
                    </div>

                    {/* Email Field */}
                    <div className="relative w-full mb-4">
                        <input id="quoteEmail" name="quoteEmail" type="email" className="w-full px-3 py-2 bg-[#011330] border-b border-[#305075] focus:outline-none peer" value={formData.quoteEmail} onChange={handleInputChange} required />
                        <label htmlFor="quoteEmail" className={`absolute left-3 top-2 text-sm text-gray-400 transition-all duration-200 transform ${formData.quoteEmail ? "-translate-y-6 scale-90 text-blue-500" : ""} peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-500`}>
                            Email*
                        </label>
                        {errors.quoteEmail && <p className="text-red-500 text-sm mt-1">{errors.quoteEmail}</p>}
                    </div>

                    {/* Phone Field */}
                    <div className="relative w-full mb-4">
                        <input id="quoteMobile" name="quoteMobile" type="tel" className="w-full px-3 py-2 bg-[#011330] border-b border-[#305075] focus:outline-none peer" value={formData.quoteMobile} onChange={handleInputChange} required />
                        <label htmlFor="quoteMobile" className={`absolute left-3 top-2 text-sm text-gray-400 transition-all duration-200 transform ${formData.quoteMobile ? "-translate-y-6 scale-90 text-blue-500" : ""} peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-500`}>
                            Phone*
                        </label>
                        {errors.quoteMobile && <p className="text-red-500 text-sm mt-1">{errors.quoteMobile}</p>}
                    </div>

                    {/* Technology Field */}

                    <div className="relative w-full mb-4">
                        <select id="quoteTechnology" name="quoteTechnology" className="w-full px-3 py-2 bg-[#011330] border-b border-[#305075] appearance-none focus:outline-none  peer" value={formData.quoteTechnology} onChange={handleInputChange} required>
                            <option value="" disabled hidden></option>
                            <option value="Web Development">Web Development</option>
                            <option value="Mobile Development">Mobile Development</option>
                            <option value="Cloud Solutions">Cloud Solutions</option>
                            <option value="Consulting">Consulting</option>
                        </select>

                        <label htmlFor="quoteTechnology" className={`absolute left-3 top-2 text-sm text-gray-400 transition-all duration-200 transform ${formData.quoteTechnology ? "-translate-y-6 scale-90 text-blue-500" : ""} peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-500`}>
                            How Can We Help*
                        </label>

                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />

                        {errors.quoteTechnology && <p className="text-red-500 text-sm mt-1">{errors.quoteTechnology}</p>}
                    </div>

                    {/* <div className="space-y-2">
            <label htmlFor="quoteTechnology" className="text-sm">
              How Can We Help*
            </label>
            <div className="relative">
              <select
                id="quoteTechnology"
                name="quoteTechnology"
                className="w-full px-3 py-2 bg-[#011330] border-b border-[#305075] appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.quoteTechnology}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a service</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile Development">Mobile Development</option>
                <option value="Cloud Solutions">Cloud Solutions</option>
                <option value="Consulting">Consulting</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
            {errors.quoteTechnology && (
              <p className="text-red-500 text-sm">{errors.quoteTechnology}</p>
            )}
          </div> */}
                </div>

                {/* Description Field */}
                <div className="relative w-full mb-4">
                    <textarea id="quoteDescription" name="quoteDescription" className="w-full px-3 py-2 bg-[#011330] border-b border-[#305075] min-h-[120px] focus:outline-none peer" value={formData.quoteDescription} onChange={handleInputChange} required></textarea>
                    <label htmlFor="quoteDescription" className={`absolute left-3 top-2 text-sm text-gray-400 transition-all duration-200 transform ${formData.quoteDescription ? "-translate-y-6 scale-90 text-blue-500" : ""} peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-500`}>
                        Your Message*
                    </label>
                    {errors.quoteDescription && <p className="text-red-500 text-sm mt-1">{errors.quoteDescription}</p>}
                </div>

                <div className="flex justify-end">
                    <button type="submit" className="bg-[var(--Blue-Color)] text-lg text-white font-medium py-3 px-6 rounded-md hover:bg-white hover:text-black transition-colors duration-300">
                        {!loading ? "Submit" : "Submitting..."}
                    </button>
                </div>
            </form>
        </>
    );
};

export default Form;