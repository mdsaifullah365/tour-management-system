const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
  // Schema
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
