'use strict';

angular.module('bankApp')
  .controller('AccountsEditCtrl', function ($scope, $routeParams, api, setDirtyForm, $log) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var accountId = $routeParams.accId;
    $scope.form = {};
    api.get('users/' + accountId + '/').then(function (response) {
      $scope.account = response.data;
    });

    $scope.submit = function (accountData) {
      if ($scope.form.accountForm.$valid) {
        api.put('users/' + accountId + '/', accountData).then(
          function (response) {
            $scope.account = response.data;
            $scope.form.accountForm.backendErrors = {};
          }, function (response) {
            $scope.form.accountForm.backendErrors = response.data;
          });
      } else {
        setDirtyForm($scope.form.accountForm);
      }
    };
  });
