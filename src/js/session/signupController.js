module.exports = function (app) {
  app.controller('signupController', ['$scope', 'cordovaService', 'signupService', function ($scope, cordovaService, signupService) {
    cordovaService.ready.then(function () {
      $scope.signup = function (user) {
        signupService.signup(user)
          .then(function (res) {
            console.log(res);
          }).catch(function (err) {
          console.log('Something went wrong!');
        });
      };
      console.log('HelloSignupController');
    });
  }]);
};
