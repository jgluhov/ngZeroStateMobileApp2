'use strict';

module.exports = function (app) {
  app.controller('signinController', ['$scope', 'cordovaService', 'signinService',
    function ($scope, cordovaService, signinService) {
      cordovaService.ready.then(function () {
        $scope.signin = function (user) {
          signinService.signin(user)
            .then(function (res) {
              console.log(res);
            }).catch(function (err) {
          });
        };
      })
    }]);
};
