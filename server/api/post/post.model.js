'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String, optional: true },
  username: { type: String, required: true },
  upvotes: Number,
  date: Date
});

module.exports = mongoose.model('posts', PostSchema);
