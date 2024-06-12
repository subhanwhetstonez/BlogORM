module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define("Blog", {
    users_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return Blog;
};
