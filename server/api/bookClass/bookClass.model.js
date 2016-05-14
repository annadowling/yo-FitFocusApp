'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookClassSchema = new Schema({
  day: String,
  time: String,
  booked: Boolean
});

module.exports = mongoose.model('bookClass', BookClassSchema);
