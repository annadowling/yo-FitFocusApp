'use strict';
angular.module('yoFitFocusApp')
  .controller('ForumCtrl', ['$scope','ForumService',
    function($scope,ForumService) {
      $scope.newForum = { };
      ForumService.getForums()
        .success(function(forum) {
          $scope.forum = forum;
        });

      $scope.addForum = function(){
        var forum = {
          name: $scope.newForum.name,
          message: $scope.newForum.message
        };
        ForumService.addForum(forum)
          .success(function(added_forum) {
            $scope.forum.push(added_forum);
          });
      }
    }]);
