'use strict';
angular.module('yoFitFocusApp')
  .controller('BookclassCtrl', ['$scope', 'BookClassService',
    function ($scope, BookClassService) {
      $scope.newClass = {};
      BookClassService.getClasses()
        .success(function (bookClass) {
          $scope.bookClass = bookClass;
        });

      $scope.update = function (bookClass) {
        $scope.slot = bookClass;
        BookClassService.updateClass(bookClass._id, bookClass.booked)
          .success(function (updated_class) {
            bookClass.booked = updated_class.booked
          })
      };

      $scope.addClass = function () {
        var bookClass = {
          day: $scope.newClass.day,
          time: $scope.newClass.time,
          booked: $scope.newClass.booked
        };
        BookClassService.addClass(bookClass)
          .success(function (added_class) {
            $scope.bookClass.push(added_class);
          });
      }
    }]);
