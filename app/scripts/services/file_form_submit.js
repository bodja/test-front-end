'use strict';
// TODO: refoactor this maybe
angular.module('bankApp')
  .service('fileFormSubmit', function ($location, resolve, api, setDirtyForm, API_ROOT, Upload, ipCookie, Notification) {
    function upload (url, method, scope, data, redirect) {
      function successCallback (response) {
        scope.account = response.data;
        scope.form.backendErrors = {};
        Notification.success({
          message: "Successfully saved.",
          delay: 2000
        });
        if (redirect)
          $location.path(resolve.href('base.accounts_edit', [scope.account.id]));
      }
      function errorCallback (response) {
        scope.form.backendErrors = response.data;
      }
      var token = ipCookie('token');
      if (scope.form.$valid) {
        if (scope.fileModel) {
          // Use fileupload when we have file in form
          scope.fileModel.upload = Upload.upload({
            url: API_ROOT + url,
            method: method,
            headers: {
              'Authorization': 'Token ' + token,
              'Accept': 'application/json'
            },
            fields: data,
            file: scope.fileModel,
            fileFormDataName: 'photo'
          });

          scope.fileModel.upload.then(successCallback, errorCallback);

          scope.fileModel.upload.progress(function (evt) {
            scope.fileModel.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
          });
        } else {
          // if no file remove it from the data to avoid failed validation
          delete data['photo'];
          api[method.toLowerCase()](url, data).then(successCallback, errorCallback);
        }
      } else {
        setDirtyForm(scope.form);
      }
    }
    return {
      put: function (url, scope, data) {
        upload(url, 'PUT', scope, data);
      },
      post: function (url, scope, data) {
        upload(url, 'POST', scope, data, true);
      }
    }
  });
