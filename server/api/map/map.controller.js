'use strict';

var _ = require('lodash');
var Map = require('./map.model');

// Get list of maps
exports.index = function(req, res) {
  Map.find(function (err, maps) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(maps);
  });
};

// Get a single map
exports.show = function(req, res) {
  Map.findById(req.params.id, function (err, map) {
    if(err) { return handleError(res, err); }
    if(!map) { return res.status(404).send('Not Found'); }
    return res.json(map);
  });
};

// Creates a new map in the DB.
exports.create = function(req, res) {
  Map.create(req.body, function(err, map) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(map);
  });
};

// Updates an existing map in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Map.findById(req.params.id, function (err, map) {
    if (err) { return handleError(res, err); }
    if(!map) { return res.status(404).send('Not Found'); }
    var updated = _.merge(map, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(map);
    });
  });
};

// Deletes a map from the DB.
exports.destroy = function(req, res) {
  Map.findById(req.params.id, function (err, map) {
    if(err) { return handleError(res, err); }
    if(!map) { return res.status(404).send('Not Found'); }
    map.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}