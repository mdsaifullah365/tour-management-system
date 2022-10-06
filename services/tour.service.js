const Tours = require('../models/Tour');
module.exports.getToursService = async () => {
  const result = await Tours.find({});
  return result;
};
