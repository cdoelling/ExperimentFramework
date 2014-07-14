'use strict';

angular.module('experimentFrameworkApp')
.controller('UserCtrl', function ($scope,userService) {
  $scope.user = userService.user;
  $scope.$on('update-user',function(e,user){
    $scope.user = user;
  });
});

