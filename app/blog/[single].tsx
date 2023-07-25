/**
 * ==============================================================================
 * Imports
 * ==============================================================================
 */
import React from "react";
import Head from "next/head";
import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";
const datasquirel = require("datasquirel");

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
export default function BlogIndex({ blogPost }: InferGetStaticPropsType<typeof getStaticProps>) {
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
                <title>{blogPost.title} | Tben.me Blog</title>
                <meta
                    name="description"
                    content={blogPost.excerpt}
                />
            </Head>
            <GeneralLayout>
                <div className="flex flex-col items-start gap-2 mb-8 max-w-6xl w-full">
                    <button
                        className="bg-transparent text-white/50 border-2 border-solid border-white/20"
                        onClick={(e) => {
                            window.history.back();
                        }}
                    >
                        Back
                    </button>
                    <h1 className="m-0">
                        <TextShuffler textInput={blogPost.title} />
                    </h1>
                    <span className="text-lg">
                        <TextShuffler textInput={blogPost.excerpt} />
                    </span>
                    <span className="text-base opacity-50">
                        <TextShuffler textInput={blogPost.date_created.substring(0, 24)} />
                    </span>
                </div>

                <span
                    className="flex flex-col items-start max-w-6xl w-full gap-4 text-xl"
                    dangerouslySetInnerHTML={{ __html: blogPost.body }}
                ></span>
            </GeneralLayout>
        </React.Fragment>
    );
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
 * Server Side Props or Static Props
 * ==============================================================================
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
    // ## Environment processes

    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */

    // ## User Authentication

    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */

    // ## Page/Site Data Data Fetching
    const postsResponse = await datasquirel.get({
        key: process.env.DATASQUIREL_API_KEY,
        db: "tbenme",
        query: `select * from blog_posts WHERE slug='${params?.single}'`,
    });

    const post = postsResponse.payload[0];

    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */

    // ## Server Props Return
    return {
        props: {
            blogPost: post,
        },
        revalidate: 3600,
    };

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
 * Server Side Props or Static Props
 * ==============================================================================
 */
export const getStaticPaths: GetStaticPaths = async () => {
    /**
     * Data fetching
     *
     * @abstract fetch date from the server or externnal source
     */
    const postsResponse = await datasquirel.get({
        key: process.env.DATASQUIREL_API_KEY,
        db: "tbenme",
        query: `select slug from blog_posts`,
    });

    const posts: { slug: string }[] | null = postsResponse.payload;

    const paths = posts?.map((entry) => {
        return {
            params: { single: entry.slug },
        };
    });

    return {
        paths: paths ? paths : [],
        fallback: "blocking",
    };
};
