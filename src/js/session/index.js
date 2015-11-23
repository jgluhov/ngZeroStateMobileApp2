var session = angular.module('zsSession',['zsConstants']);

require('./sessionService')(session);
require('./signinService')(session);
require('./signinController')(session);
require('./signupService')(session);
require('./signupController')(session);

module.exports = session;