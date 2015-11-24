module.exports = function (app) {
  app.config(['snapRemoteProvider', function (snapRemoteProvider) {
    snapRemoteProvider.globalOptions = {
      disable: 'right',
      tapToClose: true
    };
  }])
};