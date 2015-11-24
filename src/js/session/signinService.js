'use strict';

module.exports = function (app) {
  app.service('signinService', ['$http', '$q','commonConstants','sessionService', function ($http, $q, commonConstants, sessionService) {
    var self = this;

    self.signin = function (user) {
      var defer = $q.defer();

      $http.get(commonConstants.production + 'auth?session='+ sessionService.sessionUser() + '&token=' + commonConstants.token + '&email=' + user.email + '&password=' + user.password)
        .then(function (res) {
          sessionService.saveUser(res.data);
          defer.resolve(user);
        }).catch(function(err) {
          defer.reject(err);
        });

      return defer.promise;
    }

  }])
};
