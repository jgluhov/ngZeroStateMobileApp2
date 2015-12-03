var feed = angular.module('zsFeed',['infinite-scroll']);

require('./feedFactory')(feed);
require('./feedController')(feed);

module.exports = feed;
