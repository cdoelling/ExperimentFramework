'use strict';
angular.module('experimentFrameworkApp')
.controller('InfoCtrl', function ($scope,$timeout) {
  $scope.$on('update-info',function(e,data){
    $scope.info = data.info;
    $scope.error = data.error;
    if($scope.timeoutHandle) 
    {
      $timeout.cancel($scope.timeoutHandle);
    }
    if(data.duration){
      $scope.timeoutHandle = $timeout(function(){
        $scope.info = '';
      },data.duration);
    }
  });
});
