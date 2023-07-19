"use client";

import React from "react";
import TextShuffler from "../../../components/actions/TextShuffler";
import { appear, genericScroll } from "../../(utils)/animate";

export default function Hero() {
    React.useEffect(genericScroll, []);
    React.useEffect(appear, []);

    return (
        <div className="-mt-10 appear">
            <div
                className="flex flex-col items-start gap-0 max-w-6xl w-full relative generic-scroll"
                // id="hero-text-section"
            >
                <span className="text-primary-light text-lg">
                    <TextShuffler textInput="About Me" />
                </span>
                <h1
                    className="text-5xl leading-snug"
                    id="hero-text"
                >
                    <TextShuffler textInput="Ben of All Trade, Master of All" />
                </h1>
                <span className="hero-sub-text">
                    <TextShuffler
                        textInput="Quick learner, adaptable, problem solver, curious. I strive to know the system, rather than the status quo. My credo is: no problem too great, no knowledge too vast, no logic too complex. I thrive in difficult situations and complex hurdles: problem solving is now second nature to me: if you can think it, it can be done."
                        delay={1000}
                    />
                </span>
            </div>
        </div>
    );
}
