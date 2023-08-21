import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

/**
 * @type {NextApiHandler}
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({
        title: "Hello There",
        message: "General Kenobi",
    });
}
