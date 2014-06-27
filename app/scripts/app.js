'use strict';
(function(){
function isChrome() {
  return window.chrome && window.navigator.vendor === 'Google Inc.';
}
var routeWrangler = function(pathArgs,currentPath){
  //angular won't let me inject a service here cause it is a jerk. 
  if(!isChrome()){
    return '/browser';
  }
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
    .when('/browser', {
      templateUrl: 'views/browser.html',
      controller: 'MainCtrl',
      redirectTo: routeWrangler
    })     
    .when('/warning', {
      templateUrl: 'views/warning.html',
      controller: 'WarningCtrl',
      redirectTo: routeWrangler
    })    
    .when('/experiment/new', {
      templateUrl: 'views/main.html',
      controller: 'NewExperimentCtrl',
      redirectTo: routeWrangler
    })    
    .when('/experiment/:id', {
      templateUrl: 'views/main.html',
      controller: 'ExperimentCtrl',
      redirectTo: routeWrangler
    })
    .otherwise({
      redirectTo: '/experiment/new'
    });
  });
})();
