import React from "react";
import Head from "next/head";
import TextShuffler from "../components/actions/TextShuffler";
import GeneralLayout from "../layouts/general_layout/GeneralLayout";
import PortfolioEntry from "../components/PortfolioEntry";

const myWork = () => {
    const portfolioEntries = require("../components/portfolioEntries.json");

    return (
        <GeneralLayout>
            <Head>
                <title>My Work | Tben</title>
                <meta
                    name="description"
                    content="Some of my Work"
                />
            </Head>

            <div className="flex flex-col items-start w-full max-w-6xl">
                <h1>
                    <TextShuffler textInput="My Work" />
                </h1>
                <span className="hero-sub-text mb-2">
                    <TextShuffler
                        textInput="Some of the projects I've worked on"
                        delay={500}
                    />
                </span>

                <div className="portfolio-entries-block mt-4">
                    {portfolioEntries.map((entry) => (
                        <PortfolioEntry
                            key={entry.title}
                            title={entry.title}
                            description={entry.description}
                            url={entry.url}
                            image={entry.image}
                        />
                    ))}
                </div>
            </div>
        </GeneralLayout>
    );
};

export default myWork;

// {
//     "title": "Stirrmedia Social webapp",
//     "description": "A new social media experience without censorship",
//     "url": "https://stirrmedia.com",
//     "image": "/images/stirrmediascreenshot.png"
// },
