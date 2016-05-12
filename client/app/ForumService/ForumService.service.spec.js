'use strict';

describe('Service: ForumService', function () {

  // load the service's module
  beforeEach(module('yoFitFocusApp'));

  // instantiate service
  var ForumService;
  beforeEach(inject(function (_ForumService_) {
    ForumService = _ForumService_;
  }));

  it('should do something', function () {
    expect(!!ForumService).toBe(true);
  });

});
