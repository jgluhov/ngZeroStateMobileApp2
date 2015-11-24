var session = angular.module('zsSession',['zsConstants','LocalStorageModule']);

require('./sessionService')(session);
require('./signinService')(session);
require('./signinController')(session);
require('./signupService')(session);
require('./signupController')(session);
require('./signoutController')(session);

module.exports = session;