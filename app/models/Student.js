var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  roll: {
    type: Number,
    required: true
  },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Student', StudentSchema);