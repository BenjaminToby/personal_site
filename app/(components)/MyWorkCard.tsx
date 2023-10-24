"use client";

import React from "react";
import { Project } from "./HomepageComponent";
import Image from "next/image";

export default function MyWorkCard({ project }: { project: Project }) {
    return (
        <div className="bg-primary/10 w-full shadow-2xl shadow-[black] relative">
            <Image
                src={project.image || ""}
                alt={project.title}
                width={600}
                height={300}
                className="object-cover object-top w-full"
            />
            <div className="p-10">
                <h3 className="m-0">{project.title}</h3>
                <p className="m-0">{project.description}</p>
            </div>

            <a
                href={project.url || "#"}
                className="absolute z-10 top-[340px] right-6 w-10 h-10 p-2 flex items-center justify-center rounded-full bg-[white]"
                target="_blank"
            >
                <img
                    src="/images/external-link-dark.png"
                    alt="External Link Icon"
                    width={20}
                    height={20}
                />
            </a>
        </div>
    );
}
