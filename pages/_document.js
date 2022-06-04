import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                {/* <script src="https://unpkg.com/@barba/core"></script> */}
                <script src="/scripts/main.js" defer></script>
            </Head>
            <body className="bg-black">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
