'use strict';

angular.module('bankApp')
  .service('setDirtyForm', function setDirtyForm() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return function (form) {
      for (var k in form.$error) {
        angular.forEach(form.$error[k], function (item) {
          item.$dirty = true;
          item.$pristine = false;
        });
      }
      form.$setDirty();
    };
  });
