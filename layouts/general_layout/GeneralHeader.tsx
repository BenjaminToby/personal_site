"use client";

import React from "react";
import Image from "next/image";

import { gsap } from "gsap";
import HeaderNav from "./HeaderNav";

/**
 * General Header for all pages
 */
const GeneralHeader = (): React.ReactElement => {
    const links: { title: string; url: string }[] = require("./links.json");

    const [mobileNavOpen, setMobileNavOpen] = React.useState<boolean>(false);

    /**
     * Animate the header on mount
     */
    React.useEffect(() => {
        gsap.fromTo(
            "#main-header",
            {
                y: -20,
                filter: "blur(100px)",
                webkitFilter: "blur(100px)",
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                filter: "none",
                webkitFilter: "none",
                delay: 0.5,
            }
        );
    }, []);

    React.useEffect(() => {
        if (mobileNavOpen) {
            gsap.to("#mobile-nave-drawer", {
                opacity: 1,
                pointerEvents: "all",
                duration: 0.5,
            });
        } else {
            gsap.to("#mobile-nave-drawer", {
                opacity: 0,
                pointerEvents: "none",
                duration: 0.5,
            });
        }
    }, [mobileNavOpen]);

    return (
        <header
            id="main-header"
            className="flex items-start justify-between gap-10 w-full py-4 md:py-10 z-10 fixed xl:sticky top-0"
        >
            <a
                href="/"
                data-href="/"
                className="logo-link-block"
            >
                <Image
                    src="/images/logo-white.svg"
                    width={50}
                    height={100}
                    alt="Logo"
                />
            </a>

            <HeaderNav />

            <button
                className="p-2 w-14 h-14 rounded-full flex flex-col items-center justify-center gap-2 hover:bg-[white]/90 xl:hidden fixed right-10 z-10 -rotate-45"
                onClick={(e) => {
                    e.preventDefault();
                    setMobileNavOpen(!mobileNavOpen);
                }}
            >
                <div className="w-8 h-1 rounded-full bg-[black]"></div>
                <div className="w-8 h-1 rounded-full bg-[black]"></div>
            </button>

            <div
                id="mobile-nave-drawer"
                className="flex xl:hidden flex-col fixed top-0 right-0 w-screen max-w-[400px] h-screen overflow-auto bg-[black] p-8"
                style={{
                    opacity: 0,
                    pointerEvents: "none",
                }}
            >
                <HeaderNav mobile={true} />
            </div>
        </header>
    );
};

export default GeneralHeader;
