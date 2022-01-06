import React from 'react'
import TextShuffler from '../components/actions/TextShuffler'
import GeneralLayout from '../layouts/general_layout/GeneralLayout'

const contact = () => {
    return (
        <GeneralLayout>
            <h1><TextShuffler textInput="Great things await ..." /></h1>
            <span className='hero-sub-text'>
                <TextShuffler textInput="Let's talk" />
            </span>

            <form autoComplete='true'>
                <input type="text" placeholder='Your Name' />
                <input type="email" placeholder='Your Email Address' />
                <textarea name="message" id="contact-form-message" cols="30" rows="10" placeholder='Message'></textarea>
                <button type="submit">Submit</button>
            </form>
        </GeneralLayout>
    )
}

export default contact
