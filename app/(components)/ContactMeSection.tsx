"use client";

import React from "react";
import ContactForm from "./ContactForm";

export default function ContactMeSection() {
    return (
        <div className="max-w-6xl w-full flex items-start page-section">
            <div className="flex flex-col items-start gap-6 w-full xl:w-[50%]">
                <div className="h-[150px]"></div>

                <h2 className="m-0">Contact Me.</h2>

                <div className="flex flex-col-reverse xl:flex-col items-start gap-4">
                    <span className="text-[24px]">Let's talk.</span>
                </div>

                <div className="flex flex-col items-start w-full">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
