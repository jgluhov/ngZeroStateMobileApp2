var gulp = require('gulp');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('gulp-browserify');

gulp.task('vendor:js', function() {
  gulp.src([
    './bower_components/angular/angular.min.js',
    './bower_components/ngCordova/dist/ng-cordova.min.js',
    './bower_components/angular-ui-router/release/angular-ui-router.min.js',
    './bower_components/snapjs/snap.min.js',
    './bower_components/angular-snap/angular-snap.min.js'
  ])
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('./www/js'))
});

gulp.task('vendor:css', function() {
  gulp.src([
    './bower_components/angular-snap/angular-snap.min.css'
  ])
    .pipe(concat('vendor.min.css'))
    .pipe(gulp.dest('./www/css'))
});

gulp.task('templates', function() {
  gulp.src('./src/jade/**/*.jade')
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest('./www'))
});

gulp.task('scripts', function() {
  gulp.src('./src/js/*.js')
    .pipe(browserify({ insertGlobals : true }))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./www/js'))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./www/js'))
});

gulp.task('default',['templates','scripts','vendor:js','vendor:css'], function() {
  gulp.watch('./src/jade/**/*.jade', ['templates']);
  gulp.watch('./src/js/**/*.js', ['scripts']);
});