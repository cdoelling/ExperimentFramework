'use strict';
angular.module('experimentFrameworkApp')
.controller('ExperimentCtrl', function ($scope,$routeParams,preferenceService) {
  $scope.blur = function(field){
    var objectId = $scope.ids[field];
    preferenceService.saveExperimentPart($routeParams.id,field,$scope[field],objectId);
  };
  preferenceService.getExperimentById($routeParams.id)
  .then(function(experimentParts){
      $scope.ids = $scope.ids || {};
    _.each(experimentParts,function(part){
      var field = part.Name.split(' ')[0].split('-')[1];
      $scope[field] = part.Value;
      $scope.ids[field] = part.ObjectID;

    });
  });
});
