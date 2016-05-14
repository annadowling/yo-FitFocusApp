'use strict';

angular.module('yoFitFocusApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/bookclass', {
        templateUrl: 'app/bookclass/bookclass.html',
        controller: 'BookclassCtrl'
      });
  });
