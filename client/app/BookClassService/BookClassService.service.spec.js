'use strict';

describe('Service: BookClassService', function () {

  // load the service's module
  beforeEach(module('yoFitFocusApp'));

  // instantiate service
  var BookClassService;
  beforeEach(inject(function (_BookClassService_) {
    BookClassService = _BookClassService_;
  }));

  it('should do something', function () {
    expect(!!BookClassService).toBe(true);
  });

});
