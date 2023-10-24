/////////////////////////////////////////////
//* IMPORTS
/////////////////////////////////////////////
import React from "react";
import { Metadata } from "next";
const datasquirel = require("datasquirel");

import { headers, cookies } from "next/headers";

/////////////////////////////////////////////
//* Metadata
/////////////////////////////////////////////

export const metadata: Metadata = {
    title: "Blog posts | Tben.me",
    description: "Tech talks and tutorials by Tben",
};

/////////////////////////////////////////////
//* Main Function
/////////////////////////////////////////////
/**
 * Blog page index
 * ==============================================================================
 */
export default async function BlogIndex() {
    //* Data fetching
    /////////////////////////////////////////////
    const postsResponse = await datasquirel.get({
        key: process.env.DATASQUIREL_API_KEY,
        db: process.env.DB_NAME,
        query: "select title,slug,excerpt,date_created from blog_posts limit 10",
    });

    const posts = postsResponse?.success ? postsResponse.payload : [];
    try {
        const test = await fetch("http://localhost:5000/api/test");
        const result = await test.json();
        console.log(result);
    } catch (error: any) {
        console.log(error.message);
    }

    console.log("Referer:", headers().get("referer"));
    console.log("Host:", headers().get("host"));
    // console.log(nextHeaders.cookies());

    //* Main Function Return
    /////////////////////////////////////////////
    return (
        <React.Fragment>
            <div className="flex flex-col items-start max-w-6xl w-full">
                <h1 className="mb-8">My Blog</h1>
                <div className="flex flex-col items-start w-full gap-4">
                    {posts.map((post: { slug: string; title: string; excerpt: string; date_created: string }, index: number) => (
                        <a
                            key={index}
                            href={`/blog/${post.slug}`}
                            className="flex flex-col items-start gap-2 w-full hover:bg-blue-600 border border-solid border-white/20 p-8 transition-all bg-primary/10"
                        >
                            <h2 className="m-0">{post.title}</h2>
                            <span className="opacity-80">{post.excerpt}</span>
                            <span className="text-sm opacity-50">{post.date_created.substring(0, 24)}</span>
                        </a>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );

    /** ********************************************** */
}
