// controller
var appCtrl = angular.module('starter.controllers', []);

// directive
var appDirect = angular.module('starter.directive', []);

// service
var appServices = angular.module('starter.services', []);

// service
var appComponents = angular.module('starter.components', []);


var app = angular.module('starter', ['ui.router','starter.controllers','starter.directive','starter.services','starter.components']);
//项目启动时执行
app.run(
  ['$rootScope', '$location', '$http',
    function($rootScope, $location,$http) {

    }
])