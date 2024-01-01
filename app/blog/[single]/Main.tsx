"use client";

/////////////////////////////////////////////
//* IMPORTS
/////////////////////////////////////////////
import React from "react";
import TextShuffler from "../../../components/actions/TextShuffler";

/////////////////////////////////////////////
//* Main Function
/////////////////////////////////////////////
/**
 * Blog page index
 * ==============================================================================
 */
export default function Main({ post }: { post: any }) {
    //* Main Function Return

    return (
        <React.Fragment>
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
                    <TextShuffler textInput={post.title} />
                </h1>
                <span className="text-lg">
                    <TextShuffler textInput={post.excerpt} />
                </span>
                <span className="text-base opacity-50">
                    <TextShuffler
                        textInput={post.date_created.substring(0, 24)}
                    />
                </span>
            </div>

            <span
                className="flex flex-col items-start max-w-6xl w-full gap-4 text-xl"
                dangerouslySetInnerHTML={{ __html: post.body }}
            ></span>
        </React.Fragment>
    );
}
