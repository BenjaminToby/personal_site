/////////////////////////////////////////////
//* IMPORTS
/////////////////////////////////////////////
import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import datasquirel from "datasquirel";

import { redirect } from "next/navigation";
import Main from "./Main";

export const revalidate = 3600;

/////////////////////////////////////////////
//* Metadata
/////////////////////////////////////////////

async function getPost({ single }: { single: string }) {
    const postResponse = await datasquirel.get({
        key: process.env.DATASQUIREL_API_KEY,
        db: process.env.DB_NAME,
        query: "select * from blog_posts where slug = ?",
        queryValues: [single],
    });

    const post =
        postResponse?.success && postResponse.payload?.[0]
            ? postResponse.payload[0]
            : null;

    return post;
}

export async function generateMetadata(
    { params, searchParams }: any,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const single = params.single;

    const post = await getPost({ single: single });

    return {
        title: post.title,
        description: post.excerpt,
    };
}

/////////////////////////////////////////////
//* Main Function
/////////////////////////////////////////////
/**
 * Blog page index
 * ==============================================================================
 */
export default async function BlogIndex({
    params: { single },
}: {
    params: any;
}) {
    //* Data fetching
    const post = await getPost({ single: single });

    if (!post) {
        return redirect("/blog");
    }

    //* Main Function Return
    /////////////////////////////////////////////
    return (
        <React.Fragment>
            <Main post={post} />
        </React.Fragment>
    );

    /** ********************************************** */
}
