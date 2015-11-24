'use strict';

module.exports = function (app) {
  app.service('signinService', ['$http', '$q','commonConstants','sessionService', function ($http, $q, constants, sessionService) {
    var self = this;

    self.signin = function (user) {
      var defer = $q.defer();

      $http.get(constants.local + 'auth?session='+ sessionService.sessionUser() + '&email=' + user.email + '&password=' + user.password)
        .then(function () {
          sessionService.saveUser(user);
          defer.resolve(user);
        }).catch(function(err) {
          defer.reject(err);
        });

      return defer.promise;
    }

  }])
};
