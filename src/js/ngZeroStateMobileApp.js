'use strict';

require('./constants');
require('./session');
require('./tags');
require('./feed');
require('./home');

var app = angular.module('ngZeroStateMobileApp', ['ui.router','snap','zsSession', 'zsHome', 'zsTags','zsFeed']);

require('./routes')(app);
require('./config')(app);

