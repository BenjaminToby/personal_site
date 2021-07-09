const express = require('express');
const nodemailer = require("nodemailer");
var exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require("path");


const app = express();

// View engine setup
app.engine('handlebars', exphbs({ defaultLayout: "index" }));
app.set('view engine', 'handlebars');
// app.set('views', './views');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static folder
app.use("/public", express.static("public"));

app.get('/', (req, res) => {
    // res.render("./public/index.html");
    // res.render("./views/layouts/main.handlebars");
    // res.send("./views/layouts/main.handlebars");
    // res.sendFile("./public/index.html");
    res.render("main");
});

app.get('/data', (req, res) => {
    res.write("<h1>Whaddap</h1>");
    res.write("<p>This is a short text</p>");
    res.end();
    // console.log(req);
});









app.post("/send", (req, res) => {

    let message = `
        <h2>You have a new message</h2>
        <h4>Message details:</h4>
        <ul>
            <li>Name: ${req.body.Name}</li>
            <li>Email: ${req.body.EmailAddress}</li>
            <li>Message: ${req.body.Message}</li>
        </ul>
    `;


    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.dreamhost.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: "info@tben.design", // generated ethereal user
                pass: "tobybenoti", // generated ethereal password
            },

            tls: {
                rejectUnauthorized: false
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"New Client" <info@tben.design>', // sender address
            to: "benoti.san@gmail.com", // list of receivers
            subject: "Client Request", // Subject line
            text: "A new message from a client", // plain text body
            html: message, // html body
        });

        console.log("Message sent: ", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: ", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main().catch(console.error);

    // res.render("main");
    // document.querySelector("#contact-form").innerHTML = "Message Sent";
    res.end();

});



app.listen(8080, () => console.log('Server started ...'));
