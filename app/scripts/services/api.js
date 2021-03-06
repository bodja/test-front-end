'use strict';

angular.module('bankApp')
  .service('api', function Api($http, $q, ipCookie, API_ROOT, $rootScope, $location, Notification) {
    function doRequest(method, url, data) {
      var deferred = $q.defer();
      var default_error_note = "Ooops!!! Something went wrong.";
      var headers = {
        'Content-Type': 'application/json'
      };
      var token = ipCookie('token');
      if (token != undefined) {
        headers['Authorization'] = 'Token ' + token;
      }
      $http({
        url: API_ROOT + url,
        method: method,
        data: data,
        type: 'json',
        headers: headers,
        transformRequest: function (data) {
          return JSON.stringify(data);
        }
      }).then(function (response) {
        deferred.resolve(response);
      }, function (response) {
        if (response.status === 401) {
          ipCookie.remove('token');
          ipCookie.remove('user_id');
          $rootScope.token = undefined;
          $location.path('/auth/');
        }
        if (response.data)
          Notification.error({message: response.data.detail || default_error_note, delay: 2000});
        else
          Notification.error({message: default_error_note, delay: 2000});
        deferred.reject(response);
      });
      return deferred.promise;
    }

    return {
      get: function (url, data) {
        return doRequest('GET', url, data);
      },
      post: function (url, data) {
        return doRequest('POST', url, data);
      },
      put: function (url, data) {
        return doRequest('PUT', url, data);
      },
      patch: function (url, data) {
        return doRequest('PATCH', url, data);
      },
      del: function (url, data) {
        return doRequest('DELETE', url, data);
      },
      options: function (url, data) {
        return doRequest('OPTIONS', url, data);
      }
    };
  });
