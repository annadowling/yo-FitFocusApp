'use strict';

describe('Service: PostsService', function () {

  // load the service's module
  beforeEach(module('yoFitFocusApp'));

  // instantiate service
  var PostsService;
  beforeEach(inject(function (_PostsService_) {
    PostsService = _PostsService_;
  }));

  it('should do something', function () {
    expect(!!PostsService).toBe(true);
  });

});
