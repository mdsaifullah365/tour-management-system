const express = require('express');
const tourControllers = require('../../controllers/tour.controller');
const router = express.Router();

router
  .route('/')
  .get(tourControllers.getTours)
  .post(tourControllers.createTour);

module.exports = router;
