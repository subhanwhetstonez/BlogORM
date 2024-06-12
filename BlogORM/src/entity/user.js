const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "user",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
  },
  relations: {
    blogs: {
      type: "one-to-many",
      target: "Blog",
      inverseSide: "user",
      cascade: "true",
    },
  },
});
