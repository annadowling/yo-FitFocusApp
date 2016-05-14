'use strict';

describe('Controller: BookclassCtrl', function () {

  // load the controller's module
  beforeEach(module('yoFitFocusApp'));

  var BookclassCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookclassCtrl = $controller('BookclassCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
