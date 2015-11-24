'use strict';

module.exports = function (app) {
  app.service('signupService', ['$http', '$q', 'commonConstants', 'sessionService',
    function ($http, $q, commonConstants, sessionService) {
      var self = this;
      self.signup = function (user) {
        var defer = $q.defer();

        $http.post(commonConstants.production + 'auth?token=' + commonConstants.token, user).then(function (res) {
          defer.resolve(res);
          sessionService.saveUser(res.data);
        }).catch(function (err) {
          defer.reject(err)
        });

        return defer.promise;
      };
    }])
};
