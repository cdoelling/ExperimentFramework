'use strict';
angular.module('experimentFrameworkApp')
.factory('apiKeyService', function() {
  return {
    store:function(key){
      window.sessionStorage.apiKey = key;
    },
    getApiKey:function(){
      return window.sessionStorage.apiKey;
    }
  };
});
