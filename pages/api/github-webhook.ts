// @ts-check

import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

const http = require("http");
const fs = require("fs");
const { createHmac } = require("crypto");

const key = process.env.GITHUB_WEBHOOK_SECRET || "";

/**
 * @param {import("next").NextApiRequest} req
 * @returns {boolean}
 */
const verify_signature = (req: NextApiRequest) => {
    console.log(req.headers);
    const signature = createHmac("sha256", key)
        .update(JSON.stringify(req.body))
        .digest("hex");
    console.log(signature);
    return `sha256=${signature}` === req.headers["x-hub-signature-256"];
};

/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************************** */

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    /**
     * Check method
     *
     * @description Check request method and return if invalid
     */
    if (req.method !== "POST") return res.json({ msg: "Failed!" });

    if (!verify_signature(req)) {
        console.log("Authorization failed");
        res.status(401).send("Unauthorized");
        return;
    }

    /** ********************* Initialize data */
    const data = req.body;

    try {
        /** ********************************************** */
        /** ********************************************** */
        /** ********************************************** */
        console.log("Request Recieved");

        const ref = data.ref;

        if (!ref?.match(/main/)) {
            console.log("Not Main Branch");
            res.json({
                success: true,
            });
            return;
        }

        fs.writeFileSync(
            path.resolve(process.cwd(), "REDEPLOY"),
            String(Date.now()),
            "utf-8"
        );

        console.log("Deploy Flag Triggered. Now Redeploying ...");

        /** ********************************************** */
        /** ********************************************** */
        /** ********************************************** */

        res.json({
            success: true,
        });

        /** ********************************************** */
        /** ********************************************** */
        /** ********************************************** */
    } catch (error) {
        console.log(error);
        res.json({
            msg: "Not Handled Yet",
        });
    }
}
