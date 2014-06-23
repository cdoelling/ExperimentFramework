'use strict';
angular
  .module('experimentFrameworkApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })     
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/warning', {
        templateUrl: 'views/warning.html',
        controller: 'WarningCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
