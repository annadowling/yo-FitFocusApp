'use strict';

angular.module('yoFitFocusApp').factory('ForumService', ['$http', function ($http) {
  var api = {
    getForums: function () {
      return $http.get('/api/forums')
    },
    addForum: function (forum) {
      return $http.post('/api/forums', forum)
    },
    getForum: function (forum_id) {
      return $http.get('/api/forums/' + forum_id)
    }
  };
  return api
}]);

