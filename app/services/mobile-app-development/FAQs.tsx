import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

const FAQs = () => {
    const faqs = [
        {
            question: "What services does Axiom provide?",
            answer: "Axiom provides comprehensive digital solutions including web development, mobile app development, cloud services, and digital transformation consulting. Our services are tailored to meet your specific business needs.",
        },
        {
            question: "How does the project initiation process work?",
            answer: "Maecenas sit amet ex sed felis ultricies venenatis id non magna. Proin commodo est ac eleifend hendrerit. Donec at volutpat ex, nec sodales orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum viverra risus mi.",
        },
        {
            question: "How long does it take to complete a typical project?",
            answer: "Project timelines vary based on scope and complexity. We provide detailed estimates during the initial consultation and maintain transparent communication throughout the development process.",
        },
        {
            question: "What is Axiom's approach to develop a website?",
            answer: "We follow a systematic approach including discovery, planning, design, development, testing, and deployment. Our process ensures high-quality results that align with your business objectives.",
        },
    ];

    return (
        <>
            <section className="custom-container grid lg:grid-cols-2 py-20 gap-x-5" >
                <div className="mb-16">
                    <h2 className="text-[44px] leading-[60px] font-semibold mb-5">
                        Got Questions? <br /> We’ve Got Answers!
                    </h2>
                    <p className="text-[#454545] max-w-lg mb-[60px]">Want to discuss your project ideas, or are ready to start planning your next digital transformation, we’ve got the answers you’re looking for. Reach out to us today, and let’s bring your vision to life with expert guidance and support from Axiom!</p>
                    <Link href="/contact" className="bg-[var(--Blue-Color)] text-lg text-white font-medium py-5 px-6 rounded-md hover:bg-[#011633] transition-colors duration-300">
                        Book a Call
                    </Link>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border rounded-[8px] px-7 hover:border-[#002FF5] hover:shadow-faq-shadow ">
                            <AccordionTrigger className="text-[#2B3E61] !no-underline text-xl font-semibold">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-[#304874] text-lg">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>
        </>
    );
};

export default FAQs;
