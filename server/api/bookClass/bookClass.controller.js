'use strict';

var _ = require('lodash');
var BookClass = require('./bookClass.model');

// Get list of bookClasss
exports.index = function(req, res) {
  BookClass.find(function (err, bookClasss) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(bookClasss);
  });
};

// Get a single bookClass
exports.show = function(req, res) {
  BookClass.findById(req.params.id, function (err, bookClass) {
    if(err) { return handleError(res, err); }
    if(!bookClass) { return res.status(404).send('Not Found'); }
    return res.json(bookClass);
  });
};

// Creates a new bookClass in the DB.
exports.create = function(req, res) {
  BookClass.create(req.body, function(err, bookClass) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(bookClass);
  });
};

// Updates an existing bookClass in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  BookClass.findById(req.params.id, function (err, bookClass) {
    if (err) { return handleError(res, err); }
    if(!bookClass) { return res.status(404).send('Not Found'); }
    var updated = _.merge(bookClass, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(bookClass);
    });
  });
};

// Deletes a bookClass from the DB.
exports.destroy = function(req, res) {
  BookClass.findById(req.params.id, function (err, bookClass) {
    if(err) { return handleError(res, err); }
    if(!bookClass) { return res.status(404).send('Not Found'); }
    bookClass.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}