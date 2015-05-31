'use strict';

angular.module('bankApp')
  .filter('url', function (resolve) {
    return function (routeName, options) {
      return resolve.href(routeName, options);
    };
  });
