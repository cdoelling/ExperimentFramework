'use strict';
angular.module('experimentFrameworkApp')
.controller('ExperimentCtrl', function ($scope,$routeParams,preferenceService,$rootScope) {
  $scope.blur = function(field){
    var objectId = $scope.ids[field];
    $rootScope.$broadcast('update-info', {info:'Saving'});
    preferenceService.saveExperimentPart($routeParams.id,field,$scope[field],objectId)
    .then(function(){
      $rootScope.$broadcast('update-info', {
        info:'Saved Successfully',
        duration:2000
      });
    });
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
