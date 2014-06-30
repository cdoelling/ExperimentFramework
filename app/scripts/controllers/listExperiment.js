'use strict';

angular.module('experimentFrameworkApp')
.controller('ListExperimentsCtrl', function ($scope,preferenceService) {
  preferenceService.getExperiments()
  .then(function(experiments){
    $scope.things = experiments;
  });
});
