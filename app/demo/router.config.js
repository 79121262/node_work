appCtrl.config(function ($stateProvider,$urlRouterProvider) {
  $stateProvider.state('demo', {
    url: '/demo',
    cache: false,
    templateUrl: 'demo/views/demo.html',
    controller: 'demoCtrl'
  });
});