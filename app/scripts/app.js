'use strict';

/**
 * @ngdoc overview
 * @name experimentFrameworkApp
 * @description
 * # experimentFrameworkApp
 *
 * Main module of the application.
 */
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
        templateUrl: 'views/login.html',
        controller: 'MainCtrl'
      })     
      .when('/about', {
        templateUrl: 'views/browser.html',
        controller: 'AboutCtrl'
      })
      .when('/warning', {
        templateUrl: 'views/warning.html' 
      })
      .otherwise({
        redirectTo: '/'
      });
  });
