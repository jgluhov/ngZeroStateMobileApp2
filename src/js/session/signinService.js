'use strict';

module.exports = function (app) {
  app.service('signinService', ['$http', '$q','commonConstants','sessionService', function ($http, $q, constants, sessionService) {
    var self = this;

    self.signin = function (user) {
      var defer = $q.defer();

      $http.get(constants.local + 'auth?email=' + user.email + '&password=' + user.password)
        .then(function () {
          defer.resolve(user);
        }).catch(function(err) {
          defer.reject(err);
        });

      return defer.promise;
    }

  }])
};
