module.exports = function(app) {
  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
      function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });

        $urlRouterProvider.otherwise('/platforms/ios/www/index.html');

        $stateProvider
          .state('home', {
            url: '/platforms/ios/www/index.html',
            templateUrl: "templates/home.html",
            controller: "homeController"
          })
          .state("signin", {
            templateUrl: "templates/signin.html",
            controller: "signinController"
          })
          .state("signup", {
            templateUrl: "templates/signup.html",
            controller: "signupController"
          })

      }
    ]
  );
};