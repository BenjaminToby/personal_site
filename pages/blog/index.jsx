/**
 * ==============================================================================
 * Imports
 * ==============================================================================
 */
import React from "react";
import Head from "next/head";


// const contentful = require('contentful');
const https = require("https")

/** ********************************************** */
/** ********************************************** */
/** ********************************************** */

import GeneralLayout from "../../layouts/general_layout/GeneralLayout";
import TextShuffler from "../../components/actions/TextShuffler";
// import httpFetch from "../../functions/backend/httpFetch";

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
export default function BlogIndex(props) {
    /**
     * Get Contexts
     *
     * @abstract { React.useContext }
     */

    /** ********************************************** */

    /**
     * Javascript Variables
     *
     * @abstract Non hook variables and functions
     */

    /** ********************************************** */

    /**
     * React Hooks
     *
     * @abstract { useState, useEffect, useRef, etc ... }
     */

    /** ********************************************** */

    /**
     * Function Return
     *
     * @abstract Main Function Return
     */
    return (
        <React.Fragment>
            <Head>
                <title>Blog | Tben.me</title>
                <meta name="description" content="Tech talks" />
            </Head>
            <GeneralLayout>
                <h1 className="mb-8"><TextShuffler textInput="My Blog" /></h1>
                <div className="flex flex-col items-start w-full gap-4">
                    { props.blogPosts.map(post =>
                        <a
                            href={ `/blog/${post.slug}` }
                            className="flex flex-col items-start gap-2 w-full hover:bg-blue-600 border border-solid border-white/20 p-8 transition-all"
                            key={ post.slug }
                        >
                            <h2 className="m-0"><TextShuffler textInput={ post.title } /></h2>
                            <span className="opacity-80"><TextShuffler textInput={ post.excerpt } /></span>
                            <span className="text-sm opacity-50"><TextShuffler textInput={ post.date_created.substring(0, 24) } /></span>
                        </a>
                    ) }
                </div>
            </GeneralLayout>
        </React.Fragment>
    );

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
export async function getStaticProps({ req, res, query }) {
    /**
     * User Auth
     *
     * @abstract grab user
     */
    // const contentfulClient = contentful.createClient({
    //     space: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_API_KEY,
    // });

    // const posts = await contentfulClient.getEntries()

    // console.log(posts);

    /** ********************************************** */

    /**
     * Data fetching
     *
     * @abstract fetch date from the server or externnal source
     */
    // let blogPosts = await httpFetch({
    //     options: {
    //         method:"DELETE",
    //         path: "/api/tben-blogs"
    //     },
    //     paradigm:"https"
    // })

    // console.log(blogPosts.data);
    const postsResponse = await new Promise((resolve, reject) => {
        https
            .get(
                /** ********************* Get Options object */
                {
                    host: "datasquirel.tben.me",
                    path: `/api/query/get?db=tbenme&query=select+title,slug,excerpt,date_created+from+blog_posts+limit+10`,
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
                destination: "/",
                permanent: false
            }
        }
    }

    const posts = postsResponse.payload;

    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */

    // ## Server Props Return
    return {
        props: {
            blogPosts: posts,
        },
        revalidate: 1000
    };

    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */
}   
