import React from 'react'
import Head from 'next/head'
import TextShuffler from '../components/actions/TextShuffler'
import GeneralLayout from '../layouts/general_layout/GeneralLayout'
import PortfolioEntry from '../components/PortfolioEntry'

const about = () => {
    const portfolioEntries = require("../components/portfolioEntries.json");

    return (
        <GeneralLayout>
            <Head>
                <title>My Work | Tben</title>
                <meta name="description" content="Some of my Work" />
            </Head>
            <h1><TextShuffler textInput="My Work" /></h1>
            <span className='hero-sub-text' style={ { marginTop: "-30px", marginBottom: "20px", display: "block" } }>
                <TextShuffler textInput="Some of my work ..." />
            </span>

            <div className='portfolio-entries-block'>
                { portfolioEntries.map(entry => <PortfolioEntry key={ entry.title } title={ entry.title } description={ entry.description } url={ entry.url } image={ entry.image } />) }

            </div>
        </GeneralLayout>
    )
}

export default about
