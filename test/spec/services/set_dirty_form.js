'use strict';

describe('Service: setDirtyForm', function () {

  // load the service's module
  beforeEach(module('bankApp'));

  // instantiate service
  var setDirtyForm;
  beforeEach(inject(function (_setDirtyForm_) {
    setDirtyForm = _setDirtyForm_;
  }));

  it('should do something', function () {
    expect(!!setDirtyForm).toBe(true);
  });

});
