import React from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/LandingPage/Hero/Hero"));
const About = dynamic(() => import("../components/About/About"));
const Services = dynamic(() => import("../components/Services/Services"));
const AxiomValues = dynamic(() => import("../components/LandingPage/Hero/AxiomValues"));
const Industries = dynamic(() => import("../components/LandingPage/Hero/Industries"));
const AxiomCTASection = dynamic(() => import("../components/LandingPage/Hero/CTASection"));

const LandingPage = () => {
    return (
        <>
            
            <Hero />
            <About />
            <Services />
            <AxiomValues />
            <Industries />
            <AxiomCTASection />
           
        </>
    );
};

export default LandingPage;
