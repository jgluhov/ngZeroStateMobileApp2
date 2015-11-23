module.exports = function (home) {
  home.controller('homeController', ['$scope', 'cordovaService', function ($scope, cordovaService) {
    cordovaService.ready.then(function () {
      console.log('homeController');
    });
  }]);
};
