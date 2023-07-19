// General imports
import { Metadata } from "next";
import GeneralLayout from "../layouts/general_layout/GeneralLayout";

// Styles imports
import "../styles/main.css";
import "../styles/tw_main.css";

// Metadata
export const metadata: Metadata = {
    title: "Homepage",
    description: "Software engineer, UI/UX designer, Full Stack Web Developer, Web/graphic/motion designer, React Developer, Next JS developer, Node JS developer, Javascript Developer, Linux Ubuntu, DevOps, Nginx, MySQL developer, Freelancer",
    keywords: "UI/UX designer, Full Stack Web Developer, Web/graphic/motion designer, React Developer, NextJS developer, Node JS developer, Javascript Developer, Linux Ubuntu, DevOps, Nginx, MySQL developer, Freelancer",
};

// Main Layout Component
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <script
                    src="/scripts/main.js"
                    defer
                ></script>
            </head>
            <body>
                <GeneralLayout>{children}</GeneralLayout>
            </body>
        </html>
    );
}
