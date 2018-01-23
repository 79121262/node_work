app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('demo', {
    url: '/demo',
    cache: false,
    templateUrl: 'views/demo.html',
    controller: 'demoCtrl'
  });
});

