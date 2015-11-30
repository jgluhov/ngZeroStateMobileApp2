'use strict';

var app = angular.module('zsTags',[]);

require('./tagsConstants')(app);
require('./tagsService')(app);
require('./tagsClearInputDirective')(app);
require('./tagsFocusDirective')(app);
require('./tagsTemplate')(app);
require('./tagsDirective')(app);
require('./tagsController')(app);

module.exports = app;
