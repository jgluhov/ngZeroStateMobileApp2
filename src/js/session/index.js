var session = angular.module('zsSession',[]);

require('./signinController')(session);
require('./signupController')(session);

module.exports = session;