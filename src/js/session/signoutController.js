'use strict';

module.exports = function (app) {
  app.controller('signoutController', ['$state','sessionService', function ($state, sessionService) {
    sessionService.removeUser();
    $state.go('home');
  }])
};
