const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Theater = sequelize.define('Theater', {
  name: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  seats: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Theater;