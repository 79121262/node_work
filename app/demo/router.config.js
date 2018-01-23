app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('demo', {
    url: '/refundOrderManage',
    cache: false,
    templateUrl: 'demo/views/demo.html',
    controller: 'demoCtrl'
  });
});

