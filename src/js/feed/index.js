var feed = angular.module('zsFeed',['ui.scroll']);

require('./feedFactory')(feed);
require('./feedController')(feed);

module.exports = feed;
