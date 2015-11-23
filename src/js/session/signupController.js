module.exports = function(app) {
  app.controller('signupController', ['$scope', 'cordovaService', function ($scope, cordovaService) {
    cordovaService.ready.then(function() {
      console.log('HelloSignupController');
    });
  }]);
};
