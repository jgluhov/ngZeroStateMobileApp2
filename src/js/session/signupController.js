module.exports = function (app) {
  app.controller('signupController', ['$scope', '$state', 'signupService', function ($scope, $state, signupService) {
    $scope.submitted = false;

    $scope.submit = function (user, form) {
      if(form.$invalid) {
        $scope.submitted = true;
        return;
      }
      signupService.signup(user)
        .then(function (res) {
          $state.go('home');
        }).catch(function () {
        console.log('Something went wrong!');
      });
    };

  }]);
};
