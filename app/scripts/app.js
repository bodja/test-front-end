'use strict';

/**
 * @ngdoc overview
 * @name bankApp
 * @description
 * # bankApp
 *
 * Main module of the application.
 */
angular
    .module('bankApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'route-segment',
        'view-segment',
        'ng'
    ])
    .config(function ($routeSegmentProvider, $routeProvider) {
        $routeSegmentProvider.otherwise = function (route) {
            $routeProvider.otherwise({redirectTo: route});
            return this;
        };
        $routeSegmentProvider
            .when('/', 'base.auth')
            .when('/accounts', 'base.accounts_list')
            .otherwise('/')
            .segment('base', {
                templateUrl: 'views/base.html'
            }).within()
                .segment('auth', {
                    templateUrl: 'views/auth.html'
                })
                .segment('accounts_list', {
                    templateUrl: 'views/accounts/list.html'
                })
            .up();
    });
