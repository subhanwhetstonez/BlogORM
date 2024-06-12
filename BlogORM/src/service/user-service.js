const { getRepository } = require("typeorm");
const User = require("../entity/user.js");
const Blog = require("../entity/blog.js");

class UserService {
  constructor() {
    this.userRepository = getRepository(User);
    this.blogRepository = getRepository(Blog);
  }

  async userDisplay() {
    return await this.userRepository.find({ relations: ["blogs"] });
  }

  async specificUser(id) {
    return await this.userRepository.findOne(id, { relations: ["blogs"] });
  }

  async blogByUser(userId) {
    return await this.blogRepository.find({ where: { users_id: userId } });
  }

  async inputUser(name) {
    const user = this.userRepository.create({ name });
    return await this.userRepository.save(user);
  }

  async updateUser(id, name) {
    await this.userRepository.update(id, { name });
    return this.userRepository.findOne(id);
  }

  async deleteUser(id) {
    await this.userRepository.delete(id);
    return "STUDENT DATA DELETED SUCCESSFULLY";
  }
}

module.exports = UserService;
