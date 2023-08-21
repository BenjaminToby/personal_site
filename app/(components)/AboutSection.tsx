/** # MODULE TRACE 
======================================================================
 * Detected 1 files that call this module. The files are listed below:
======================================================================
 * `import` Statement Found in [HomepageComponent.tsx] => file:///d:\GitHub\personal_site\app\(components)\HomepageComponent.tsx
==== MODULE TRACE END ==== */

"use client";

import React from "react";

export default function AboutSection() {
    return (
        <div
            className="max-w-6xl w-full flex flex-col items-center pb-40 generic-scroll page-section"
            id="about-section"
        >
            <div className="h-44"></div>

            <div className="flex flex-col xl:flex-row w-full gap-8">
                <div className="w-full xl:w-[40%]"></div>

                <div className="w-full xl:w-[60%] px-4 md:px-6 py-2">
                    <section className="flex flex-col items-start gap-4">
                        <h2 className="mb-0">About Me</h2>

                        <span className="text-[24px]">Quick learner, adaptable, problem solver, curious. I strive to know the system, rather than the status quo. I thrive in difficult situations and complex hurdles: problem solving is now second nature to me.</span>

                        <hr className="w-full my-8" />

                        <h3 className="m-0">_ Code Ben</h3>
                        <span className="text-[24px]">In the last two years I've developed from a complete designer to pro software engineer. After countless days of writing code, debugging, testing, building projects, server administration, deployment, CI/CD, etc, I've developed the most vital skill of all: adaptability. The ability to asimilate new knowledge at record pace: the tech industry moves really fast: you either keepup, or fall behind.</span>

                        <hr className="w-full my-8" />

                        <h3 className="m-0">Graphic Design</h3>
                        <span className="text-[24px]">
                            After spending about 5 years in the design industry, I've picked up a few vital concepts about UI/UX design. My design path still sips into my developer life: and I must say, it's the perfect harmony of modern tech. Some of my designs can be found on my{" "}
                            <a
                                href="https://99designs.com/profiles/tben"
                                target="_blank"
                            >
                                99designs
                            </a>{" "}
                            profile.
                        </span>

                        <hr className="w-full my-8" />

                        <a
                            href="/about"
                            className="button outlined"
                        >
                            Learn More About Me
                        </a>
                    </section>
                </div>
            </div>
        </div>
    );
}
