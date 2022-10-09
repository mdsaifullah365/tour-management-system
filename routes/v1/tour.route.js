const express = require('express');
const tourControllers = require('../../controllers/tour.controller');
const countTourViews = require('../../middlewares/countTourViews');
const validateId = require('../../middlewares/validateId');
const router = express.Router();

router.route('/trending').get(tourControllers.getMostViewedTours);

router.route('/cheapest').get(tourControllers.getCheapestTours);

router
  .route('/')
  .get(tourControllers.getTours)
  .post(tourControllers.createTour);

router
  .route('/:id')
  .get(validateId, tourControllers.getTourById, countTourViews)
  .patch(validateId, tourControllers.updateTourById);

module.exports = router;
