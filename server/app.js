require("dotenv").config();
const express = require("express");
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  console.log(req.body);
  console.log("hola from here");
  res.json({ res: "Hello from API endpoint" });
});
module.exports = server;
