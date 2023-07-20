"use client";

import React, { ReactElement } from "react";
import GeneralHeader from "./GeneralHeader";
import GeneralFooter from "./GeneralFooter";
import { gsap } from "gsap";
import BG from "./BG";

export const SiteContext: any = React.createContext({});

type GeneralLayoutProps = {
    children: React.ReactNode;
};

const GeneralLayout = ({ children }: GeneralLayoutProps): ReactElement => {
    const [readyState, setReadyState] = React.useState(false);

    React.useEffect(() => {
        const links: NodeListOf<HTMLAnchorElement> | null = document.querySelectorAll("nav a");

        links?.forEach((link) => {
            if (link.dataset.href === window.location.pathname) {
                link.classList.add("active-page");
            }

            if (window.location.pathname.match(new RegExp(`${link.dataset.href}\\/.*`))) {
                link.classList.add("active-page");
            }
        });

        gsap.to("#main-content-wrapper", {
            opacity: 1,
            duration: 2,
        });
    }, []);

    return (
        <SiteContext.Provider value={{ readyState, setReadyState }}>
            <div
                id="main-content-wrapper"
                style={{
                    opacity: 0,
                }}
                className="px-4 md:px-10"
            >
                <GeneralHeader />
                <main
                    className="flex items-center flex-col w-full"
                    // style={{
                    //     perspective: "800px",
                    // }}
                >
                    {children}
                </main>
                <GeneralFooter />
            </div>
            <BG />
        </SiteContext.Provider>
    );
};

export default GeneralLayout;
