const Tour = require('../models/Tour');

module.exports.getToursService = async (queries) => {
  const { fields, sortBy, skip, limit } = queries;

  const tours = await Tour.find({})
    .skip(skip)
    .limit(limit)
    .select(fields)
    .sort(sortBy);

  const total = await Tour.countDocuments();
  const page = Math.ceil(total / limit);

  return { total, page, tours };
};

module.exports.createTourService = async (data) => {
  const result = await Tour.create(data);

  return result;
};

module.exports.getTourByIdService = async (id) => {
  const result = await Tour.findById(id);

  return result;
};

module.exports.updateTourByIdService = async (id, data) => {
  const result = await Tour.updateOne(
    { _id: id },
    { $set: data },
    {
      runValidators: true,
    }
  );

  return result;
};
