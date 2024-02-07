import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <script
                    src="/scripts/main.js"
                    defer
                ></script>
                <script
                    src="//code.tidio.co/qdxjbp0dz6wswmfgfpitkugodqk2rstk.js"
                    async
                ></script>
            </Head>
            <body className="w-full">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
