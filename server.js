const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv').config();

const app = require('./app');

// Database Connection
mongoose.connect(process.env.DATABASE_URI).then(() => {
  console.log('Database Connected Successfully'.blue.bold);
});

// Server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running in port ${port}`.white.bold);
});
