//压缩用
var zip = require('gulp-zip');
var jshint = require('gulp-jshint');
var  concat = require('gulp-concat');
var rename = require('gulp-rename');
var  uglify = require('gulp-uglify');
var gulp = require('gulp'),
connect = require('gulp-connect');


var path = {};
path.build = './app/';
path.app = './app/';
var repos = ['common'];

// cmd  运行gulp 命令默认启动
gulp.task('default', ['connect',"devBuild"]);
function build() {
    gulp.start(['controller', 'service']);
}
gulp.task('connect', function() {
    connect.server({
        root: path.build,
        port: 9000
		//fallback:path.build+'index.html' //设置首页
    });
});
//开发环境 构建
gulp.task('devBuild', function() {
    build()
})
gulp.task('build', function() {
    del(['./build']).then(paths => {
        build()
    })
})
//controller build
gulp.task("controller", function() {
     for (var i = 0; i < repos.length; i++) {
            var repo = repos[i]
            var src = path.app + repo + '/controllers/**/*.js'
            var dest = path.build + repo + '/js/controllers';
            (function(src, dest) {
                minifyScript(src, dest, 'main.js')
            })(src, dest)
      }
})
//service build
gulp.task("service", function() {
     for (var i = 0; i < repos.length; i++) {
            var repo = repos[i]
            var src = path.app + repo + '/service/**/*.js'
            var dest = path.build + repo + '/js/service';
            (function(src, dest) {
                minifyScript(src, dest, 'service.js')
            })(src, dest)
      }
})

//压缩js
function minifyScript(src, dest, name) {
    return gulp.src(src)
          .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(concat(name))
        // .pipe(babel({
        //     presets: ['es2015']
        // }))
        .pipe(gulp.dest(dest))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify()) //压缩
        .pipe(gulp.dest(dest));
}