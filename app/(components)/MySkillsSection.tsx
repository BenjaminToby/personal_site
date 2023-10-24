"use client";

import React from "react";

export default function MySkillsSection() {
    const webDevStack = require("../(utils)/web-dev-stack.json");
    const uiStack = require("../(utils)/ui-ux-stack.json");

    const [targetStack, setTargetStack] = React.useState("dev");

    return (
        <div className="max-w-6xl w-full flex flex-col items-start pb-40 page-section">
            <div className="h-[200px]"></div>

            <div className="flex flex-col items-start gap-6 w-full xl:w-[50%]">
                <h2 className="mb-0">My Skills</h2>

                <span className="text-[24px]">I am well-versed in the full spectrum of design and development. While I started out as a designer, I have focused more on development in the last few years.</span>

                <hr className="w-full" />

                <h3 className="m-0">{targetStack?.match(/dev/i) ? "Web Dev Tech Stack" : "UI/UX tech stack"}</h3>

                <div className="flex flex-col xl:flex-col items-start gap-4 w-full">
                    {/* <h3>My Tech Stack</h3> */}
                    <div className="flex flex-wrap w-full gap-2">
                        <div
                            className={"p-4 text-lg cursor-pointer grow" + (targetStack.match(/dev/i) ? " bg-[white] text-[black] font-bold" : " border border-solid border-white/10 hover:opacity-60 ")}
                            onClick={() => {
                                setTargetStack("dev");
                            }}
                        >
                            <div>Web Dev Stack</div>
                        </div>
                        <div
                            className={"p-4 text-lg cursor-pointer grow" + (targetStack.match(/design/i) ? " bg-[white] text-[black] font-bold" : " border border-solid border-white/10 hover:opacity-60 ")}
                            onClick={() => {
                                setTargetStack("design");
                            }}
                        >
                            <div>UI/UX Stack</div>
                        </div>
                    </div>
                </div>

                <ul
                    style={{ maxWidth: "800px" }}
                    className="pl-6"
                >
                    {targetStack?.match(/dev/i) ? (
                        <React.Fragment>
                            {webDevStack.map((item: { title: string; description: string }, index: number) => (
                                <li
                                    key={index}
                                    className="mb-4"
                                >
                                    <h4 className="m-0 text-[#BBE572]">
                                        {item.title}
                                        {/* <TextShuffler textInput={item.title} /> */}
                                    </h4>
                                    <span className="opacity-80">
                                        {item.description}
                                        {/* <TextShuffler textInput={item.description} /> */}
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
                                    <h4 className="m-0 text-[#BBE572]">
                                        {item.title}
                                        {/* <TextShuffler textInput={item.title} /> */}
                                    </h4>
                                    <span className="opacity-80">
                                        {item.description}
                                        {/* <TextShuffler textInput={item.description} /> */}
                                    </span>
                                </li>
                            ))}
                        </React.Fragment>
                    )}
                </ul>
            </div>
        </div>
    );
}
