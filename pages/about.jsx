import React from 'react'
import Head from 'next/head'
import TextShuffler from '../components/actions/TextShuffler'
import GeneralLayout from '../layouts/general_layout/GeneralLayout'
import threeJsAnimations from '../functions/frontend/threeJsAnimations'

const about = () => {
    React.useEffect(() => {
        threeJsAnimations()
    }, [])

    return (
        <GeneralLayout>
            <Head>
                <title>About Me</title>
                <meta name="description" content="Ben of all trade, master of all! Learn more about me" />
            </Head>
            <h1><TextShuffler textInput="Ben of all trade, master of all!" /></h1>
            <span className='hero-sub-text'>
                <TextShuffler textInput="So the thing about me is: I want to know it all, I want to master it all: hence I've dug deep into almost every aspect of web design and development. In the process I've developed my most valuable skill: learnabiltiy: there are so many languages and libraries out there: about a dozen different ways to achieve the same result: even in my quest to master it all, it is not possible to master all the available languages, libraries and other web technologies: but whichever knowledge is needed at any given time, I adapt and learn: very quickly." />
            </span>
            <div className="hero-ctas-section">
                <a href='/documents/Benjamin_Toby_CV.pdf' download={ true }>See my resume</a>
                <a href='https://www.linkedin.com/in/benjamin-toby/' target="_blank">Linkedin</a>
            </div>
            <div className='fixed top-0 left-0 -z-10' id='homepage-animation-wrapper'></div>
        </GeneralLayout>
    )
}

export default about
