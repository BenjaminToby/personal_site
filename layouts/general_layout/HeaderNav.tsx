"use client";

import React from "react";
import { gsap } from "gsap";

/**
 * General Header for all pages
 */
const HeaderNav = ({ mobile }: { mobile?: boolean }): React.ReactElement => {
    const links: { title: string; url: string }[] = require("./links.json");

    return (
        <nav
            className={
                "items-start xl:items-center gap-x-6 gap-y-2  xl:flex-row" +
                (mobile ? " flex-col" : " hidden xl:flex")
            }
        >
            {links.map(
                (
                    link: { title: string; url: string; download?: boolean },
                    index
                ) => {
                    return (
                        <a
                            key={index}
                            href={link.url}
                            data-href={link.url}
                            className="text-lg"
                            download={link.download}
                        >
                            {link.title}
                        </a>
                    );
                }
            )}

            <span className="opacity-20">|</span>

            <div className="flex items-start xl:items-center gap-4 flex-col xl:flex-row">
                <a href="https://github.com/BenjaminToby" target="_blank">
                    <img
                        src="/images/github-white.png"
                        alt="Benjamin Toby Github"
                        width={20}
                        height={20}
                        className="flex items-center"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/benjamin-toby/"
                    target="_blank"
                >
                    <img
                        src="/images/linkedin-white.png"
                        alt="Benjamin Toby Github"
                        width={20}
                        height={20}
                        className="flex items-center"
                    />
                </a>
                <a href="https://team.tben.me" target="_blank">
                    <img
                        src="/images/mattermost-logo.webp"
                        alt="Benjamin Toby Github"
                        width={20}
                        height={20}
                        className="flex items-center"
                    />
                </a>
            </div>
        </nav>
    );
};

export default HeaderNav;
