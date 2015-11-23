'use strict';

module.exports = function (app) {
  app.service('signinService', ['$http', 'zsConstants', function ($http, constants) {
    var self = this;
    self.signin = function(user) {
      http.post(constants.local + 'auth', user);
    }
  }])
};
