'use strict';

angular.module('experimentFrameworkApp')
.controller('NewExperimentCtrl', function ($location,guidService) {
  var guid = guidService();
  window.location.replace('#/experiment/'+ guid);
  $location.url('/experiment/'+guid);
});
