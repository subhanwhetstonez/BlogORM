require("reflect-metadata");
const { createConnection } = require("typeorm");
const express = require("express");
const app = express();
const userController = require("./controller/user_controller");
const blogController = require("./controller/blog_controller");

app.use(express.json());

createConnection()
  .then(async (connection) => {
    app.use("/users", userController);
    app.use("/blogs", blogController);

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => console.log(error));
