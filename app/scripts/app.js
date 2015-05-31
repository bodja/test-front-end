'use strict';

angular
  .module('bankApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ipCookie',
    'route-segment',
    'view-segment',
    'ng',
    'ui-notification'
  ])
  .value("API_ROOT", "http://0.0.0.0:8000/api/")
  .config(function ($routeSegmentProvider, $routeProvider, $locationProvider) {
    $locationProvider.html5Mode({enabled: true});
    $routeSegmentProvider.otherwise = function (route) {
      $routeProvider.otherwise({redirectTo: route});
      return this;
    };
    $routeSegmentProvider
      .when('/', 'base.accounts_list')
      .when('/edit/:accId/', 'base.accounts_edit')
      .when('/create/', 'base.accounts_create')
      .when('/auth/', 'base.auth')
      .when('/auth/complete/', 'base.auth_complete')
      .otherwise('/')
      .segment('base', {
        templateUrl: 'views/base.html'
      }).within()
        .segment('auth', {
          templateUrl: 'views/auth.html'
        })
        .segment('auth_complete', {
          controller: 'AuthCompleteCtrl'
        })
        .segment('accounts_list', {
          templateUrl: 'views/accounts/list.html'
        })
        .segment('accounts_edit', {
          templateUrl: 'views/accounts/edit.html',
          controller: 'AccountsEditCtrl'
        })
        .segment('accounts_create', {
          templateUrl: 'views/accounts/edit.html',
        controller: 'AccountsCreateCtrl'
        })
      .up();
  });
