'use strict';

var _ = require('lodash');
var Forum = require('./forum.model');

// Get list of forums
exports.index = function(req, res) {
  Forum.find(function (err, forums) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(forums);
  });
};

// Get a single forum
exports.show = function(req, res) {
  Forum.findById(req.params.id, function (err, forum) {
    if(err) { return handleError(res, err); }
    if(!forum) { return res.status(404).send('Not Found'); }
    return res.json(forum);
  });
};

// Creates a new forum in the DB.
exports.create = function(req, res) {
  Forum.create(req.body, function(err, forum) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(forum);
  });
};

// Updates an existing forum in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Forum.findById(req.params.id, function (err, forum) {
    if (err) { return handleError(res, err); }
    if(!forum) { return res.status(404).send('Not Found'); }
    var updated = _.merge(forum, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(forum);
    });
  });
};

// Deletes a forum from the DB.
exports.destroy = function(req, res) {
  Forum.findById(req.params.id, function (err, forum) {
    if(err) { return handleError(res, err); }
    if(!forum) { return res.status(404).send('Not Found'); }
    forum.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}