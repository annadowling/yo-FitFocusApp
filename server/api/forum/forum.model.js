'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ForumSchema = new Schema({
  name: String,
  message: String
});

module.exports = mongoose.model('forums', ForumSchema);
