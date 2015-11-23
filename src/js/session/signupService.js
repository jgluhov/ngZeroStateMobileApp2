'use strict';

module.exports = function (app) {
  app.service('signupService', ['$http', '$q','commonConstants','sessionService', function ($http, $q, constants, sessionService) {
    var self = this;
    self.signup = function(user) {
      var defer = $q.defer();

      if(!sessionService.isValidCredentials(user)) defer.reject();

      $http.post(constants.local + 'auth', user).then(function(res) {
        defer.resolve(res)
      }).catch(function(err) { defer.reject(err) });

      return defer.promise;
    };
  }])
};
