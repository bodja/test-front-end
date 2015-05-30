'use strict';

/**
 * @ngdoc function
 * @name bankApp.controller:AccountsListCtrl
 * @description
 * # AccountsListCtrl
 * Controller of the bankApp
 */
angular.module('bankApp')
  .controller('AccountsListCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
