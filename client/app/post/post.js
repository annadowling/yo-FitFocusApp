'use strict';

angular.module('yoFitFocusApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/posts', {
        templateUrl: 'app/post/post.html',
        controller: 'PostsController'
      });
  });
