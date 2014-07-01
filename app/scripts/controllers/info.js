'use strict';
angular.module('experimentFrameworkApp')
.controller('InfoCtrl', function ($scope) {
  $scope.$on('update-info',function(e,info){
    $scope.info = info; 
  });
});
