"use client";

import React from "react";
import Image from "next/image";
// import TextShuffler from "../../components/actions/TextShuffler";
import { hero } from "../(utils)/animate";

export default function Hero() {
    React.useEffect(hero, []);

    return (
        <div>
            <div className="flex flex-col xl:flex-row items-center gap-0 justify-center -mt-[80px] xl:-mt-[160px] w-full relative pt-[500px] md:pt-0">
                <div
                    className="rounded-full max-w-[450px] absolute md:relative top-0 flex items-center md:items-start justify-center mr-0 xl:-mr-14 bg-[#3e3f9c] overflow-hidden"
                    id="main-image"
                >
                    <Image
                        src="/images/my-photo.png"
                        // fill
                        width={500}
                        height={562}
                        objectFit="contain"
                        alt="Benjamin Toby Image"
                        className="contrast-[140%] grayscale mt-20 flex items-center justify-center"
                    />
                </div>

                <div
                    className="max-w-2xl relative z-10 mt-10 w-full"
                    id="hero-text-section"
                >
                    <h1
                        className="text-4xl md:text-5xl leading-snug"
                        id="hero-text"
                    >
                        I'm Benjamin Toby, a Software Engineer and UI/UX expert
                        {/* Fullstack developer, UI/UX designer, Software Engineer, welcome */}
                        {/* <TextShuffler
                            textInput="I'm Benjamin Toby, a Software Engineer and UI/UX expert"
                            delay={500}
                        /> */}
                    </h1>

                    <div className="gap-4 flex items-center flex-wrap">
                        <a
                            href="/documents/Resume-Benjamin-Toby-Linkedin.pdf"
                            download={true}
                            className="button grow"
                        >
                            See my resume
                        </a>
                        <a
                            href="https://www.linkedin.com/in/benjamin-toby/"
                            target="_blank"
                            className="button grow"
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
                            className="button grow"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
