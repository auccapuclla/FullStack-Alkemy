require("dotenv").config();
const express = require("express");
const server = express();
const routes = require("./routes/index.js");

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/", routes);

module.exports = server;
