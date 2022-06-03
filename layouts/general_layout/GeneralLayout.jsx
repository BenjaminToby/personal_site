import React, { Fragment } from 'react';
import GeneralHeader from './GeneralHeader';
import Head from "next/head"
import GeneralFooter from './GeneralFooter';
import { gsap } from "gsap";
import threeJsAnimations from '../../functions/frontend/threeJsAnimations';

const GeneralLayout = ({ children, pageName }) => {

    const [readyState, setReadyState] = React.useState(false)

    React.useEffect(() => {
        // barba.init({
        //     transitions: [{
        //         name: 'default-transition',
        //         leave() {
        //             // create your stunning leave animation here
        //             return gsap.to("main", {
        //                 opacity: 1,
        //                 duration: 1,
        //                 delay: 2
        //             })
        //         },
        //         enter() {
        //             // create your amazing enter animation here
        //             return gsap.from("main", {
        //                 opacity: 0,
        //                 duration: 1,
        //                 delay: 2
        //             })
        //         }
        //     }]
        // });

        window.addEventListener("load", () => {
            setReadyState(true);

            document.querySelectorAll("nav a").forEach((link) => {
                let locationRegex = new RegExp(`${window.location.pathname}.*?`);
                if (link.pathname === window.location.pathname) {
                    link.classList.add("active-page");
                }
            });

            gsap.to("#main-content-wrapper", {
                opacity: 1,
                duration: 2,
                delay: 1
            })

            gsap.to("#page-loader", {
                opacity: 0,
                duration: 0.5,
                delay: 1,
                pointerEvents: "none"
            })

            threeJsAnimations();
        })
    }, [])


    return (
        <Fragment>
            <Head>
                <meta name="keywords" content="UI/UX designer, Full Stack Web Developer, Web/graphic/motion designer, React Developer, NextJS developer, Node JS developer, Javascript Developer, Linux Ubuntu, DevOps, Nginx, MySQL developer, Freelancer" />
            </Head>

            <div id='page-loader' className='fixed w-screen h-screen bg-black flex items-center justify-center top-0 left-0' style={ { zIndex: 2000 } }>
                <span className='text-xl'>Tben Loading ...</span>
            </div>

            { readyState &&
                <div id='main-content-wrapper' style={ { opacity: 0 } }>
                    <GeneralHeader />
                    <main>
                        { children }
                    </main>
                    <GeneralFooter />
                </div>
            }

        </Fragment>
    )
}

export default GeneralLayout
