'use strict';

angular.module('experimentFrameworkApp')
.controller('NewExperimentCtrl', function ($location,guidService) {
  $location.url('/experiment/'+guidService());
});
