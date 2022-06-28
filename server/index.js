const express = require("express");
const { conn } = require("./src/db.js");
const server = require("./src/app.js");

// Define port
const PORT = process.env.PORT || 3001;

// Connect to DB and start Server
conn
  .authenticate()
  .then(() =>
    server.listen(PORT, () => {
      console.log(`Server Working at Port: ${PORT}`);
    })
  )
  .catch((error) => console.log(error));
