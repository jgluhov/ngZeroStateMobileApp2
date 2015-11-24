module.exports = function (app) {
  app.controller('signupController', ['$scope', 'signupService', function ($scope, signupService) {


    $scope.signup = function (user) {
      signupService.signup(user)
        .then(function (res) {
          console.log(res);
        }).catch(function () {
        console.log('Something went wrong!');
      });
    };

    console.log('HelloSignupController');

  }]);
};
