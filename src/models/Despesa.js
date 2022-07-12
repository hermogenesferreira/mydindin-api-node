const { Sequelize } = require('sequelize');

const conn = require('../config/database');
const Categoria = require('./Categoria');
const User = require('./User');

const Despesa = conn.define('despesas', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  valor: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  momento: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  categoriaId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Despesa.sync();
module.exports = Despesa;
