import React from "react";
import Head from "next/head";
import TextShuffler from "../components/actions/TextShuffler";
import submitContactForm from "../functions/frontend/submitContactForm";
import GeneralLayout from "../layouts/general_layout/GeneralLayout";
import threeJsAnimations from "../functions/frontend/threeJsAnimations";

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

                <form
                    autoComplete="on"
                    onSubmit={(e) => {
                        submitContactForm(e, setSuccess);
                    }}
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        autoComplete="name"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email Address"
                        autoComplete="email"
                        required
                    />
                    <textarea
                        name="message"
                        id="contact-form-message"
                        cols="30"
                        rows="10"
                        placeholder="Message"
                    ></textarea>
                    <button type="submit">Submit</button>
                    {success === "Success" && (
                        <div className="message-response">
                            Success!!!{" "}
                            <button
                                onClick={() => {
                                    window.location.reload();
                                }}
                            >
                                Reload
                            </button>
                        </div>
                    )}
                    {success === "Failed" && (
                        <div className="message-response failed">
                            Failed{" "}
                            <button
                                onClick={() => {
                                    window.location.reload();
                                }}
                            >
                                Reload
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </GeneralLayout>
    );
};

export default contact;
