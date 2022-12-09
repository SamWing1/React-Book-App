const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  currentlyReading: {
    type: String,
    required: true,
    default: 'Yes'
  },
  currentPage: {
    type: Number,
    required: true
  },
  note: {
    type: String,
    required: false
  },
},
);

module.exports = mongoose.model('Book', bookSchema);