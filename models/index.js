const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("blogs", "postgres", "1122", {
  host: "localhost",
  dialect: "postgres",
});

const User = require("./user.js")(sequelize, DataTypes);
const Blog = require("./blog.js")(sequelize, DataTypes);

User.hasMany(Blog, { foreignKey: "users_id" });
Blog.belongsTo(User, { foreignKey: "users_id" });

sequelize.sync();

module.exports = { sequelize, User, Blog };
