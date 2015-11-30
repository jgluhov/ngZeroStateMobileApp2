'use strict';

require('./constants');
require('./session');
require('./tags');
require('./home');

var app = angular.module('ngZeroStateMobileApp', ['ui.router','snap','zsSession', 'zsHome', 'zsTags']);

require('./routes')(app);
require('./config')(app);

