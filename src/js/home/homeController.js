module.exports = function (home) {
  home.controller('homeController', ['$scope', '$rootScope', 'cordovaService','sessionService', function ($scope, $rootScope, cordovaService, sessionService) {
    cordovaService.ready.then(function () {
      if(_.isUndefined($rootScope.user)) {
        sessionService.isAuthorized().then(function(res) {
          $scope.user = $rootScope.user = res.data;
        })
      }
    });
  }]);
};
