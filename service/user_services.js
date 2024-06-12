const { User, Blog } = require("../models");

class UserService {
  async userDisplay() {
    return await User.findAll({
      include: Blog,
    });
  }

  async specificUser(id) {
    return await User.findByPk(id, {
      include: Blog,
    });
  }

  async blogByUser(userId) {
    return await Blog.findAll({
      where: { users_id: userId },
    });
  }

  async inputUser(name) {
    return await User.create({ name });
  }

  async updateUser(id, name) {
    return await User.update(
      { name },
      {
        where: { id },
      }
    );
  }

  async deleteUser(id) {
    return await User.destroy({
      where: { id },
    });
  }
}

module.exports = UserService;
