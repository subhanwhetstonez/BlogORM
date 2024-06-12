const express = require("express");
const userController = require("./controller/user_controller.js");
const blogController = require("./controller/blog_controller.js");

const router = express.Router();

// User Routes
router.get("/users", userController.userDisplay);
router.get("/users/:id", userController.oneUser);
router.get("/users/:users_id/blogs", userController.userblogDisplay);
router.post("/users", userController.inputeUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

// Blog Routes
router.get("/blogs", blogController.blogDisplay);
router.get("/blogs/:id", blogController.oneBlog);
router.get("/blogs/user/:users_id", blogController.bloguserDisplay);
router.post("/blogs", blogController.putinBlog);
router.put("/blogs/:id", blogController.updateBlog);
router.delete("/blogs/:id", blogController.deleteBlog);

module.exports = router;
