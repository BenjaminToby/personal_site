//########################################## -- Form

// var nodemailer = require('nodemailer');

import nodemailer from "./node_modules/nodemailer/";

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'benoti.san@gmail.com',
        pass: 'lexbenoti'
    }
});

let mailOptions = {
    from: 'youremail@gmail.com',
    to: 'benoti.san@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});