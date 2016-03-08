var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');

gulp.task('style',function(){
	var processors = [
		autoprefixer,
		precss,
		cssnext
	];
	return gulp.src('./src/*.css')
	.pipe(postcss(processors))
	.pipe(gulp.dest('./dest'));
});