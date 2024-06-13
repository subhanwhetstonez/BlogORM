const BlogService = require("../service/blog_services.js");

class BlogController {
  constructor() {
    console.log("Waa");
    this.blogService = new BlogService();
  }

  async blogDisplay(req, res) {
    console.log("wii");
    const data = await this.blogService.blogDisplay();
    res.json(data);
  }

  async bloguserDisplay(req, res) {
    const { users_id } = req.params;
    const data = await this.blogService.specificBlogByUser(users_id);
    res.json(data);
  }

  async oneBlog(req, res) {
    const { id } = req.params;
    const data = await this.blogService.specificBlog(id);
    res.json(data);
  }

  async putinBlog(req, res) {
    const { users_id, title, content } = req.body;
    await this.blogService.inputBlog(users_id, title, content);
    res.json("BLOG HAS BEEN ADDED");
  }

  async updateBlog(req, res) {
    const { id } = req.params;
    const { title, content } = req.body;
    await this.blogService.updateBlog(id, title, content);
    res.json("BLOG UPDATED");
  }

  async deleteBlog(req, res) {
    const { id } = req.params;
    await this.blogService.deleteBlog(id);
    res.send("BLOG DATA DELETED SUCCESSFULLY");
  }
}

module.exports = new BlogController();
