const { getToursService } = require('../services/tour.service');

module.exports.getTours = async (req, res) => {
  try {
    // const tours = await getToursService();
    const tours = 'Test';
    res.status(200).json({
      success: true,
      message: 'Successfully got the data',
      data: tours,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't get the data",
      error: error.message,
    });
  }
};
