'use strict';

angular.module('bankApp')
  .service('resolve', function Resolve($route) {
    // change urlPrefix to ""(empty string) if $locationProvider.html5Mode(true) in app.js
    var urlPrefix = '#!';

    function resolveRoute(options, route) {
      var parts = route.split('/');
      var optionNum = 0;
      for (var i = 0; i < parts.length; i++) {
        var part = parts[i];
        if (part[0] === ':') {
          parts[i] = options[optionNum];
          optionNum += 1;
          if (parts[i] == undefined)
            throw Error('Attribute \'' + part + '\' was not given for route \'' + route + '\'');
        }
      }
      return parts.join('/');
    }

    function resolve(routeName, options) {
      var routes = [];
      angular.forEach($route.routes, function (config, route) {
        if (config.segment === routeName) {
          routes.push(route);
        }
      });
      if (routes.length == 1) {
        return resolveRoute(options, routes[0]);
      } else if (routes.length == 0) {
        throw Error('Route ' + routeName + ' not found');
      }
      throw Error('Multiple routes matching ' + routeName + ' were found');
    }

    return {
      href: function (routeName, options) {
        return resolve(routeName, options);
      },
      hash: function (routeName, options) {
        return urlPrefix + resolve(routeName, options);
      }
    };
  });