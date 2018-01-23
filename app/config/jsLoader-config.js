var version = 'ssssss'
var libMap = {
    'app': '/app.js',
    'demoRouter': '/demo/router.config.js',
    'demo': '/demo/controllers/demo.js'
}

//LAB
$LAB
    .script(libMap.app)
	.script(libMap.demoRouter)
	.script(libMap.demo)
    .wait(function() {
       //alert("---");
    });