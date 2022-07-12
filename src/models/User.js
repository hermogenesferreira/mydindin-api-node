const { Sequelize } = require('sequelize');

const conn = require('../config/database');
const Despesa = require('./Despesa');
const Meta = require('./Meta');
const Receita = require('./Receita');

const User = conn.define('users', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true,
    unique: true,
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

User.sync();
module.exports = User;
