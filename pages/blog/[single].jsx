/**
 * ==============================================================================
 * Imports
 * ==============================================================================
 */
import React from "react";
import Head from "next/head";
const fs = require("fs");

/** ********************************************** */
/** ********************************************** */
/** ********************************************** */

import GeneralLayout from "../../layouts/general_layout/GeneralLayout";
import TextShuffler from "../../components/actions/TextShuffler";

/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */

/**
 * ==============================================================================
 * Main Component { Functional }
 * ==============================================================================
 * @param {Object} props - Server props
 */
export default function BlogIndex({ blogPost }) {
    // ## Get Contexts

    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */

    // ## Javascript Variables
    let reactKey = 0;

    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */


    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */

    // ## React Hooks { useState, useEffect, useRef, etc ... }

    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */

    // ## Function Return
    return (
        <React.Fragment>
            <Head>
                <title>{ blogPost.title } | Tben.me Blog</title>
                <meta name="description" content={ blogPost.description } />
            </Head>
            <GeneralLayout>
                <div className="flex flex-col items-start gap-2 mb-8 max-w-3xl">
                    <button
                        className="bg-transparent text-white/50 border-2 border-solid border-white/20"
                        onClick={ (e) => {
                            window.history.back()
                        } }
                    >Back</button>
                    <h1 className="m-0"><TextShuffler textInput={ blogPost.title } /></h1>
                    <span className="text-lg">
                        <TextShuffler textInput={ blogPost.description } />
                    </span>
                    <span className="text-base opacity-50">
                        <TextShuffler textInput={ blogPost.date.substring(0, 24) } />
                    </span>
                </div>

                <div className="flex flex-col items-start max-w-3xl w-full gap-4 text-lg">
                    { blogPost.body.map((element) => {
                        reactKey++;

                        if (element.tag.match(/img/i)) {
                            return <img
                                key={ reactKey }
                                src={ element.src }
                                width={ element.width }
                                height={ element.height }
                                className={ element.class }
                                alt={ element.alt }
                                style={ element.style }
                            />
                        }

                        function construtElement(elementEntry) {
                            if (elementEntry.children) {
                                return (
                                    <elementEntry.tag
                                        key={ reactKey }
                                        className={ elementEntry.class ? elementEntry.class : null }
                                        href={ elementEntry.href }
                                        style={ element.style }
                                    >
                                        { elementEntry.children.map(child => construtElement(child)) }
                                    </elementEntry.tag>
                                )
                            }

                            return (
                                <elementEntry.tag
                                    key={ reactKey }
                                    className={ elementEntry.class ? elementEntry.class : null }
                                    href={ elementEntry.href }
                                >
                                    { elementEntry.content }
                                </elementEntry.tag>
                            )
                        }

                        return construtElement(element);
                    }
                    ) }
                </div>
            </GeneralLayout>
        </React.Fragment>
    );
    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */
};

/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */

/**
 * ==============================================================================
 * Server Side Props or Static Props
 * ==============================================================================
 * @param {Object} req - http incoming request object
 * @param {Object} res - http response object
 * @param {Object} query - queries attached to the url
 */
export async function getServerSideProps({ req, res, query }) {
    // ## Environment processes


    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */

    // ## User Authentication

    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */

    // ## Page/Site Data Data Fetching
    const blogPosts = JSON.parse(fs.readFileSync("./jsonData/blogposts.json", "utf8"));

    let foundPost = blogPosts.filter(post => post.slug === query.single);

    if (!foundPost || !foundPost[0]) return {
        redirect: {
            destination: "/blog",
            permanent: false
        }
    }

    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */

    // ## Server Props Return
    return {
        props: {
            blogPost: foundPost[0],
        },
    };

    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */
}   
