import React from "react";
import HomepageComponent from "./(components)/HomepageComponent";

const datasquirel = require("datasquirel");

// export const revalidate = 3600;

type DsqlResponse = {
    success: boolean;
    payload: any;
};

export default async function Homepage() {
    const projects: DsqlResponse = await datasquirel.get({
        db: process.env.DB_NAME,
        key: process.env.DATASQUIREL_API_KEY,
        query: "SELECT * FROM portfolio ORDER BY project_order ASC",
    });

    return (
        <React.Fragment>
            <HomepageComponent projects={projects.payload} />
        </React.Fragment>
    );
}
