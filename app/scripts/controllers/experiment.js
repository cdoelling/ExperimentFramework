'use strict';

angular.module('experimentFrameworkApp')
.controller('ExperimentCtrl', function ($scope,$routeParams,preferenceService) {
  $scope.blur = function(field){
    preferenceService.saveExperimentPart($routeParams.id,field,$scope[field]);
  };
});
