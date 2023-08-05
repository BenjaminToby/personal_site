/**
 * Imports
 */
const fs = require("fs");
const sanitizeHtml = require("sanitize-html");
const nodemailer = require("nodemailer");

import sanitizeHtmlOptions from "../../functions/backend/sanitizeHtmlOptions";
import { NextApiRequest, NextApiResponse } from "next";

let transporter = nodemailer.createTransport({
    host: process.env.TBENMAIL_HOST,
    port: 587,
    auth: {
        user: process.env.TBENMAIL_EMAIL,
        pass: process.env.TBENMAIL_EMAIL_PASSWORD,
    },
});

/**
 * API handler
 *
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        let name = req.body.name;
        let email = req.body.email;
        let message = req.body.message;

        const html = `<h1>Message from ${name} | ${email}</h1><h4>Name:</h4><p>${name}</p><h4>Email:</h4><p>${email}</p><h4>Message:</h4><p>${message}</p>`;
        const sanitizedHtml = sanitizeHtml(html, sanitizeHtmlOptions);

        try {
            let info = await transporter.sendMail({
                from: `Tben.me <${process.env.TBENMAIL_EMAIL}>`,
                to: "benoti.san@gmail.com, benoti.sanchez@gmail.com",
                subject: "Tben.me | Client Message",
                text: "Hello from tben",
                html: sanitizedHtml,
            });

            console.log("Message sent: %s", info.messageId);
            res.json({ msg: "Success", info: info });
        } catch (error) {
            console.log(error);
            res.json({ msg: "Failed" });
        }
    }
}
