const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("rds_test", "root", "Nikhil123", {
  host: "database-1.cnpzdb4g9bfs.eu-north-1.rds.amazonaws.com",
  dialect: "mysql",
});

module.exports = { sequelize };


