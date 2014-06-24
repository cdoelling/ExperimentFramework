'use strict';

angular.module('experimentFrameworkApp')
.controller('LoginCtrl', function ($scope,loginService,userService,$location) {
  $scope.submit = function() {
    loginService($scope.username,$scope.password)
    .then(function(){
      userService.getUser()
      .then(function(){
        $location.url('/');
      });
    });
  };
});
