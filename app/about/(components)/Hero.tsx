"use client";

import React from "react";

export default function Hero() {
    return (
        <div className="-mt-10 appear">
            <div
                className="flex flex-col items-start gap-0 max-w-6xl w-full relative generic-scroll"
                // id="hero-text-section"
            >
                <span className="text-primary-light text-lg">About Me</span>
                <h1 className="text-5xl leading-snug" id="hero-text">
                    I'm the perfect balance between bleeding edge and stability
                </h1>
                <span className="hero-sub-text">
                    So often new technologies are introduced and they are not
                    always the bells and whistles they are promised to be. I
                    have a keen eye for these technologies and I'm able to
                    determine if they are worth the investment or not. I'm not
                    afraid to use new technologies but I'm also not afraid to
                    use tried and true technologies. I'm able to make the best
                    decision for the project at hand.
                </span>
            </div>
        </div>
    );
}
