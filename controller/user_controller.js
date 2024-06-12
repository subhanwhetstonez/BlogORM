const UserService = require("../service/user_services");

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async userDisplay(req, res) {
    const data = await this.userService.userDisplay();
    res.json(data);
  }

  async userblogDisplay(req, res) {
    const { users_id } = req.params;
    const data = await this.userService.blogByUser(users_id);
    res.json(data);
  }

  async oneUser(req, res) {
    const { id } = req.params;
    const data = await this.userService.specificUser(id);
    res.json(data);
  }

  async inputeUser(req, res) {
    const { name } = req.body;
    await this.userService.inputUser(name);
    res.json("STUDENT HAS BEEN ADDED");
  }

  async updateUser(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    await this.userService.updateUser(id, name);
    res.json("USER UPDATED");
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    await this.userService.deleteUser(id);
    res.send("STUDENT DATA DELETED SUCCESSFULLY");
  }
}

module.exports = new UserController();
