const express = require('express');
const nodemailer = require("nodemailer");
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');


const app = express();

// View engine setup
app.engine("handkebars", exphbs());
app.set("view engine", "handlebars");

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.send("Hello");
});

app.listen(8080, () => console.log('Server started ...'));
