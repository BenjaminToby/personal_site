"use client";

import React from "react";
import { SiteContext } from "../../layouts/general_layout/GeneralLayout";
import { Project } from "./HomepageComponent";
import MyWorkCard from "./MyWorkCard";

export default function MyWorkSection() {
    const layoutContext: { projects: Project[] } = React.useContext(SiteContext);
    const projects = layoutContext.projects;

    return (
        <div className="max-w-6xl w-full flex flex-col xl:flex-row items-start pb-40 page-section">
            <div className="flex flex-col items-start gap-6 w-full xl:w-[50%]"></div>
            <div className="flex flex-col items-start gap-6 w-full xl:w-[50%]">
                <div className="h-[150px]"></div>

                <h2 className="m-0">Some of my work</h2>

                <div className="flex flex-col-reverse xl:flex-col items-start gap-4">
                    <span className="text-[24px]">I've been creating and building awesome designs and applications since 2016. Here are a few picks:</span>
                </div>

                <div className="flex flex-col items-start gap-44 mt-10">
                    {projects &&
                        projects.slice(0, 4).map((project, index) => (
                            <MyWorkCard
                                key={index}
                                project={project}
                            />
                        ))}
                </div>

                <a
                    href="/work"
                    className="button outlined mt-10"
                >
                    See More
                </a>
            </div>
        </div>
    );
}
