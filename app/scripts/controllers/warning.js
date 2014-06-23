'use strict';

angular.module('experimentFrameworkApp')
.controller('WarningCtrl', function ($location,$scope) {
  var acceptedWarning = window.sessionStorage.acceptedWarning;
  if(acceptedWarning){
    $location.url('/login');
    return;
  }
  $scope.accepted =  function(){
    window.sessionStorage.acceptedWarning = true;
    debugger;
    $location.url('/login');
  };

});
