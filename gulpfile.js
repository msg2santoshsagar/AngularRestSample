'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var clean 			= 	require('gulp-clean');
var runSequence 	= 	require('run-sequence');
var inject 			= 	require('./gulp/inject');
var rename 			= 	require('gulp-rename');
var print 			= 	require('gulp-print');
var rev   			= 	require('gulp-rev');
var config 			= 	require('./gulp/config');

gulp.task('minify', function() {
	return gulp.src([config.appJs+'**/*.js','!'+config.appJs+'app.cc.js'])
	.pipe(print())
	.pipe(concat('app.cc.js'))
	.pipe(uglify())
	.pipe(print())
	.pipe(gulp.dest(config.appJs))
});

gulp.task('inject:dev', inject.dev);
gulp.task('inject:devMin', inject.devMin);
gulp.task('inject:js', inject.js);
gulp.task('inject:minJs', inject.minJs);

gulp.task('deleteMinFiles',function(){
	return gulp.src(config.appJs+'**/*min.js')
	.pipe(clean({force:true}))
});

gulp.task('renameFiles',function(){
	return gulp.src([config.appJs+'**/*.js','!'+config.appJs+'app.cc.js','!'+config.appJs+'**/*min.js'])
	.pipe(print())
	.pipe(rev())
	.pipe(rename(function (path) {
		path.basename += ".min";
	}))
	.pipe(gulp.dest(config.appJs));
});


gulp.task('qaBuild',function(){
	return runSequence('deleteMinFiles','renameFiles','inject:minJs');
});

gulp.task('minBuild', function(){
	return runSequence('minify','inject:devMin');
});

gulp.task('devBuild', function(){
	return runSequence('deleteMinFiles','inject:dev');
});


