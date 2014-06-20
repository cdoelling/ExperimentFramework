'use strict';

/**
 * @ngdoc function
 * @name experimentFrameworkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the experimentFrameworkApp
 */
angular.module('experimentFrameworkApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
