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
  });
