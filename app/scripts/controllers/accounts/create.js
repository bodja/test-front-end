'use strict';

angular.module('bankApp')
  .controller('AccountsCreateCtrl', function ($scope, api, resolve,  $location, setDirtyForm, Notification) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.account = {};
    $scope.form = {};

    $scope.submit = function (accountData) {
      if ($scope.form.accountForm.$valid) {
        api.post('users/', accountData).then(
          function (response) {
            $scope.account = response.data;
            $location.path(resolve.href('base.accounts_edit', [$scope.account.id]));
            Notification.success({message: "Created successfully.", delay: 2000});
          }, function (response) {
            $scope.form.accountForm.backendErrors = response.data;
          });
      } else {
        setDirtyForm($scope.form.accountForm);
      }
    };
  });
