import React from 'react'
import Head from 'next/head'
import TextShuffler from '../components/actions/TextShuffler'
import GeneralLayout from '../layouts/general_layout/GeneralLayout'
import PortfolioEntry from '../components/PortfolioEntry'
import threeJsAnimations from '../functions/frontend/threeJsAnimations'

const myWork = () => {
    const portfolioEntries = require("../components/portfolioEntries.json");

    React.useEffect(() => {
        threeJsAnimations()
    }, [])

    return (
        <GeneralLayout>
            <Head>
                <title>My Work | Tben</title>
                <meta name="description" content="Some of my Work" />
            </Head>
            <h1><TextShuffler textInput="My Work" /></h1>
            <span className='hero-sub-text'>
                <TextShuffler textInput="Some of my work ..." />
            </span>

            <div className='portfolio-entries-block mt-4'>
                { portfolioEntries.map(entry => <PortfolioEntry key={ entry.title } title={ entry.title } description={ entry.description } url={ entry.url } image={ entry.image } />) }
            </div>
            <div className='fixed top-0 left-0 -z-10' id='homepage-animation-wrapper'></div>
        </GeneralLayout>
    )
}

export default myWork

// {
//     "title": "Stirrmedia Social webapp",
//     "description": "A new social media experience without censorship",
//     "url": "https://stirrmedia.com",
//     "image": "/images/stirrmediascreenshot.png"
// },