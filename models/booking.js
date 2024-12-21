const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Booking = sequelize.define('Booking', {
  user: { type: DataTypes.STRING, allowNull: false },
  seats: { type: DataTypes.INTEGER, allowNull: false },
  bookingDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

module.exports = Booking;