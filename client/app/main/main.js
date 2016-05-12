'use strict';

angular.module('yoFitFocusApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      }).when('/map', {
      templateUrl: 'app/map/map.html',
      controller: 'MapController',
      authenticate: true
    }).when('/posts', {
      templateUrl: 'app/post/post.html',
      controller: 'PostsController',
      authenticate: true
    }).when('/main', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        authenticate: true
      })
      .when('/forum', {
        templateUrl: 'app/forum/forum.html',
        controller: 'ForumCtrl',
        authenticate: true
      });
  });
