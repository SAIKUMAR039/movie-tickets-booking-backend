const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Movie = sequelize.define('Movie', {
  title: { type: DataTypes.STRING, allowNull: false },
  genre: { type: DataTypes.STRING, allowNull: false },
  duration: { type: DataTypes.INTEGER, allowNull: true },
  releaseDate: { type: DataTypes.DATE, allowNull: false },
});

module.exports = Movie;