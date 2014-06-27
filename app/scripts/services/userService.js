'use strict';
(function(){
  var user = {
    name:'',
    id:0,
    defaultProject:null,
    defaultWorkspace:null
  };
  angular.module('experimentFrameworkApp')
  .factory('userService', function($http) {
    var service = {
      user:user,
      getUser:function(){
        return $http({
          method:'GET',
          url:'https://rally1.rallydev.com/slm/webservice/v2.0/user?fetch=ObjectID,DefaultProject,UserProfile,DefaultWorkspace',
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
          window.sessionStorage.userId = user.id;
          user.defaultProject = data.User.UserProfile.DefaultProject;
          user.defaultWorkspace = data.User.UserProfile.DefaultWorkspace;
        });
      }
    };
    return service;
  });
})();
