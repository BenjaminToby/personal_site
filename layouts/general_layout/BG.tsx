"use client";

import React from "react";
import { gsap } from "gsap";
// import scrollTrigger from "gsap/ScrollTrigger";

const BG = () => {
    React.useEffect(() => {
        // gsap.registerPlugin(scrollTrigger);

        gsap.to("#bg-blurred-image", {
            scrollTrigger: {
                scrub: 5,
            },
            y: 50,
            scale: 0.8,
        });

        gsap.to("#bg-image", {
            scrollTrigger: {
                scrub: 2,
            },
            y: 50,
            opacity: 0,
        });
    }, []);

    return (
        <React.Fragment>
            <img
                src="/images/rm378-07c-min.png"
                alt="bg-image"
                className="fixed top-0 left-0 w-full h-full object-cover z-[-2] p-[100px] opacity-20 blur-sm"
                id="bg-blurred-image"
            />
            <img
                src="/images/rm378-07c-min.png"
                alt="bg-image"
                className="fixed top-0 left-0 w-full h-full object-cover z-[-1] p-[150px] opacity-5"
                id="bg-image"
            />
        </React.Fragment>
    );
};

export default BG;
