const {
  getTourByIdService,
  updateTourByIdService,
} = require('../services/tour.service');

const countTourViews = async (req, res) => {
  const { id } = req.params;
  const tour = await getTourByIdService(id);

  return await updateTourByIdService(id, { __v: tour.__v + 1 });
};

module.exports = countTourViews;
