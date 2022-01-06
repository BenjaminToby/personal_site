import React from 'react'
import Head from 'next/head'
import TextShuffler from '../components/actions/TextShuffler'
import GeneralLayout from '../layouts/general_layout/GeneralLayout'

const about = () => {
    return (
        <GeneralLayout>
            <Head>
                <title>About Me</title>
                <meta name="description" content="Ben of all trade, master of all! Learn more about me" />
            </Head>
            <h1><TextShuffler textInput="Ben of all trade, master of all!" /></h1>
            <span className='hero-sub-text'>
                <TextShuffler textInput="So the thing about me is: I want to know it all, I want to master it all: this has lead me to dig deep into almost every aspect of web design and development. But that's not the best thing about me: the best thing is I'm willing to learn and adapt at any point: there are so many languages and libraries these days: even in my quest to master it all, it is not possible to master all the available languages and libraries: but whichever knowledge is needed at any given time, I adapt and learn: very quickly too: I see this as the best skill anyone can have in this age." />
            </span>
            <div className="hero-ctas-section">
                <a href='/documents/Benjamin_Toby_CV.pdf' download={true}>See my resume</a>
                <a href='https://www.linkedin.com/in/benjamin-toby/' target="_blank">Linkedin</a>
            </div>
        </GeneralLayout>
    )
}

export default about
