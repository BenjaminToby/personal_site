import React, { Fragment, useEffect, useState } from 'react'

let timer = 0;
let keyNum = 0;
let textTimeout;
let chars = ("abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+=-;.,/?><][}{:`~").split("");

const TextShuffler = ({ textInput }) => {

    let [text, setText] = useState(textInput);
    let [refresh, setRefresh] = useState(0);

    useEffect(() => {

        let shuffledText = () => {
            let textArray = textInput.split("");
            let newTextArray = [];
            textArray.forEach(char => {
                if (char === " ") {
                    return newTextArray.push(" ")
                }
                newTextArray.push(chars[Math.floor(Math.random() * 85)])
            })

            return newTextArray.join("");
        }

        textTimeout = setTimeout(() => {
            if (timer === 7) {
                setText(textInput);
                return window.clearTimeout(textTimeout);
            };
            setText(prev => prev);
            setRefresh(prev => prev + 1);
            timer++
        }, 200);
    }, [refresh])

    return (<span className="shuffled-text-span">{text.split("").map(char => <span key={keyNum++} style={{ animationDelay: Math.random() + "s", animationDuration: (Math.random() * 2) + "s" }}>{char}</span>)}</span>)
}

export default TextShuffler
