const { conn } = require("./src/db.js");
const server = require("./src/app.js");

// Define port
const PORT = process.env.PORT || 3001;

// Connect to DB and start Server
conn
  .sync({ sync: false })
  .then(() =>
    server.listen(PORT, () => {
      console.log(`Server listening on PORT: ${PORT}`);
    })
  )
  .catch((error) => console.log(error));
