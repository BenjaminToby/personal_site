import React, { Fragment, useEffect, useState } from 'react';
import { gsap } from "gsap";

let timer = 0;
let keyNum = 0;
let textTimeout;
// let chars = ("abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+=-;.,/?><][}{:`~").split("");

const TextShuffler = ({ textInput, delay }) => {

    let [text, setText] = useState(textInput);
    let [refresh, setRefresh] = useState(0);
    let [readyState, setReadyState] = useState(false);

    const spanRef = React.useRef();

    useEffect(() => {
        const spanObserver = new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                requestAnimationFrame(() => {
                    if (delay) {
                        setTimeout(() => {
                            gsap.to(spanRef.current, {
                                opacity: 1,
                                duration: 2
                            });

                            setReadyState(true);
                        }, delay);
                    } else {
                        gsap.to(spanRef.current, {
                            opacity: 1,
                            duration: 2
                        });

                        setReadyState(true);
                    }
                })

                observer.unobserve(spanRef.current)
            }

        }, {
            rootMargin: "0px 0px 0px 0px"
        });

        spanObserver.observe(spanRef.current)
    }, [])

    useEffect(() => {
        if (!readyState) return;

        requestAnimationFrame(() => {
            textTimeout = setTimeout(() => {
                if (timer === 7) {
                    setText(textInput);
                    return window.clearTimeout(textTimeout);
                };

                setRefresh(prev => prev + 1);
                timer++
            }, 300);
        })
    }, [refresh])

    return (
        <span className="shuffled-text-span" ref={ spanRef } style={ { opacity: 0 } }>
            { text.split("").map(char => <span key={ keyNum++ } style={ { animationDelay: Math.random() * 1.5 + "s", animationDuration: (Math.random() * 2) + "s" } }>{ char }</span>) }
        </span>
    )
}

export default TextShuffler
