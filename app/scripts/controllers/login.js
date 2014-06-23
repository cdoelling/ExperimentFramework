'use strict';

angular.module('experimentFrameworkApp')
.controller('LoginCtrl', function ($scope,userService) {
  $scope.submit = function() {
    userService.login($scope.username,$scope.password);
  };
});
