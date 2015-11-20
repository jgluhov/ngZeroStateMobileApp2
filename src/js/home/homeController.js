module.exports = function(home) {
  home.controller('homeController', ['$scope','CordovaService', function ($scope,CordovaService) {
    CordovaService.ready.then(function() {
      console.log('homeController');
    });
  }]);
};
