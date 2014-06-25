'use strict';

angular.module('experimentFrameworkApp')
.controller('ExperimentCtrl', function ($scope) {
  $scope.blur = function(field){
    console.log($scope[field]);
  };
});
