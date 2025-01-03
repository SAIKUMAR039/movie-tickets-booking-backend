const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: 'postgres',
      alter: true
    }
  );

    const connectDB = async () => {
        try {
          await sequelize.authenticate();
          console.log('Connection has been established successfully.');
          await sequelize.sync({ alter: true });
          console.log('All models were synchronized successfully.');
        } catch (error) {
          console.error('Unable to connect to the database:', error);
        }
      }

module.exports = { connectDB, sequelize };