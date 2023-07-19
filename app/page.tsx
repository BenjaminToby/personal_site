import React from "react";
import Hero from "./(components)/Hero";
import AboutSection from "./(components)/AboutSection";

export default function Homepage() {
    return (
        <React.Fragment>
            <Hero />
            <AboutSection />
        </React.Fragment>
    );
}
