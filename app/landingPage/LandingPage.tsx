import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/LandingPage/Hero/Hero";
import Services from "../components/Services/Services";
import AxiomValues from "../components/LandingPage/Hero/AxiomValues";
import Industries from "../components/LandingPage/Hero/Industries";
import AxiomCTASection from "../components/LandingPage/Hero/CTASection";
import About from "../components/About/About";

const LandingPage = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Services />
            <AxiomValues />
            <Industries />
            <AxiomCTASection />
            <Footer />
        </>
    );
};

export default LandingPage;
