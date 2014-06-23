'use strict';

angular.module('experimentFrameworkApp')
.controller('LoginCtrl', function ($scope,loginService,userService) {
  $scope.submit = function() {
    loginService($scope.username,$scope.password)
    .then(function(){
      userService.getUser();
    });

  };
});
