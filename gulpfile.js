var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');
var atImport = require('postcss-import');
var cssnano = require('cssnano');
var watch = require('gulp-watch');

var path = {
	sass: ['./src/*.css']
}

gulp.task('style',function(){
	var processors = [
		autoprefixer,
		precss,
		cssnext,
		atImport,
		cssnano
	];
	return gulp.src(path.sass)
	.pipe(postcss(processors))
	.pipe(gulp.dest('./dest'));
});

gulp.task('watch', function () {
    gulp.watch(path.sass,['style']);
});

gulp.task('default',['watch']);