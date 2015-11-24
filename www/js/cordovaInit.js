//module.exports = function (app) {
//  app.service('cordovaService', ['$document', '$q',
//    function ($document, $q) {
//
//      var d = $q.defer(),
//        resolved = false;
//
//      var self = this;
//      this.ready = d.promise;
//
//      document.addEventListener('deviceready', function () {
//        resolved = true;
//        d.resolve(window.cordova);
//      });
//
//      // Check to make sure we didn't miss the
//      // event (just in case)
//      setTimeout(function () {
//        if (!resolved) {
//          if (window.cordova) d.resolve(window.cordova);
//        }
//      }, 3000);
//    }]);
//};



'use strict';

var CordovaInit = function() {

  var onDeviceReady = function() {
    receivedEvent('deviceready');
  };

  var receivedEvent = function() {
    console.log('Start event received, bootstrapping application setup.');
    angular.bootstrap(document.getElementsByTagName('html')[0], ['ngZeroStateMobileApp']);
  };

  this.bindEvents = function() {
    document.addEventListener('deviceready', onDeviceReady, false);
  };

  //If cordova is present, wait for it to initialize, otherwise just try to
  //bootstrap the application.
  if (window.cordova !== undefined) {
    console.log('Cordova found, wating for device.');
    this.bindEvents();
  } else {
    console.log('Cordova not found, booting application');
    receivedEvent('manual');
  }
};

$(function() {
  console.log('Bootstrapping!');
  new CordovaInit();
});