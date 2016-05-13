/**
 * Created by annadowling on 17/03/2016.
 * The purpose of this controller is to handle the data created in PostsService.
 * This includes fetching the posts to the page, incrementing upvotes on posts
 * and controlling the mdDialog directive for adding posts to the array of posts displayed to the user.
 */

'use strict';

angular.module('yoFitFocusApp')
  .controller('PostsController', ['$scope', 'PostsService', '$mdDialog',
    function ($scope, PostsService, $mdDialog) {
      PostsService.getPosts()
        .success(function (posts) {
          $scope.posts = posts;
        });

      $scope.incrementUpvotes = function (post) {
        PostsService.upvotePost(post._id, post.upvotes + 1)
          .success(function (updated_post) {
            post.upvotes = updated_post.upvotes
          })
      };

      $scope.showAdd = function (ev) {
        $mdDialog.show({
            controller: DialogController,
            template: '<md-dialog style="width:80%; height:80%" aria-label="Mango (Fruit)"> <md-content class="md-padding"><h1>Add a Post</h1> <form name="postForm" novalidate ng-submit="addPost()"><div layout layout-sm="column"> <md-input-container flex> <label>Upvotes</label> <input type="number" min="0" max="1" name="upvotes" class="form-control" ng-model="newPost.upvotes" ng-required> </md-input-container> </div> <div layout layout-sm="column"> <md-input-container flex> <label>Title</label> <input type="text" name="title"class="form-control" ng-model="newPost.title" ng-required> </md-input-container> </div> <div layout layout-sm="column"> <md-input-container flex> <label>Date</label> <input type="date" name="date" class="form-control" ng-model="newPost.date"> </md-input-container> <md-input-container flex> </div> <div layout layout-sm="column"> <md-input-container flex> <label>Link</label> <input type="url" class="form-control" ng-model="newPost.link"> </div> <div ng-controller="ShellCtrl" layout layout-sm="column"> <md-input-container flex> <input type="text" ng-model="newPost.username" ng-init="newPost.username= getCurrentUser().name" readonly/> </div> </md-input-container> </form> </md-content> <div class="md-actions" layout="row"> <span flex></span> <md-button type="submit" class="btn btn-primary" ng-click="addPost(newPost)" ng-disabled="postForm.$pristine || (postForm.$dirty && postForm.$invalid) "> Post </md-button></div> </md-dialog>',
            targetEvent: ev
          })
          .then(function (response) {
            console.log(response);
            $scope.posts.push(response); // push the response(the filled out post field from mdDialog) to the list of posts
          }, function () {
            $scope.status = 'You cancelled the dialog.';
          });
      };

      function DialogController($scope, $mdDialog) {
        $scope.newPost = {};
        $scope.addPost = function (answer) { // add the post to the page and then hide the mdDialog pop up form.
          $mdDialog.hide(answer);
          var post = {
            title: $scope.newPost.title,
            link: $scope.newPost.link,
            username: $scope.newPost.username,
            upvotes: $scope.newPost.upvotes,
            date: $scope.newPost.date
          };

          PostsService.addPost(post)
            .success(function (added_post) {
              $scope.posts.push(added_post);
              $scope.newPost = {}
            });
        };
      };

    }]);







