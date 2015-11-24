'use strict';

module.exports = function (app) {
  app.service('sessionService', ['$http', 'commonConstants', 'localStorageService', function ($http, commonConstants, localStorageService) {
    var self = this;

    self.isAuthorized = function () {
      return !_.isUndefined(localStorageService.get('email'))
    };

    self.saveUser = function(user) {
      localStorageService.set('email', user.email)
    };
    self.currentUser = function() {
      return localStorageService.get('email')
    };

    self.removeUser = function() {
      localStorageService.set('email')
    };

    self.test = function() {
      $http.get(commonConstants.local + 'auth')
    }
  }])
};
