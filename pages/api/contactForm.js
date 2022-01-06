/**
 *
 *
 * Imports
 * ------------------------------------------------------------------------------
 *
 */
const fs = require("fs");
const nodemailer = require("nodemailer");

/** ********************* Functions and Other API Imports */

// let transporter = nodemailer.createTransport({
//     host: "smtp.dreamhost.com",
//     port: 465,
//     secure: true, // true for 465, false for other ports
//     auth: {
//         user: "info@tben.design",
//         pass: "tobybenoti",
//     },
// });

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "benoti.san@gmail.com",
        pass: "pzeacyigrdutlbbr",
    },
});

/**
 *
 *
 * API handler
 * ------------------------------------------------------------------------------
 * @param {Object} req - http incoming request
 * @param {Object} res - http response
 *
 */
export default async function handler(req, res) {
    /** ********************* Get Page Data */
    if (req.method === "POST") {
        let name = req.body.name;
        let email = req.body.email;
        let message = req.body.message;

        console.log("Message Sending ...");

        try {
            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: email, // sender address
                to: "benoti.san@gmail.com, benoti.sanchez@gmail.com", // list of receivers
                subject: "Tben.me | Client Message", // Subject line
                text: "Hello from tben",
                html: `<h1>Message from ${name}</h1><h4>Name: ${name}</h4><h4>Email: ${email}</h4><h4>Message:</h4><p>${message}</p>`, // html body
            });

            console.log("Message sent: %s", info.messageId);
            res.json({ msg: "Success", info: info });
        } catch (error) {
            console.log(error);
            res.json({ msg: "Failed" });
        }
    }
}
