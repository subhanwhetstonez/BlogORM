const express = require("express");
const router = express.Router();
const BlogService = require("../service/blog_services");
const blogService = new BlogService();

router.get("/", async (req, res) => {
  const data = await blogService.blogDisplay();
  res.json(data);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await blogService.specificBlog(id);
  res.json(data);
});

router.get("/user/:users_id", async (req, res) => {
  const { users_id } = req.params;
  const data = await blogService.specificBlogByUser(users_id);
  res.json(data);
});

router.post("/", async (req, res) => {
  const { users_id, title, content } = req.body;
  await blogService.inputBlog(users_id, title, content);
  res.json("BLOG HAS BEEN ADDED");
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  await blogService.updateBlog(id, title, content);
  res.json("BLOG UPDATED");
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await blogService.deleteBlog(id);
  res.send("BLOG DATA DELETED SUCCESSFULLY");
});

module.exports = router;
