module.exports = function(app) {
  app.controller('signinController', ['$scope', 'CordovaService', function ($scope,CordovaService) {
    CordovaService.ready.then(function() {
      console.log('HelloSigninController');
    })
  }]);
};
