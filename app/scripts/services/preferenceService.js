'use strict';
(function(){
  var headers={
    'X-Requested-By': 'Rally',
    'X-RallyIntegrationName': 'Rally Experiment Framework'
  };
  angular.module('experimentFrameworkApp')
  .factory('preferenceService', function($http,userService) {
    var service = {
      getExperiments:function(){
        return $http({
          method:'GET',
          url: 'https://rally1.rallydev.com/slm/webservice/v2.0/preference?fetch=true&query=(Name contains "Experiment")',
          headers:headers,
          withCredentials:true,
          responseType:'json'
        })
        .success(function(){
        });
      },
      saveExperimentPart:function(experimentId,name,data){
        var key = 'experiment-' + name + ' '+experimentId;
        return $http({
          method:'POST',
          data:{
            preference:{
              Name:key,
              Workspace:userService.user.defaultWorkspace._ref,
              Value:data
            }
          },
          url: 'https://rally1.rallydev.com/slm/webservice/v2.0/preference/create',
          params:{
            key:window.sessionStorage.securityToken
          },
          headers:headers,
          withCredentials:true,
          responseType:'json'
        })
        .success(function(data){
          var errors = data.CreateResult.Errors;
          if(errors.length){
            throw new Error(errors[0]);
          }
        })
        .error(function(){
          console.log('dead');
        });
      
      }
    };
    return service;
  });
})();
