import "../styles/main.css";
import { Fragment } from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Component {...pageProps} />
            <Script src="/scripts/main.js" strategy="beforeInteractive" />
        </Fragment>
    );
}

export default MyApp;
