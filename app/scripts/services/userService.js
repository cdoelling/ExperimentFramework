'use strict';
(function(){
  var user = {
    name:'',
    id:0
  };
  angular.module('experimentFrameworkApp')
  .factory('userService', function($http) {
    var service = {
      user:user,
      getUser:function(){
        return $http({
          method:'GET',
          url:'https://rally1.rallydev.com/slm/webservice/v2.0/user?fetch=ObjectID,DefaultProject,userprofile',
          headers:{
            'X-Requested-By': 'Rally',
            'X-RallyIntegrationName': 'Rally Experiment Framework'
          },
          withCredentials:true,
          responseType:'json'
        })
        .success(function(data){
          user.name = data.User._refObjectName;
          user.id = data.User.ObjectID;
        });
      }
    };
    return service;
  });
})();
