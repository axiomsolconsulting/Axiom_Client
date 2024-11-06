"use client";

import React from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../constants/constants";

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
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        if (!validate()) {
            return;
        }

        console.log("Form Submitted : ", formData);
        // setFormData({
        //   quoteName: "",
        //   quoteEmail: "",
        //   quoteMobile: "",
        //   quoteTechnology: "",
        //   quoteDescription: "",
        // });

        // Send the form data to the backend
        try {
            const response = await axios.post(`${backendUrl}/api/v1/quote`, formData);

            //   // const result = await response.json();

            if (response.status === 201) {
                alert("Form submitted successfully!");
                // Optionally, reset the form fields after successful submission
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Make a Free Consulting</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <input type="text" id="quoteName" name="quoteName" placeholder="Full Name" value={formData.quoteName} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--Blue-Color)]" />
                        {errors.quoteName && <p className="text-red-500">{errors.quoteName}</p>}
                    </div>
                    <div>
                        <input type="email" id="quoteEmail" name="quoteEmail" placeholder="Email" value={formData.quoteEmail} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--Blue-Color)]" />
                        {errors.quoteEmail && <p className="text-red-500">{errors.quoteEmail}</p>}
                    </div>
                </div>

                <div>
                    <input type="number" id="quoteMobile" name="quoteMobile" placeholder="Phone" value={formData.quoteMobile} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--Blue-Color)]" />
                    {errors.quoteMobile && <p className="text-red-500">{errors.quoteMobile}</p>}
                </div>

                <div>
                    <input type="text" id="quoteTechnology" name="quoteTechnology" placeholder="Interested In" value={formData.quoteTechnology} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--Blue-Color)]" />
                    {errors.quoteTechnology && <p className="text-red-500">{errors.quoteTechnology}</p>}
                </div>

                <div>
                    <textarea id="quoteDescription" name="quoteDescription" rows={4} placeholder="Message" value={formData.quoteDescription} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--Blue-Color)]"></textarea>
                    {errors.quoteDescription && <p className="text-red-500">{errors.quoteDescription}</p>}
                </div>

                <button type="submit" className="w-full bg-[var(--Blue-Color)] hover:bg-[var(--Dark-Blue-Color)] text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">
                    Submit
                </button>
            </form>
        </>
    );
};

export default Form;
