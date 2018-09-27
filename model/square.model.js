const mongoose = require('mongoose');

const SquareSchema = mongoose.Schema({
  id: String,
  color: String,
  border: Number,
  size: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Square', SquareSchema);
