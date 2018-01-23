var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
//var config = require('./webpack.config')

var express = require('express')
var app = express()
var port = 1000

// var compiler = webpack(config)
// app.use(webpackDevMiddleware(compiler, { 
// 	noInfo: true, 
// 	publicPath: config.output.publicPath,
// 	hot: true,
// 	watchOptions: {
// 	    aggregateTimeout: 300,
// 	    poll: 1000 // is this the same as specifying --watch-poll?
// 	}
// }))
// app.use(webpackHotMiddleware(compiler))

// function nocache(req, res, next) {
//   res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
//   res.header('Expires', '-1');
//   res.header('Pragma', 'no-cache');
//   next();
// }

// app.get("/*.html", function(req, res) {
//   console.log(req.url)
//   var path = req.url
//   var _path = path.indexOf('?')>-1?path.split('?')[0]:path
//   res.sendFile(__dirname + '/build/html/'+_path)
// })
// app.get("/*.php", function(req, res) {
//   console.log(req.url)
//   var path = req.url.replace('php','html')
//   var _path = path.indexOf('?')>-1?path.split('?')[0]:path
//   res.sendFile(__dirname + '/build/html/'+_path)
// })

// app.use(express.static(__dirname + '/build'));

app.get("/api/TEST", function(req, res) {
 ///
})

app.listen(port, function(error) {
  // if (error) {
  //   console.error(error)
  // } else {
  //   //console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  // }
})
