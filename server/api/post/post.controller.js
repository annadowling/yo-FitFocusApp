var _ = require('lodash');
var Post = require('./post.model');

function handleError(res, err) {
  return res.send(500, err);
}

exports.index = function(req, res) {
  Post.find(function (err, posts) {
    if(err) { return handleError(res, err); }
    return res.json(200, posts);
  });
} ;
exports.create = function(req, res) {
  req.body.upvotes = 0;
  Post.create(req.body, function(err, post) {
    if (err) { return handleError(res, err); }
    return res.json(201, post);
  });
};

exports.show = function(req, res) {
  Post.findById(req.params.id, function (err, post) {
    if(err) { return handleError(res, err); }
    return res.json(200, post);
  });
} ;
// Update an existing posts upvotes.
exports.update_upvotes = function(req, res) {
  Post.findById(req.params.id, function (err, post) {
    post.upvotes = req.body.upvotes;
    post.save(function (err) {
      if(err) { return handleError(res, err); }
      return res.json(200, post);
    });
  });
};
