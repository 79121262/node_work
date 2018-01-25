var version = 'ssssss'
var libMap = {
    'app': '/app.js',
    'demoRouter': '/demo/router.config.js',
    'demo': '/demo/controllers/demo.js',
    'serviceMain': '/common/js/service/service.js'
}

//LAB
$LAB
    .script(libMap.app)
	.script(libMap.demoRouter)
	.script(libMap.demo)
	.script(libMap.serviceMain)
    .wait(function() {
       //alert("---");
         // start app by manual
         //html不用加入这段代码  <div ng-app="starter" >
               var appDom = document.getElementById("ng-starter");
               angular.bootstrap(appDom, ['starter']);
    });