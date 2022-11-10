const { Sequelize, DataTypes } = require("sequelize");
const connection = require('../db');

const Usuario = connection.define(
  "User",
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    login: {
      type: DataTypes.STRING,
    },
    senha: {
      type: DataTypes.STRING,
    },
  },
  {}
);

module.exports = Usuario;
