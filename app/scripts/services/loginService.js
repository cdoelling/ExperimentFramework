'use strict';
angular.module('experimentFrameworkApp')
.factory('loginService', function($http) {
  function login(username,password){
    var auth = btoa(username + ':' + password);
    return $http({
      method:'GET',
      url:'https://rally1.rallydev.com/slm/webservice/v2.0/security/authorize',
      headers:{
        'Authorization': 'Basic ' +  auth,
        'X-Requested-By': 'Rally',
        'X-RallyIntegrationName': 'Rally Experiment Framework'
      },
      withCredentials:true,
      responseType:'json'
    })
    .success(function(data){
      var token = data.OperationResult.SecurityToken;
      window.sessionStorage.securityToken = token;
    });
  }
  return login;
});
