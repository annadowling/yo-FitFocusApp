'use strict';

var _ = require('lodash');
var DashBoard = require('./dashBoard.model');

// Get list of dashBoards
exports.index = function(req, res) {
  DashBoard.find(function (err, dashBoards) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(dashBoards);
  });
};

// Get a single dashBoard
exports.show = function(req, res) {
  DashBoard.findById(req.params.id, function (err, dashBoard) {
    if(err) { return handleError(res, err); }
    if(!dashBoard) { return res.status(404).send('Not Found'); }
    return res.json(dashBoard);
  });
};

// Creates a new dashBoard in the DB.
exports.create = function(req, res) {
  DashBoard.create(req.body, function(err, dashBoard) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(dashBoard);
  });
};

// Updates an existing dashBoard in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  DashBoard.findById(req.params.id, function (err, dashBoard) {
    if (err) { return handleError(res, err); }
    if(!dashBoard) { return res.status(404).send('Not Found'); }
    var updated = _.merge(dashBoard, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(dashBoard);
    });
  });
};

// Deletes a dashBoard from the DB.
exports.destroy = function(req, res) {
  DashBoard.findById(req.params.id, function (err, dashBoard) {
    if(err) { return handleError(res, err); }
    if(!dashBoard) { return res.status(404).send('Not Found'); }
    dashBoard.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}