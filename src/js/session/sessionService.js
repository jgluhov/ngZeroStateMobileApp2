'use strict';

module.exports = function (app) {
  app.service('sessionService', ['$http', 'commonConstants', function ($http, commonConstants) {
    var self = this;

    self.isValidCredentials = function (user) {
      if (_.isUndefined(user)) return false;
      return (_.isEmpty(user.email) && _.isEmpty(user.password));
    };

    self.isAuthorized = function () {
      return $http.get(commonConstants.local + 'auth')
    }

  }])
};
