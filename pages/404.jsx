import React from 'react'
import TextShuffler from '../components/actions/TextShuffler'
import { textSHuffle } from '../functions/frontend/textShuffle'
import GeneralLayout from '../layouts/general_layout/GeneralLayout'

const index = () => {
    return (
        <div className='not-found-page-wrapper'>
            <h1><TextShuffler textInput="404" /></h1>
            <span className='hero-sub-text'>
                <TextShuffler textInput="Oops ... page not found" />
            </span>
            <div className="hero-ctas-section">
                <a href='/'>Go Back Home</a>
            </div>
        </div>
    )
}

export default index
