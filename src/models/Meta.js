const { Sequelize } = require('sequelize');

const conn = require('../config/database');
const User = require('./User');

const Meta = conn.define('metas', {
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
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Meta.sync();
module.exports = Meta;
