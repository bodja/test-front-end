'use strict';

describe('Service: fileFormSubmit', function () {

  // load the service's module
  beforeEach(module('bankApp'));

  // instantiate service
  var fileFormSubmit;
  beforeEach(inject(function (_fileFormSubmit_) {
    fileFormSubmit = _fileFormSubmit_;
  }));

  it('should do something', function () {
    expect(!!fileFormSubmit).toBe(true);
  });

});
