module.exports = function (app) {
  app.config(['snapRemoteProvider', function (snapRemoteProvider) {
    snapRemoteProvider.globalOptions = {
      disable: 'left',
      tapToClose: true
    };
  }])
};