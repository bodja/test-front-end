'use strict';

describe('Controller: AccountsListCtrl', function () {

  // load the controller's module
  beforeEach(module('bankApp'));

  var AccountsListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountsListCtrl = $controller('AccountsListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
