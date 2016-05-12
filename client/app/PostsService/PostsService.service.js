'use strict';

angular.module('yoFitFocusApp').factory('PostsService', ['$http', function($http){
  var api = {
    getPosts : function() {
      return $http.get('/api/posts')
    },
    addPost : function(post) {
      return $http.post('/api/posts',post)
    },
    upvotePost : function(post_id, new_upvote_count ) {
      return $http.post('/api/posts/' + post_id + '/upvotes',
        {upvotes: new_upvote_count })
    },
    getPost : function(post_id) {
      return $http.get('/api/posts/' + post_id )
    }
  };
  return api
}]);
