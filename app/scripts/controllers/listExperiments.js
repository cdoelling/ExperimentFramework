'use strict';

angular.module('experimentFrameworkApp')
.controller('ListExperimentsCtrl', function ($scope,preferenceService) {
  preferenceService.getExperiments()
  .then(function(experiments){
    _.each(experiments,function(e){
      e._id = e.Name.split(' ')[1];
    });
    $scope.experiments = experiments;
  });
});
