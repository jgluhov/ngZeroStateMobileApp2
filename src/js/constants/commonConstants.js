module.exports = function(app) {
  app.constant('commonConstants', {
    local: 'http://192.168.0.120:8011/',
    production: 'http://idemind-api.herokuapp.com/',
    token: 'ae33d6face3d0a8882059e2583725b786c2c4fb96e7c5805b4cdb0590292edfc'
  })
};