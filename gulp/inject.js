'use strict';

var gulp 				= 	require('gulp');
var plumber 			= 	require('gulp-plumber');
var inject 				= 	require('gulp-inject');
var es 					= 	require('event-stream');
var naturalSort 		= 	require('gulp-natural-sort');
var angularFilesort 	= 	require('gulp-angular-filesort');
var bowerFiles 			= 	require('main-bower-files');
var rename				=	require("gulp-rename");	
var print 				= 	require('gulp-print');   
var handleErrors 		= 	require('./handle-errors');
var config 				= 	require('./config');


module.exports = {
		dev: devInject,
		devMin: devMinInject,
		js :jsInject,
		minJs:minJs
}

function devInject() {
	return gulp.src(config.app + 'index.html')
	.pipe(inject(gulp.src([config.appJs+'**/*.js','!'+config.appJs+'app.cc.js'])
			.pipe(print())
			.pipe(plumber({errorHandler: handleErrors}))
			.pipe(naturalSort())
			.pipe(angularFilesort()), {relative: true}))
			.pipe(gulp.dest(config.app));
}

function minJs() {
	return gulp.src(config.app + 'index.html')
	.pipe(inject(gulp.src([config.appJs+'**/*min.js','!'+config.appJs+'app.cc.js'])
			.pipe(print())
			.pipe(plumber({errorHandler: handleErrors}))
			.pipe(naturalSort())
			.pipe(angularFilesort()), {relative: true}))
			.pipe(gulp.dest(config.app));
}

function devMinInject() {
	return gulp.src(config.app + 'index.html')
	.pipe(print())
	.pipe(inject(gulp.src(config.appJs+'app.cc.js')
			.pipe(plumber({errorHandler: handleErrors})), {relative: true}))
			.pipe(gulp.dest(config.app));
}


function jsInject() {
	return gulp.src(config.app + 'content/assets/fileNames.html')
	.pipe(inject(gulp.src(config.app + 'app/**/*.js')
			.pipe(print())
			.pipe(plumber({errorHandler: handleErrors}))
			.pipe(naturalSort())
			.pipe(angularFilesort()), {ignorePath: 'src/main/webapp',addRootSlash:false,starttag:"<!-- inject:appJs -->",endtag:"<!-- endinject:appJs -->"}))
			.pipe(gulp.dest(config.app+ 'content/assets/'));
}