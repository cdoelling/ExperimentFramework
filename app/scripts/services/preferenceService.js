'use strict';
(function(){

  angular.module('experimentFrameworkApp')
  .factory('preferenceService', function($http,userService,apiKeyService,$q) {  
    var headers={
      'X-Requested-By': 'Rally',
      'X-RallyIntegrationName': 'Rally Experiment Framework',
      zsessionid:apiKeyService.getApiKey()
    };
    var service = {
      getExperimentById:function(id){
        var deferred = $q.defer();
        $http({
          method:'GET',
          url: 'https://rally1.rallydev.com/slm/webservice/v2.0/preference?pretty=true&fetch=true&query=(Name contains "'+id+'")',
          headers:headers,
          withCredentials:true,
          responseType:'json'
        })
        .success(function(data){
          var d = data.QueryResult.Results;
          deferred.resolve(d);
        })
        .catch(function(err){
          deferred.reject(err);
        });
        return deferred.promise;
      },
      getExperiments:function(){
        var deferred = $q.defer();
        $http({
          method:'GET',
          url: 'https://rally1.rallydev.com/slm/webservice/v2.0/preference?pretty=true&fetch=true&query=(Name contains "experiment-title")',
          headers:headers,
          withCredentials:true,
          responseType:'json'
        })
        .success(function(data){
          var d = data.QueryResult.Results;
          deferred.resolve(d);
        })
        .catch(function(err){
          deferred.reject(err);
        });
        return deferred.promise;
      },
      deleteExperimentParts:function(refs){
        var requests = [];
        refs.forEach(function(ref){
          requests.push($http({
            method:'DELETE',
            url:ref,
            headers:headers,
            withCredentials:true,
            responseType:'json'
          }));
        });
        return $q.all(requests);
      },
      saveExperimentPart:function(experimentId,name,data,objectId){
        var key = 'experiment-' + name + ' '+experimentId;
        var endpoint = objectId ? objectId : 'create';
        return $http({
          method:'POST',
          data:{
            preference:{
              Name:key,
              Workspace:userService.user.defaultWorkspace._ref,
              Value:data
            }
          },
          url: 'https://rally1.rallydev.com/slm/webservice/v2.0/preference/' + endpoint,
          headers:headers,
          withCredentials:true,
          responseType:'json'
        })
        .success(function(data){
          var result;
          for(result in data){}
          var errors = data[result].Errors;
          if(errors.length){
            throw new Error(errors[0]);
          }
        })
        .error(function(){
        });
      
      }
    };
    return service;
  });
})();
