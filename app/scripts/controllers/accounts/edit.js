'use strict';

angular.module('bankApp')
  .controller('AccountsEditCtrl', function ($scope, $routeParams, api, setDirtyForm, Notification, Upload, API_ROOT, ipCookie) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var accountId = $routeParams.accId,
      token = ipCookie('token'),
      url = 'users/' + accountId + '/';

    api.get('users/' + accountId + '/').then(function (response) {
      $scope.account = response.data;
    });

    $scope.form = {};

    function successCallback (response) {
      $scope.account = response.data;
      $scope.form.accountForm.backendErrors = {};
      Notification.success({
        message: "Successfully saved.",
        delay: 2000
      });
    }
    function errorCallback (response) {
      $scope.form.accountForm.backendErrors = response.data;
    }

    $scope.upload = function (accountData) {
      if ($scope.form.accountForm.$valid) {
        if ($scope.userPhoto) {
          // Use fileupload when we have file in form
          $scope.userPhoto.upload = Upload.upload({
            url: API_ROOT + url,
            method: 'PUT',
            headers: {
              'Authorization': 'Token ' + token,
              'Accept': 'application/json'
            },
            fields: accountData,
            file: $scope.userPhoto,
            fileFormDataName: 'photo'
          });

          $scope.userPhoto.upload.then(successCallback, errorCallback);

          $scope.userPhoto.upload.progress(function (evt) {
            $scope.userPhoto.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
          });
        } else {
          // if no file remove it from the data to avoid failed validation
          delete accountData['photo'];
          api.put(url, accountData).then(successCallback, errorCallback);
        }
      } else {
        setDirtyForm($scope.form.accountForm);
      }
    }
  });
