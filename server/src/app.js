require("dotenv").config();
const express = require("express");
var cors = require("cors");

const server = express();
server.use(cors());

const routes = require("./routes/index.js");

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/", routes);

module.exports = server;
