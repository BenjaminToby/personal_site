"use client";

import React from "react";

export default function MoreAboutMe() {
    const webDevStack = require("../../(utils)/web-dev-stack.json");
    const uiStack = require("../../(utils)/ui-ux-stack.json");

    const [targetStack, setTargetStack] = React.useState("dev");

    return (
        <div className="max-w-6xl w-full flex flex-col items-center pb-40 generic-scroll">
            <div className="h-20"></div>

            <div
                className="flex flex-col w-full gap-8 appear"
                data-delay={2}
            >
                <div className="w-full">
                    <h2>
                        More About Me
                        {/* <TextShuffler textInput="More About Me" /> */}
                    </h2>

                    <div className="flex flex-col items-start gap-4">
                        <div className="flex w-full gap-4">
                            <div
                                className={"p-4 cursor-pointer hover:opacity-60 grow" + (targetStack.match(/dev/i) ? " bg-[#343680]" : " border border-solid border-white/10")}
                                onClick={() => {
                                    setTargetStack("dev");
                                }}
                            >
                                <div>Web Dev Stack</div>
                            </div>
                            <div
                                className={"p-4 cursor-pointer hover:opacity-60 grow" + (targetStack.match(/design/i) ? " bg-[#343680]" : " border border-solid border-white/10")}
                                onClick={() => {
                                    setTargetStack("design");
                                }}
                            >
                                <div>UI/UX Stack</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-[#343680] px-4 md:px-6 py-2">
                    <section>
                        <h3>
                            {targetStack?.match(/dev/i) ? "Web Dev Tech Stack" : "UI/UX tech stack"}
                            {/* <TextShuffler textInput={targetStack?.match(/dev/i) ? "Web Dev Tech Stack" : "UI/UX tech stack"} /> */}
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
                                            <h4 className="m-0">
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
                    </section>
                </div>
            </div>
        </div>
    );
}
