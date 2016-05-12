'use strict';

angular.module('yoFitFocusApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/forum', {
        templateUrl: 'app/forum/forum.html',
        controller: 'ForumCtrl'
      });
  });
