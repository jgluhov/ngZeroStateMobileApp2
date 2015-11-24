'use strict';

module.exports = function (app) {
  app.service('sessionService', ['$http', 'commonConstants', 'localStorageService',
    function ($http, commonConstants, localStorageService) {
      var self = this;

      self.isAuthorized = function () {
        return !_.isNull(localStorageService.get('email'))
      };

      self.saveUser = function (user) {
        localStorageService.set('email', user.email);
        localStorageService.set('status', !_.isUndefined(user.confirmedEmail));
        localStorageService.set('session', user.sessionId);
      };

      self.currentUser = function () {
        return {
          email: localStorageService.get('email'),
          status: localStorageService.get('status'),
          session: localStorageService.set('session')
        }
      };

      self.removeUser = function () {
        $http.delete(commonConstants.local + 'auth?session=' + localStorageService.get('session')).then(function() {
          localStorageService.remove('email');
          localStorageService.remove('status');
          localStorageService.remove('session');
        })
      };

      self.sessionUser = function() {
        var id = localStorageService.get('session');
        return _.isNull(id) ? '' : id;
      };

      self.test = function () {
        $http.get(commonConstants.local + 'auth?session=' + self.sessionUser())
      }
    }])
};
