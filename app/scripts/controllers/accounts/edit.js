'use strict';

angular.module('bankApp')
  .controller('AccountsEditCtrl', function ($scope, $routeParams, api, fileFormSubmit) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var accountId = $routeParams.accId;

    api.get('users/' + accountId + '/').then(function (response) {
      $scope.account = response.data;
    });

    $scope.form = {};

    $scope.submit = function (accountData) {
      fileFormSubmit.put('users/' + accountId + '/', $scope, accountData);
    };
  });
