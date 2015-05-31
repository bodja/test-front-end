'use strict';

angular.module('bankApp')
  .controller('AuthCtrl', function ($scope, $location, api, ipCookie) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var query_dict = $location.search();
    if (query_dict.code !== undefined) {
      var code = query_dict.code;
      // clear piushstate
      $location.search({});

      api.post('auth/', {'code': code}).then(function (result) {
        var options = {path: '/'};
        ipCookie('token', result.data.token, options);
        ipCookie('user_id', result.data.id, options);
        $location.path('/');
      });
    }

    $scope.goAuth = function () {
      api.get('auth/').then(function (result) {
        window.location = result.data.url;
      });
    }
  });
