module.exports = function(app) {
  app.controller('signupController', ['$scope', 'CordovaService', function ($scope, CordovaService) {
    CordovaService.ready.then(function() {
      console.log('HelloSignupController');
    });
  }]);
};
