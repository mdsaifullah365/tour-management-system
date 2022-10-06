const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: [true, 'Name must be unique'],
    trim: true,
    maxLength: [100, "Name can't be larger than 100 characters"],
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
  },
  destination: {
    type: String,
    required: [true, 'Destination is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxLength: [500, "Description can't be larger than 500 characters"],
  },
  price: {
    type: Number,
    min: [0, "Price can't be negative"],
    required: [true, 'Price is required'],
  },
  duration: {
    type: Number,
    required: [true, 'Duration is required'],
    min: [1, 'Duration must be at least 1 day'],
    validate: {
      validator: (value) => {
        return Number.isInteger(value);
      },
      message: 'Duration must be an integer',
    },
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
