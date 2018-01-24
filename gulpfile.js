//压缩用
var zip = require('gulp-zip');
var jshint = require('gulp-jshint');
var  concat = require('gulp-concat');
var rename = require('gulp-rename');
var  uglify = require('gulp-uglify');


var gulp = require('gulp'), 
//serve
connect = require('gulp-connect');
gulp.task('hello', function() {
  console.log('Hello World!');
});

var path = {};

path.build = './app/';

gulp.task('connect', function() {
    connect.server({
        root: path.build,
        port: 9000
		//fallback:path.build+'index.html'
    });
});

gulp.task('build', function() {
   gulp.src(['app'])
                .pipe(zip('app.zip'))
                .pipe(gulp.dest('abb'));

minifyScript("./app/*.js","./app/","abc");

})

gulp.task('default', ['hello',"connect"]);

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