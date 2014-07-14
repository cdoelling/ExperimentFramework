'use strict';

angular.module('experimentFrameworkApp')
.controller('LoginCtrl', function ($scope,apiKeyService,userService,$location) {
  $scope.submit = function() {
    apiKeyService.store($scope.apiKey);
    userService.getUser()
    .then(function(){
      $location.url('/');
    });
  };
});
