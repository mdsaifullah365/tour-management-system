const {
  getToursService,
  createTourService,
  getTourByIdService,
  updateTourByIdService,
} = require('../services/tour.service');

module.exports.getTours = async (req, res) => {
  try {
    const queries = {};

    if (req.query.fields) {
      queries.fields = req.query.fields.split(',').join(' ');
    }

    if (req.query.sort) {
      queries.sortBy = req.query.sort.split(',').join(' ');
    }

    if (req.query.page) {
      const { page = 1, limit = 10 } = req.query;

      queries.skip = (page - 1) * limit;
      queries.limit = +limit;
    }

    const result = await getToursService(queries);

    res.status(200).json({
      success: true,
      message: 'Successfully got the data',
      total: result.total,
      page: result.page,
      data: result.tours,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't get the data",
      error: error.message,
    });
  }
};

module.exports.createTour = async (req, res) => {
  try {
    const tour = req.body;

    const result = await createTourService(tour);

    res.status(200).json({
      success: true,
      message: 'Data saved successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't save the data",
      error: error.message,
    });
  }
};

module.exports.getTourById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await getTourByIdService(id);

    res.status(200).json({
      success: true,
      message: 'Successfully got the data',
      data: result,
    });

    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't get the data",
      error: error.message,
    });
  }
};

module.exports.updateTourById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const result = await updateTourByIdService(id, data);

    res.status(200).json({
      success: true,
      message: 'Successfully updated the data',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't update the data",
      error: error.message,
    });
  }
};

module.exports.getMostViewedTours = async (req, res) => {
  try {
    const queries = {
      limit: 3,
      sortBy: '-__v',
    };

    const result = await getToursService(queries);

    res.status(200).json({
      success: true,
      message: 'Successfully got the data',
      data: result.tours,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't get the data",
      error: error.message,
    });
  }
};

module.exports.getCheapestTours = async (req, res) => {
  try {
    const queries = {
      limit: 3,
      sortBy: 'price',
    };

    const result = await getToursService(queries);

    res.status(200).json({
      success: true,
      message: 'Successfully got the data',
      data: result.tours,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't get the data",
      error: error.message,
    });
  }
};
