import React from 'react'
import TextShuffler from '../components/actions/TextShuffler'
import { textSHuffle } from '../functions/frontend/textShuffle'
import GeneralLayout from '../layouts/general_layout/GeneralLayout'

const index = () => {
    return (
        <GeneralLayout>
            <h1><TextShuffler textInput="UI/UX designer, Full Stack Web Developer, Web/graphic/motion designer" /></h1>
            <span className='hero-sub-text'>
                <TextShuffler textInput="Hi, I'm Benjamin Toby, a highly talented fullstack web developer with extensive enxperience in web design, frontend and backend development." />
            </span>
            <div className="hero-ctas-section">
                <a href='/documents/Benjamin_Toby_CV.pdf' download={true}>See my resume</a>
                <a href='https://www.linkedin.com/in/benjamin-toby/' target="_blank">Linkedin</a>
            </div>
        </GeneralLayout>
    )
}

export default index
