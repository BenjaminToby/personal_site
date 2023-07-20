import React from "react";
import Head from "next/head";
import TextShuffler from "../components/actions/TextShuffler";
import submitContactForm from "../functions/frontend/submitContactForm";
import GeneralLayout from "../layouts/general_layout/GeneralLayout";
import threeJsAnimations from "../functions/frontend/threeJsAnimations";
import ContactForm from "../app/(components)/ContactForm";

const contact = () => {
    let [success, setSuccess] = React.useState(false);

    return (
        <GeneralLayout>
            <Head>
                <title>Contact me</title>
                <meta
                    name="description"
                    content="Get in touch"
                />
            </Head>

            <div className="flex flex-col items-start max-w-6xl w-full">
                <h1>
                    <TextShuffler textInput="Get in touch" />
                </h1>
                <span className="hero-sub-text">
                    <TextShuffler
                        textInput="Have a question? Want to work together? Send me a message!"
                        delay={500}
                    />
                </span>

                <ContactForm />
            </div>
        </GeneralLayout>
    );
};

export default contact;
