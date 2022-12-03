const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  currentPage: {
    type: Number,
    required: true
  },
  currentlyReading: {
    type: Boolean,
    required: true
  },
},
);

module.exports = mongoose.model('Book', bookSchema);