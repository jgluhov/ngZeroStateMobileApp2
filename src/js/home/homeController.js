module.exports = function (home) {
  home.controller('homeController', ['$scope', '$rootScope', 'sessionService',
    function ($scope, $rootScope, sessionService) {


      if (sessionService.isAuthorized()) {
        $rootScope.user = sessionService.currentUser();
      }

      $rootScope.signout = function () {
        sessionService.removeUser();
      };

      $scope.test = function () {
        sessionService.test()
      }

    }]);
};
