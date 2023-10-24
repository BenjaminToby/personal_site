"use client";

import React from "react";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import { gsap } from "gsap";
import MyWorkSection from "./MyWorkSection";
import MySkillsSection from "./MySkillsSection";
import homepageTimeline from "../(utils)/homepage-timeline";
import { SiteContext } from "../../layouts/general_layout/GeneralLayout";
import ContactMeSection from "./ContactMeSection";

export type Project = {
    id: number;
    title: string;
    description: string;
    image?: string | null;
    url?: string | null;
    full_description?: string;
};

type ChildProps = {
    projects: Project[];
};

export default function HomepageComponent({ projects }: ChildProps) {
    const layoutContext: any = React.useContext(SiteContext);

    if (layoutContext) layoutContext.projects = projects;

    const comp = React.useRef<HTMLDivElement>(null);

    React.useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            homepageTimeline({ componentRef: comp });
        }, comp);

        return () => ctx.revert();
    }, []);

    return (
        <React.Fragment>
            <div
                id="homepage-content-wrapper"
                ref={comp}
                className="z-0 xl:z-50 mb-32"
            >
                <Hero />
                <AboutSection />
                <MySkillsSection />
                <MyWorkSection />
                <ContactMeSection />
            </div>
        </React.Fragment>
    );
}
