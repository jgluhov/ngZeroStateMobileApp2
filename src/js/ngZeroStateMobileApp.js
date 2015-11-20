'use strict';


require('./session');
require('./home');

var app = angular.module('ngZeroStateMobileApp', ['ui.router','snap','zsSession', 'zsHome']);

require('./routes')(app);
require('./cordova')(app);

