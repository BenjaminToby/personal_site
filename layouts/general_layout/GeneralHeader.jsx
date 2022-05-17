import React from 'react'

const GeneralHeader = () => {
    return (
        <header>
            <a href="/" className="logo-link-block"><h1>Tben.me</h1></a>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About Me</a>
                <a href="/work">My Work</a>
                <a href='/documents/Benjamin_Toby_CV-updated.pdf' target="_blank">My Resume</a>
                <a href="/contact">Contact Me</a>
            </nav>
        </header>
    )
}

export default GeneralHeader
