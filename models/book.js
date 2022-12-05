const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Book'
  },
  name: {
    type: String,
    required: true
  },
  currentlyReading: {
    type: Boolean,
    required: true
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