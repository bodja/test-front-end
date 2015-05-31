'use strict';

angular.module('bankApp')
  .controller('AccountsListCtrl', function ($scope, api) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    api.get('users/').then(
      function (response) {
        $scope.accounts = response.data;
      }
    );

    $scope.removeAccount = function (index, id) {
      api.del('users/' + id + '/').then(function (result) {
        $scope.accounts.splice(index, 1);
      });
    };
  });
