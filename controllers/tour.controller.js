const {
  getToursService,
  createTourService,
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

    const tours = await createTourService(tour);

    res.status(200).json({
      success: true,
      message: 'Data saved successfully',
      data: tours,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't save the data",
      error: error.message,
    });
  }
};
