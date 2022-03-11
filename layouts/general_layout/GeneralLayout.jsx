import React, { Fragment } from 'react';
import GeneralHeader from './GeneralHeader';
import Head from "next/head"
import GeneralFooter from './GeneralFooter';

const GeneralLayout = ({ children }) => {
    return (
        <Fragment>
            <Head>
                <meta name="keywords" content="UI/UX designer, Full Stack Web Developer, Web/graphic/motion designer, React Developer, NextJS developer, Node JS developer, Javascript Developer, Linux Ubuntu, DevOps, Nginx, MySQL developer, Freelancer" />
            </Head>
            <GeneralHeader />
            <main>
                { children }
            </main>
            <GeneralFooter />
        </Fragment>
    )
}

export default GeneralLayout
