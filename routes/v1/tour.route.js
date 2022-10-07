const express = require('express');
const tourControllers = require('../../controllers/tour.controller');
const countTourViews = require('../../middlewares/countTourViews');
const router = express.Router();

router
  .route('/')
  .get(tourControllers.getTours)
  .post(tourControllers.createTour);

router
  .route('/:id')
  .get(tourControllers.getTourById, countTourViews)
  .patch(tourControllers.updateTourById);

module.exports = router;
