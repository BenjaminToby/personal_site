"use client";

import React from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
gsap.registerPlugin(TextPlugin);

export default function Hero() {
    /**
     * Handle animations on page load
     */
    React.useEffect(() => {
        const tl = gsap.timeline();

        gsap.fromTo(
            "#hero-sub-text",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 0.5,
                duration: 1,
            }
        );
        gsap.to("#hero-text", {
            text: "I'm Benjamin Toby, a Software Engineer and UI/UX expert.",
            delay: 1,
            duration: 2,
            ease: "none",
        });
        gsap.fromTo(
            ".hero-button-link",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 3,
                duration: 1,
                stagger: 0.5,
            }
        );
    }, []);

    /**
     * Render component
     */
    return (
        <div
            className="flex flex-col xl:flex-row items-center gap-0 justify-center -mt-[80px] xl:-mt-[160px] w-full relative pt-[500px] xl:pt-0 page-section"
            id="hero-content-wrapper"
        >
            <div
                className="rounded-full max-w-[450px] absolute md:relative flex items-center md:items-start justify-center mr-0 xl:-mr-14 bg-[#3e3f9c] overflow-hidden"
                id="main-image"
                style={{
                    transform: "scale(1.2)",
                }}
            >
                <img
                    src="/images/my-photo-stroked.png"
                    width={500}
                    height={562}
                    alt="Benjamin Toby Image"
                    className="contrast-[140%] grayscale mt-20 flex items-center justify-center object-contain"
                />
            </div>

            <div
                className="max-w-2xl relative z-10 mt-10 w-full"
                id="hero-text-section"
            >
                <span
                    id="hero-sub-text"
                    className="uppercase bg-primary_light text-[black]/80 font-bold px-3 py-1 tracking-wide"
                >
                    Howdy Tech Enthusiasts
                </span>
                <div className="h-4"></div>
                <h1
                    className="text-5xl md:text-[58px] leading-[1.1] gsap-text h-auto xl:h-[220px]"
                    id="hero-text"
                ></h1>

                <div className="h-10 flex xl:hidden"></div>

                <div className="gap-4 flex items-center flex-wrap">
                    <a
                        href="https://www.linkedin.com/in/benjamin-toby/"
                        target="_blank"
                        className="button grow hero-button-link"
                    >
                        Linkedin
                    </a>
                    <a
                        href="/contact"
                        style={{
                            backgroundColor: "transparent",
                            color: "white",
                            border: "2px solid white",
                        }}
                        className="button grow hero-button-link"
                    >
                        Contact Me
                    </a>
                    <a
                        href="/documents/Resume-Benjamin-Toby-Linkedin.pdf"
                        download={true}
                        className="button grow hero-button-link"
                        style={{
                            backgroundColor: "transparent",
                            color: "white",
                            border: "2px solid white",
                        }}
                    >
                        See my resume
                    </a>
                </div>
            </div>
        </div>
    );
}
