"use client";

import React from "react";

import submitContactForm from "../../functions/frontend/submitContactForm";

export default function ContactForm() {
    let [success, setSuccess] = React.useState<string | null>(null);
    let [loading, setLoading] = React.useState<boolean>(false);

    return (
        <form
            autoComplete="on"
            onSubmit={(e: any) => {
                submitContactForm(e, setSuccess, setLoading);
            }}
        >
            {loading && <div className="flex items-center justify-center w-full h-full absolute top-0 left-0 bg-[black]/90">Sending Mail...</div>}
            <input
                type="text"
                placeholder="Your Name"
                autoComplete="name"
                required
            />
            <input
                type="email"
                placeholder="Your Email Address"
                autoComplete="email"
                required
            />
            <textarea
                name="message"
                id="contact-form-message"
                cols={30}
                rows={10}
                placeholder="Message"
            ></textarea>
            <button type="submit">Submit</button>
            {success === "Success" && (
                <div className="message-response">
                    Success!!!{" "}
                    <button
                        onClick={() => {
                            window.location.reload();
                        }}
                    >
                        Reload
                    </button>
                </div>
            )}
            {success === "Failed" && (
                <div className="message-response failed">
                    Failed{" "}
                    <button
                        onClick={() => {
                            window.location.reload();
                        }}
                    >
                        Reload
                    </button>
                </div>
            )}
        </form>
    );
}
