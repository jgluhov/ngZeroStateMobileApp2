'use strict';

module.exports = function (app) {
  app.controller('signinController', ['$scope', '$state', 'signinService',
    function ($scope, $state, signinService) {
      $scope.submitted = false;

      $scope.submit = function (user, form) {
        if(form.$invalid) {
          $scope.submitted = true;
          return;
        }

        signinService.signin(user)
          .then(function () {
            $state.go('home');
          })
          .catch(function (err) {

          });
      };
    }]);
};
