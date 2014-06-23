'use strict';

angular.module('experimentFrameworkApp')
.controller('UserCtrl', function ($scope,userService) {
  $scope.user = userService.user;
});

