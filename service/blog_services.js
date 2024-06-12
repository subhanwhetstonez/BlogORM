const { Blog } = require("../models");

class BlogService {
  async blogDisplay() {
    return await Blog.findAll();
  }

  async specificBlog(id) {
    return await Blog.findByPk(id);
  }

  async specificBlogByUser(userId) {
    return await Blog.findAll({
      where: { users_id: userId },
    });
  }

  async inputBlog(users_id, title, content) {
    return await Blog.create({ users_id, title, content });
  }

  async updateBlog(id, title, content) {
    return await Blog.update(
      { title, content },
      {
        where: { id },
      }
    );
  }

  async deleteBlog(id) {
    return await Blog.destroy({
      where: { id },
    });
  }
}

module.exports = BlogService;
