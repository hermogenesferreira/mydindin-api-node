const { Sequelize } = require('sequelize');

const conn = require('../config/database');
const User = require('./User');

const Receita = conn.define('receitas', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  valor: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Receita.sync();
module.exports = Receita;
