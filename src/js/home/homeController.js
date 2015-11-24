module.exports = function (home) {
  home.controller('homeController', ['$scope', '$rootScope', 'sessionService','localStorageService',
    function ($scope, $rootScope, sessionService, localStorageService) {

      sessionService.authorize();

      $rootScope.signout = function() {
        sessionService.removeCurrentUser();
      };

      $scope.test = function () {
        sessionService.test()
      }

    }]);
};
