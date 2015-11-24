'use strict';

module.exports = function (app) {
  app.controller('signinController', ['$scope', '$state', 'signinService',
    function ($scope, $state, signinService) {
      $scope.signin = function (user) {
        signinService.signin(user)
          .then(function (res) {
            $state.go('home');
          }).catch(function (err) {
        });
      };
    }]);
};
