'use strict';
(function(){
var routeWrangler = function(pathArgs,currentPath){
  //angular won't let me inject a service here cause it is a jerk. 
  if(!window.sessionStorage.acceptedWarning){
    return '/warning';
  }
  if(!window.sessionStorage.securityToken){
    return '/login';
  }
  if(currentPath.match(/\/login/) || currentPath.match(/\/warning/))
  {
    return '/';
  }
  return currentPath;
};
angular
  .module('experimentFrameworkApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl',
      redirectTo: routeWrangler
    })
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      redirectTo: routeWrangler
    })     
    .when('/warning', {
      templateUrl: 'views/warning.html',
      controller: 'WarningCtrl',
      redirectTo: routeWrangler
    })
    .otherwise({
      redirectTo: '/'
    });
  });
})();
