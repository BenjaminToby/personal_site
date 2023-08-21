import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

/**
 * @type {NextApiHandler}
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");

    res.status(200).json({
        title: "Hello There",
        message: "General Kenobi",
    });
}
