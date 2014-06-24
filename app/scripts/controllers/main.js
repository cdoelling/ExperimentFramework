'use strict';

angular.module('experimentFrameworkApp')
.controller('MainCtrl', function ($scope) {
  $scope.blur = function(field){
    console.log(field);
    console.log($scope[field]);
  };
});
