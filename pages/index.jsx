import Head from 'next/head'
import React from 'react'
import TextShuffler from '../components/actions/TextShuffler'
import threeJsAnimations from '../functions/frontend/threeJsAnimations'
import GeneralLayout from '../layouts/general_layout/GeneralLayout'

const index = () => {
    React.useEffect(() => {
        threeJsAnimations()
    }, [])
    return (
        <GeneralLayout>
            <Head>
                <title>Benjamin Toby</title>
                <meta name="description" content="UI/UX designer, Full Stack Web Developer, Web/graphic/motion designer, React Developer, Next JS developer, Node JS developer, Javascript Developer, Linux Ubuntu, DevOps, Nginx, MySQL developer" />
            </Head>
            <h1><TextShuffler textInput="UI/UX designer, Full Stack Web Developer, Web/graphic/motion designer" /></h1>
            <span className='hero-sub-text'>
                <TextShuffler textInput="Hi, I'm Benjamin Toby, a fullstack web developer and UI/UX expert." />
            </span>
            <div className="hero-ctas-section">
                <a href='/documents/Benjamin_Toby_CV.pdf' download={ true }>See my resume</a>
                <a href='https://www.linkedin.com/in/benjamin-toby/' target="_blank">Linkedin</a>
            </div>
            <div className='fixed top-0 left-0 -z-10' id='homepage-animation-wrapper'></div>
        </GeneralLayout>
    )
}

export default index
