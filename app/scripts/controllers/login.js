'use strict';

angular.module('experimentFrameworkApp')
.controller('LoginCtrl', function ($scope,login) {
  console.log('gfd');
  $scope.submit = function() {
    console.log('sd',login);
  };
  $scope.awesomeThings = 'Tacos';
});
