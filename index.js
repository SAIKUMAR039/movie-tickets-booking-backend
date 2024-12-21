const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDB, sequelize } = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());
app.use(cors());

/*sequelize.sync({ force: true })
  .then(() => {
    console.log('All tables synced successfully!');
  })
  .catch((error) => {
    console.error('Error syncing tables:', error.message);
  });
*/
// Routes
app.use('/api/movies', require('./routes/movieRoutes'));
app.use('/api/theaters', require('./routes/theaterRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));



const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


