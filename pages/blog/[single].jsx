/**
 * ==============================================================================
 * Imports
 * ==============================================================================
 */
import React from "react";
import Head from "next/head";
const https = require("https");

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
                <meta name="description" content={ blogPost.excerpt } />
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
                        <TextShuffler textInput={ blogPost.excerpt } />
                    </span>
                    <span className="text-base opacity-50">
                        <TextShuffler textInput={ blogPost.date_created.substring(0, 24) } />
                    </span>
                </div>

                <span className="flex flex-col items-start max-w-3xl w-full gap-4 text-lg" dangerouslySetInnerHTML={ { __html: blogPost.body } }></span>
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
export async function getStaticProps({ params }) {
    // ## Environment processes


    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */

    // ## User Authentication

    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */

    // ## Page/Site Data Data Fetching
    const postsResponse = await new Promise((resolve, reject) => {
        https
            .get(
                /** ********************* Get Options object */
                {
                    host: "datasquirel.tben.me",
                    path: `/api/query/get?db=tbenme&query=select+*+from+blog_posts+where+slug='${params.single}'`,
                    headers: {
                        Authorization: process.env.DATASQUIREL_API_KEY,
                    },
                },
                /** ********************************************** */
                /** ********************************************** */
                /** ********************************************** */

                /** ********************* Callback function */
                (response) => {
                    var str = "";

                    // ## another chunk of data has been received, so append it to `str`
                    response.on("data", function (chunk) {
                        str += chunk;
                    });

                    // ## the whole response has been received, so we just print it out here
                    response.on("end", function () {
                        resolve(JSON.parse(str))
                    });

                    response.on("error", (err) => {
                        console.log(err);
                    });
                }
            )
            .end();
    });

    if (!postsResponse.success || !postsResponse.payload[0]) {
        return {
            redirect: {
                destination: "/blog",
                permanent: false
            }
        }
    }

    const post = postsResponse.payload[0];

    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */

    // ## Server Props Return
    return {
        props: {
            blogPost: post,
        },
        revalidate: 1000
    };

    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */
}

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
export async function getStaticPaths() {
    /**
     * Data fetching
     *
     * @abstract fetch date from the server or externnal source
     */
    const postsResponse = await new Promise((resolve, reject) => {
        https
            .get(
                /** ********************* Get Options object */
                {
                    host: "datasquirel.tben.me",
                    path: `/api/query/get?db=tbenme&query=select+slug+from+blog_posts`,
                    headers: {
                        Authorization: process.env.DATASQUIREL_API_KEY,
                    },
                },
                /** ********************************************** */
                /** ********************************************** */
                /** ********************************************** */

                /** ********************* Callback function */
                (response) => {
                    var str = "";

                    // ## another chunk of data has been received, so append it to `str`
                    response.on("data", function (chunk) {
                        str += chunk;
                    });

                    // ## the whole response has been received, so we just print it out here
                    response.on("end", function () {
                        resolve(JSON.parse(str))
                    });

                    response.on("error", (err) => {
                        console.log(err);
                    });
                }
            )
            .end();
    });

    if (!postsResponse.success) {
        return {
            redirect: {
                destination: "/blog",
                permanent: false
            }
        }
    }

    const posts = postsResponse.payload;

    const paths = posts.map((entry) => {
        return {
            params: { single: entry.slug }
        }
    })

    return {
        paths: paths,
        fallback: "blocking",
    }
}

// Legacy

// { blogPost.body.map((element) => {
//     reactKey++;

//     if (element.tag.match(/img/i)) {
//         return <img
//             key={ reactKey }
//             src={ element.src }
//             width={ element.width }
//             height={ element.height }
//             className={ element.class }
//             alt={ element.alt }
//             style={ element.style }
//         />
//     }

//     function construtElement(elementEntry) {
//         if (elementEntry.children) {
//             return (
//                 <elementEntry.tag
//                     key={ reactKey }
//                     className={ elementEntry.class ? elementEntry.class : null }
//                     href={ elementEntry.href }
//                     style={ element.style }
//                 >
//                     { elementEntry.children.map(child => construtElement(child)) }
//                 </elementEntry.tag>
//             )
//         }

//         return (
//             <elementEntry.tag
//                 key={ reactKey }
//                 className={ elementEntry.class ? elementEntry.class : null }
//                 href={ elementEntry.href }
//             >
//                 { elementEntry.content }
//             </elementEntry.tag>
//         )
//     }

//     return construtElement(element);
// }
// ) }
