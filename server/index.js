const express = require("express");
const { conn } = require("./db.js");
const server = require("./app.js");

// Define port
const PORT = process.env.PORT || 3001;

// const app = express();

// Enable CORS
// app.use(cors());

// Body Parser
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Add router
// app.use("/", router);

// Connect to DB
conn
  .authenticate()
  .then(() =>
    server.listen(PORT, () => {
      console.log(`Server Working at Port: ${PORT}`);
    })
  )
  .catch((error) => console.log(error));
