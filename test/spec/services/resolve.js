'use strict';

describe('Service: resolve', function () {

  // load the service's module
  beforeEach(module('bankApp'));

  // instantiate service
  var resolve;
  beforeEach(inject(function (_resolve_) {
    resolve = _resolve_;
  }));

  it('should do something', function () {
    expect(!!resolve).toBe(true);
  });

});
