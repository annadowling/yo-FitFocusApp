'use strict';

describe('Controller: PostsController', function () {

  // load the controller's module
  beforeEach(module('yoFitFocusApp'));

  var PostsControllerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostsControllerCtrl = $controller('PostsController', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
