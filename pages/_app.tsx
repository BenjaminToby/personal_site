import "../styles/main.css";
import "../styles/tw_main.css";
import { Fragment } from "react";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <Component {...pageProps} />
        </Fragment>
    );
}

export default MyApp;
