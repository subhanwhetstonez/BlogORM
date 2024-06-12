const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes.js");
const { sequelize } = require("./models"); // Import Sequelize instance and models

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", routes);

// Sync database and start server
const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
