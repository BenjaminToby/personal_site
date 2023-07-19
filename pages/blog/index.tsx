/**
 * ==============================================================================
 * Imports
 * ==============================================================================
 */
import React from "react";
import Head from "next/head";

import type { InferGetStaticPropsType, GetStaticProps, GetStaticPropsContext } from "next";
const datasquirel = require("datasquirel");

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
export default function BlogIndex(props: InferGetStaticPropsType<typeof getStaticProps>) {
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
                <meta
                    name="description"
                    content="Tech talks"
                />
            </Head>
            <GeneralLayout>
                <div className="flex flex-col items-start max-w-6xl w-full">
                    <h1 className="mb-8">
                        <TextShuffler textInput="My Blog" />
                    </h1>
                    <div className="flex flex-col items-start w-full gap-4">
                        {props.blogPosts.map((post: { slug: string; title: string; excerpt: string; date_created: string }, index: number) => (
                            <a
                                key={index}
                                href={`/blog/${post.slug}`}
                                className="flex flex-col items-start gap-2 w-full hover:bg-blue-600 border border-solid border-white/20 p-8 transition-all bg-primary/10"
                            >
                                <h2 className="m-0">
                                    <TextShuffler textInput={post.title} />
                                </h2>
                                <span className="opacity-80">
                                    <TextShuffler textInput={post.excerpt} />
                                </span>
                                <span className="text-sm opacity-50">
                                    <TextShuffler textInput={post.date_created.substring(0, 24)} />
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </GeneralLayout>
        </React.Fragment>
    );

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
export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
    /**
     * User Auth
     *
     * @abstract grab user
     */

    /** ********************************************** */

    /**
     * Data fetching
     *
     * @abstract fetch date from the server or externnal source
     */
    const postsResponse = await datasquirel.get({
        key: process.env.DATASQUIREL_API_KEY,
        db: "tbenme",
        query: "select title,slug,excerpt,date_created from blog_posts limit 10",
    });

    if (!postsResponse.success) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
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
        revalidate: 3600,
    };

    /** ********************************************** */
    /** ********************************************** */
    /** ********************************************** */
};
