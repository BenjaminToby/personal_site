import React, { Fragment, useEffect, useState } from 'react';
import { gsap } from "gsap";

let timer = 0;
let keyNum = 0;
let textTimeout;
let textInterval;
// let chars = ("abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+=-;.,/?><][}{:`~").split("");
let interval = 200;

const TextShuffler = ({ textInput, delay }) => {

    // let [text, setText] = useState(textInput);
    // let [refresh, setRefresh] = useState(0);
    let [readyState, setReadyState] = useState(false);

    const spanRef = React.useRef();

    useEffect(() => {
        const spanObserver = new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                if (delay) {
                    setTimeout(() => {
                        setReadyState(true);
                    }, delay);
                } else {
                    setReadyState(true);
                }

                observer.unobserve(spanRef.current)
            }

        }, {
            rootMargin: "0px 0px 0px 0px"
        });

        spanObserver.observe(spanRef.current)
    }, [])

    // useEffect(() => {
    //     if (!readyState) return;

    //     requestAnimationFrame(() => {
    //         textTimeout = setTimeout(() => {
    //             if (timer === 7) {
    //                 setText(textInput);
    //                 return window.clearTimeout(textTimeout);
    //             };

    //             setRefresh(prev => prev + 1);
    //             timer++
    //         }, 300);
    //     })
    // }, [refresh, readyState])

    useEffect(() => {
        if (!readyState) return;



        let chars = textInput.split("");



        let charsSpans = chars.map(char => `<span style="opacity:0">${char}</span>`)

        spanRef.current.innerHTML = charsSpans.join("");

        gsap.to(spanRef.current, {
            opacity: 1,
            duration: 1
        });

        let textSpans = spanRef.current.querySelectorAll("span");

        // textInterval = setInterval(() => {
        //     if (timer >= 600) {
        //         window.clearInterval(textInterval);

        //         requestAnimationFrame(() => {
        //             textSpans.forEach(span => {
        //                 // gsap.killTweensOf(span, "opacity");

        //                 gsap.to(span, {
        //                     opacity: 1,
        //                     duration: Math.random(),
        //                     delay: Math.random()
        //                 })
        //             })
        //         })

        //         return;
        //     }

        //     requestAnimationFrame(() => {
        //         textSpans.forEach(span => {
        //             gsap.to(span, {
        //                 opacity: 1,
        //                 duration: Math.random() * 2,
        //                 delay: Math.random() * 1.5
        //             })
        //         })

        //         // textSpans.forEach(span => {
        //         //     gsap.to(span, {
        //         //         opacity: 0,
        //         //         duration: Math.random() * 2,
        //         //         delay: Math.random() * 1.5
        //         //     })
        //         // })

        //         // gsap.to(spanRef.current, {
        //         //     opacity: 0,
        //         //     duration: 2
        //         // });

        //         timer += interval;
        //     })

        // }, interval)

        requestAnimationFrame(() => {
            // let charsSpans = chars.map(char => `<span>${char}</span>`)

            // spanRef.current.innerHTML = charsSpans.join("");

            // let textSpans = spanRef.current.querySelectorAll("span");

            textSpans.forEach(span => {
                gsap.to(span, {
                    opacity: 1,
                    duration: Math.random() * 1.5,
                })
            })

            textSpans.forEach(span => {
                gsap.killTweensOf(span, "opacity");
                gsap.to(span, {
                    opacity: 0,
                    duration: Math.random() * 1.5,
                    delay: Math.random() * 0.5
                })
            })

            textSpans.forEach(span => {
                gsap.killTweensOf(span, "opacity");

                gsap.to(span, {
                    opacity: 1,
                    duration: Math.random() * 1.5,
                    delay: Math.random()
                })
            })
        })


    }, [readyState])

    return (
        <span className="shuffled-text-span" ref={ spanRef } style={ { opacity: 0 } }>
            {/* { text.split("").map(char => <span key={ keyNum++ } style={ { animationDelay: Math.random() * 1.5 + "s", animationDuration: (Math.random() * 2) + "s" } }>{ char }</span>) } */ }
            { textInput }
        </span>
    )
}

export default TextShuffler
