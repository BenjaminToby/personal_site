"use client";

import React from "react";
import TextShuffler from "../../components/actions/TextShuffler";
import { about } from "../(utils)/animate";

export default function AboutSection() {
    React.useEffect(about, []);

    const webDevStack = require("../(utils)/web-dev-stack.json");
    const uiStack = require("../(utils)/ui-ux-stack.json");

    const [targetStack, setTargetStack] = React.useState("dev");

    return (
        <div
            className="max-w-6xl w-full flex flex-col items-center pb-40"
            id="about-section"
        >
            {/* <span
                className="text-[300px] uppercase absolute whitespace-nowrap opacity-5 -mt-64 z-[-1]"
                id="about-me-label"
            >
                About Me
            </span> */}
            <div className="h-44"></div>

            <div className="flex flex-col xl:flex-row w-full gap-8">
                <div className="w-full xl:w-[40%]">
                    <h2>
                        <TextShuffler textInput="About Me" />
                    </h2>

                    <div className="flex flex-col-reverse xl:flex-col items-start gap-4">
                        <div className="flex flex-col w-full gap-2">
                            <div
                                className={"p-4 cursor-pointer hover:opacity-60" + (targetStack.match(/dev/i) ? " bg-[#343680] w-full xl:w-[120%]" : " w-full border border-solid border-white/10")}
                                onClick={() => {
                                    setTargetStack("dev");
                                }}
                            >
                                <div>Web Dev Stack</div>
                            </div>
                            <div
                                className={"p-4 cursor-pointer hover:opacity-60" + (targetStack.match(/design/i) ? " bg-[#343680] w-full xl:w-[120%]" : " w-full border border-solid border-white/10")}
                                onClick={() => {
                                    setTargetStack("design");
                                }}
                            >
                                <div>UI/UX Stack</div>
                            </div>
                        </div>
                        <span className="hero-sub-text">
                            <TextShuffler
                                textInput="Quick learner, adaptable, problem solver, curious. I strive to know the system, rather than the status quo. My credo is: no problem too great, no knowledge too vast, no logic too complex. I thrive in difficult situations and complex hurdles: problem solving is now second nature to me: if you can think it, it can be done."
                                delay={500}
                            />
                        </span>

                        <a
                            href="/about"
                            className="button"
                        >
                            Learn More About Me
                        </a>
                    </div>
                </div>

                <div className="w-full xl:w-[60%] bg-[#343680] px-4 md:px-6 py-2">
                    <section>
                        <h3>
                            <TextShuffler textInput={targetStack?.match(/dev/i) ? "Web Dev Tech Stack" : "UI/UX tech stack"} />
                        </h3>
                        <hr />
                        <ul style={{ maxWidth: "800px" }}>
                            {targetStack?.match(/dev/i) ? (
                                <React.Fragment>
                                    {webDevStack.map((item: { title: string; description: string }, index: number) => (
                                        <li
                                            key={index}
                                            className="mb-4"
                                        >
                                            <h4 className="m-0">
                                                <TextShuffler textInput={item.title} />
                                            </h4>
                                            <span className="opacity-80">
                                                <TextShuffler textInput={item.description} />
                                            </span>
                                        </li>
                                    ))}
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {uiStack.map((item: { title: string; description: string }, index: number) => (
                                        <li
                                            key={index}
                                            className="mb-4"
                                        >
                                            <h4 className="m-0">
                                                <TextShuffler textInput={item.title} />
                                            </h4>
                                            <span className="opacity-80">
                                                <TextShuffler textInput={item.description} />
                                            </span>
                                        </li>
                                    ))}
                                </React.Fragment>
                            )}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
