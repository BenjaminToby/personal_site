import Head from 'next/head'
import React from 'react'
import TextShuffler from '../components/actions/TextShuffler'
import threeJsAnimations from '../functions/frontend/threeJsAnimations'
import GeneralLayout from '../layouts/general_layout/GeneralLayout'

const index = () => {

    return (
        <GeneralLayout pageName="home">
            <Head>
                <title>Benjamin Toby | Fullstack developer, UI UX designer</title>
                <meta name="description" content="UI/UX designer, Full Stack Web Developer, Web/graphic/motion designer, React Developer, Next JS developer, Node JS developer, Javascript Developer, Linux Ubuntu, DevOps, Nginx, MySQL developer, Freelancer" />
            </Head>
            <h1><TextShuffler textInput="UI/UX designer, Full Stack Web Developer, Web/graphic/motion designer" delay={ 500 } /></h1>
            <span className='hero-sub-text'>
                <TextShuffler textInput="Hi, I'm Benjamin Toby, a fullstack web developer and UI/UX expert." delay={ 1000 } />
            </span>
            <div className="hero-ctas-section">
                <a href='/documents/Benjamin_Toby_CV-updated.pdf' download={ true }>See my resume</a>
                <a href='https://www.linkedin.com/in/benjamin-toby/' target="_blank">Linkedin</a>
                <a href='/contact' style={ {
                    backgroundColor: "transparent",
                    color: "white",
                    border: "2px solid white"
                } }>Contact Me</a>
            </div>
            <div className='fixed top-0 left-0 -z-10' id='homepage-animation-wrapper'></div>
        </GeneralLayout>
    )
}

export default index
