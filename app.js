const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const rootDir = require("./util/path");
const app = express();

//Routes

//Application Usages
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,Delete,PUT,PATCH");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
});
app.use("/public", express.static(path.join(__dirname, "public")));
app.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "index.html"));
});
app.use((req, res, next) => {
    res.status(404).send("<h1>Request Not Found!</h1>");
});

module.exports = app;