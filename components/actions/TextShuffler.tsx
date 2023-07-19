"use client";

import React, { FC, useEffect, useState, ReactElement } from "react";
import { gsap } from "gsap";

type ChildProps = {
    textInput: string;
    delay?: number;
};

const TextShuffler: FC<ChildProps> = ({ textInput, delay }): ReactElement => {
    let [readyState, setReadyState] = useState(false);

    const spanRef = React.useRef<HTMLElement>(null);

    useEffect(() => {
        const spanObserver = new IntersectionObserver(
            (entries, observer) => {
                if (entries[0].isIntersecting) {
                    if (delay) {
                        setTimeout(() => {
                            setReadyState(true);
                        }, delay);
                    } else {
                        setReadyState(true);
                    }
                    if (spanRef.current) observer.unobserve(spanRef.current);
                }
            },
            {
                rootMargin: "0px 0px 0px 0px",
            }
        );

        if (spanRef.current) spanObserver.observe(spanRef.current);
    }, []);

    useEffect(() => {
        if (!readyState) return;

        let chars = textInput.split("");

        let charsSpans = chars.map((char) => `<span style="opacity:0">${char}</span>`);

        if (spanRef?.current?.innerHTML) spanRef.current.innerHTML = charsSpans.join("");

        if (spanRef.current) {
            gsap.to(spanRef.current, {
                opacity: 1,
                duration: 1,
            });
        }

        let textSpans: NodeList | null = spanRef.current ? spanRef.current.querySelectorAll("span") : null;

        requestAnimationFrame(() => {
            if (textSpans) {
                textSpans.forEach((span) => {
                    gsap.to(span, {
                        opacity: 1,
                        duration: Math.random() * 1.5,
                    });
                });

                textSpans.forEach((span) => {
                    gsap.killTweensOf(span, "opacity");
                    gsap.to(span, {
                        opacity: 0,
                        duration: Math.random() * 1.5,
                        delay: Math.random() * 0.5,
                    });
                });

                textSpans.forEach((span) => {
                    gsap.killTweensOf(span, "opacity");

                    gsap.to(span, {
                        opacity: 1,
                        duration: Math.random() * 1.5,
                        delay: Math.random(),
                    });
                });
            }
        });
    }, [readyState]);

    return (
        <span
            className="shuffled-text-span"
            ref={spanRef}
            style={{ opacity: 0 }}
        >
            {textInput}
        </span>
    );
};

export default TextShuffler;
