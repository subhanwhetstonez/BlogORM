const express = require("express");
const router = express.Router();
const UserService = require("../service/user_services");
const userService = new UserService();

router.get("/", async (req, res) => {
  const data = await userService.userDisplay();
  res.json(data);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await userService.specificUser(id);
  res.json(data);
});

router.get("/:users_id/blogs", async (req, res) => {
  const { users_id } = req.params;
  const data = await userService.blogByUser(users_id);
  res.json(data);
});

router.post("/", async (req, res) => {
  const { name } = req.body;
  await userService.inputUser(name);
  res.json("STUDENT HAS BEEN ADDED");
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await userService.updateUser(id, name);
  res.json("USER UPDATED");
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await userService.deleteUser(id);
  res.send("STUDENT DATA DELETED SUCCESSFULLY");
});

module.exports = router;
