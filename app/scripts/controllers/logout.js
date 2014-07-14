'use strict';
angular.module('experimentFrameworkApp')
.controller('LogoutCtrl', function (apiKeyService,userService) {
  apiKeyService.clear();
  userService.clearUser();
});
