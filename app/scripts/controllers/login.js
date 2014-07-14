'use strict';

angular.module('experimentFrameworkApp')
.controller('LoginCtrl', function ($scope,apiKeyService,userService,$location,$rootScope) {
  $scope.submit = function() {
    $rootScope.$broadcast('update-info', {
      info:''
    });
    apiKeyService.store($scope.apiKey);
    userService.getUser()
    .then(function(){
      $location.url('/');
    })
    .catch(function(){
      $rootScope.$broadcast('update-info', {
        info:'API Key Error',
        error:true
      });
      apiKeyService.clear();
    });
  };
});
