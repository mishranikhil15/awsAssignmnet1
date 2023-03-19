const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("rdsTest", "admin", "abcd1234", {
  host: "database-1.cnpzdb4g9bfs.eu-north-1.rds.amazonaws.com",
  dialect: "mysql",
});

module.exports = { sequelize };


