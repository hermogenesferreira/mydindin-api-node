const { Sequelize } = require('sequelize');

const conn = require('../config/database');
const Despesa = require('./Despesa');

const Categoria = conn.define('categorias', {
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
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Categoria.sync();
module.exports = Categoria;
