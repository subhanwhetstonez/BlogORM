const { getRepository } = require("typeorm");
const Blog = require("../entity/blog.js");

class BlogService {
  constructor() {
    this.blogRepository = getRepository(Blog);
  }

  async blogDisplay() {
    return await this.blogRepository.find();
  }

  async specificBlog(id) {
    return await this.blogRepository.findOne(id);
  }

  async specificBlogByUser(userId) {
    return await this.blogRepository.find({ where: { users_id: userId } });
  }

  async inputBlog(users_id, title, content) {
    const blog = this.blogRepository.create({ users_id, title, content });
    return await this.blogRepository.save(blog);
  }

  async updateBlog(id, title, content) {
    await this.blogRepository.update(id, { title, content });
    return this.blogRepository.findOne(id);
  }

  async deleteBlog(id) {
    await this.blogRepository.delete(id);
    return "BLOG DATA DELETED SUCCESSFULLY";
  }
}

module.exports = BlogService;
