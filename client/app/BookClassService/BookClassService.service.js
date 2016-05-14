'use strict';

angular.module('yoFitFocusApp').factory('BookClassService', ['$http', function ($http) {
  var api = {
    getClasses: function () {
      return $http.get('/api/bookClass')
    },
    addClass: function (bookClass_id) {
      return $http.post('/api/bookClass', bookClass_id)
    },
    updateClass : function(bookClass_id, isBooked) {
      return $http.post('/api/bookClass/' + bookClass_id + '/booked',
        {booked: isBooked })
    },
    getClass: function (bookClass_id) {
      return $http.get('/api/bookClass/' + bookClass_id)
    }
  };
  return api
}]);
