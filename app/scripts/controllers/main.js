'use strict';

angular.module('experimentFrameworkApp')
  .controller('MainCtrl', function ($scope,login) {
    console.log(login);
    $scope.awesomeThings = [];
  });
