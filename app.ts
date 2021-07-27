const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// routes

// App usages
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use((req: any, res: any, next: any) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,Delete,PUT,PATCH");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
});

// routes usages
//this route is optional
app.get("/", (req: any, res: any, next: any) => {

    res.json({
        status: 400,
        msg: "Web Socket Launcher!"
    });
});

app.use((req: any, res: any, next: any) => {
    res.json({
        status: 404,
        msg: "Request Not Found!"
    });
});

module.exports = app;