import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { gsap } from "gsap";

/**
 * General Header for all pages
 */
const GeneralHeader = (): React.ReactElement => {
    const links: { title: string; url: string }[] = require("./links.json");

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

    return (
        <header
            id="main-header"
            className="flex items-start justify-between gap-10 w-full py-4 md:py-10 relative z-10"
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

            <nav>
                {links.map((link: { title: string; url: string; download?: boolean }, index) => {
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
                })}
            </nav>
        </header>
    );
};

export default GeneralHeader;
