'use strict';

module.exports = function (app) {
  app.service('sessionService', ['$http', '$rootScope','commonConstants', 'localStorageService',
    function ($http, $rootScope, commonConstants, localStorageService) {
      var self = this;

      self.authorize = function () {
        if(_.isNull(localStorageService.get('sessionId'))) return;

        $http.get(commonConstants.production + 'auth?sessionId=' + self.sessionUser() + '&token=' + commonConstants.token).then(function(res) {
          self.saveUser(res.data);
          $rootScope.user = self.getCurrentUser();
          console.log($rootScope.user)
        });
      };

      self.saveUser = function (user) {
        localStorageService.set('email', user.email);
        localStorageService.set('status', !_.isUndefined(user.confirmedEmail));
        localStorageService.set('sessionId', user.sessionId);
      };

      self.getCurrentUser = function () {
        return {
          email: localStorageService.get('email'),
          status: localStorageService.get('status'),
          session: localStorageService.get('sessionId')
        }
      };

      self.removeCurrentUser = function () {
        $http.delete(commonConstants.production + 'auth?sessionId=' + self.sessionUser() + '&token=' + commonConstants.token).then(function() {
          localStorageService.remove('email');
          localStorageService.remove('status');
          localStorageService.remove('sessionId');
          $rootScope.user = null;
        })
      };


      self.sessionUser = function() {
        var id = localStorageService.get('sessionId');
        return _.isNull(id) ? '' : id;
      };
    }])
};
