'use strict';

angular.module('bankApp')
  .controller('AccountsCreateCtrl', function ($scope, $location, fileFormSubmit) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.page_name = 'Create User Account';
    $scope.account = {};
    $scope.form = {};
    $scope.submit = function (accountData) {
      fileFormSubmit.post('users/', $scope, accountData);
    };
  });
