const { EntitySchema, JoinColumn } = require("typeorm");

module.exports = new EntitySchema({
  name: "Blog",
  tableName: "blogs",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    users_id: {
      type: "int",
    },
    title: {
      type: "varchar",
    },
    content: {
      type: "varchar",
    },
  },
  relations: {
    user: {
      type: "many-to-one",
      target: "User",
      JoinColumn: { name: "users_id" },
    },
  },
});
