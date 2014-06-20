'use strict';
angular.module('experimentFrameworkApp')
.factory('login', function() {
  return function(){};
});
var $ = $||undefined;
var Login;
(function() {
  Login = function(id,pw) {
    $.ajax({
      url: 'https://rally1.rallydev.com/slm/webservice/v2.0/security/authorize',
      type: 'GET',
      dataType: 'json',

      xhrFields: {
        withCredentials: true
      },

      beforeSend: function (xhr) {
        var auth = btoa(id + ':' + pw);

        xhr.setRequestHeader('Authorization', 'Basic ' +  auth);
        xhr.setRequestHeader('X-Requested-By', 'Rally');
        xhr.setRequestHeader('X-RallyIntegrationName', 'Rally Experiment Framework');
      },

      success: function (data) {
        if (data.OperationResult.Errors.length > 0) {
          return false;
        }

        _setUsername(id);
        _setSecurityToken(data.OperationResult.SecurityToken);
      },

      error: function () {
        return false;
      }
    });
  };

  var _setUsername = function(username) {
    window.sessionStorage.setItem('username', username ? username : '');
  };
  var _setSecurityToken = function(token) {
    window.sessionStorage.setItem('securityToken', token ? token : '');
  };
})();
