const express = require('express');
const cors = require('cors');
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

// Routes
const tourRoutes = require('./routes/v1/tour.route');

app.use('/api/v1/tours', tourRoutes);

module.exports = app;
