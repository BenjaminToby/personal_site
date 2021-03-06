/**
 * ==============================================================================
 * Imports
 * ==============================================================================
 */
import React from "react";
import Head from "next/head";


// const contentful = require('contentful');
const fs = require("fs")

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
                            key={ post.id }
                        >
                            <h2 className="m-0"><TextShuffler textInput={ post.title } /></h2>
                            <span className="opacity-80"><TextShuffler textInput={ post.description } /></span>
                            <span className="text-sm opacity-50"><TextShuffler textInput={ post.date.substring(0, 24) } /></span>
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
    const posts = JSON.parse(fs.readFileSync("./jsonData/blogposts.json", "utf8"))

    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */

    // ## Server Props Return
    return {
        props: {
            blogPosts: posts,
        },
    };

    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */
}   
