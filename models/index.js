const { sequelize } = require('../config/db');
const Movie = require('./movie');
const Theater = require('./theater');
const Booking = require('./booking');

// Associations
Theater.belongsToMany(Movie, { through: 'TheaterMovies' });
Movie.belongsToMany(Theater, { through: 'TheaterMovies' });

Booking.belongsTo(Movie);
Booking.belongsTo(Theater);

module.exports = { sequelize, Movie, Theater, Booking };