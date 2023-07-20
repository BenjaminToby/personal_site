import React from "react";
import Image from "next/image";

const GeneralFooter = () => {
    const date = new Date();
    return (
        <footer
            className="mt-10 w-full flex flex-col items-center py-20"
            style={{
                borderTop: "1px solid rgba(255,255,255,0.2)",
            }}
        >
            <div className="max-w-6xl w-full flex flex-wrap items-stretch gap-10">
                <a
                    href="/"
                    data-href="/"
                    className="logo-link-block -mb-4"
                >
                    <Image
                        src="/images/logo-white.svg"
                        width={50}
                        height={100}
                        alt="Logo"
                    />
                </a>
                <div className="flex flex-col items-start justify-between">
                    <div className="flex-col flex items-start gap-1">
                        <span className="opacity-50">Contact Me</span>
                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/in/benjamin-toby/"
                                target="_blank"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/BenjaminToby"
                                target="_blank"
                            >
                                Github
                            </a>
                            <a href="mailto:benoti.san@gmail.com">Mail</a>
                            <a href="tel:+2348123682346">Phone</a>
                        </div>
                    </div>
                    <span className="text-sm opacity-40">Copyright © {date.getFullYear()} Tben.me. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    );
};

export default GeneralFooter;
