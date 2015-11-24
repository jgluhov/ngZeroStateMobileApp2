var gulp = require('gulp');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('gulp-browserify');
var stylus = require('gulp-stylus');
var koutoSwiss = require('kouto-swiss');
var minify = require('gulp-minify-css');

gulp.task('vendor:js', function() {
  gulp.src([
    './bower_components/angular/angular.min.js',
    './bower_components/ngCordova/dist/ng-cordova.min.js',
    './bower_components/angular-ui-router/release/angular-ui-router.min.js',
    './bower_components/snapjs/snap.min.js',
    './bower_components/angular-snap/angular-snap.min.js',
    './bower_components/lodash/lodash.min.js',
    './bower_components/angular-local-storage/dist/angular-local-storage.min.js',
    './bower_components/jquery/dist/jquery.min.js'
  ])
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('./www/js'))
});

gulp.task('vendor:css', function() {
  gulp.src([
    './bower_components/angular-snap/angular-snap.min.css',
    './bower_components/uikit/css/uikit.gradient.min.css'
  ])
    .pipe(concat('vendor.min.css'))
    .pipe(gulp.dest('./www/css'))
});

gulp.task('templates', function() {
  gulp.src(['./src/jade/**/*.jade', '!./src/jade/partials/*.jade'])
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest('./www'))
});

gulp.task('scripts', function() {
  gulp.src('./src/js/ngZeroStateMobileApp.js')
    .pipe(plumber())
    .pipe(browserify({ insertGlobals : true }))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./www/js'))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./www/js'));
  gulp.src('./src/js/cordova.init.js')
    .pipe(uglify())
    .pipe(rename('cordova.init.min.js'))
    .pipe(gulp.dest('./www/js'))
});

gulp.task('vendor:fonts', function() {
  gulp.src([
    './bower_components/uikit/fonts/*',
    './src/fonts/**/*'
  ])
    .pipe(gulp.dest('./www/fonts'))
});

gulp.task('images', function() {
  gulp.src('./src/images/**/*')
    .pipe(gulp.dest('./www/images'))
});

gulp.task('styles', function () {
  gulp.src('./src/styl/app.styl')
    .pipe(plumber())
    .pipe(stylus({use: koutoSwiss(), import: 'kouto-swiss'}))
    .pipe(gulp.dest('./www/css'))
    .pipe(sourcemaps.init())
    .pipe(minify())
    .pipe(rename('app.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./www/css'))
});

gulp.task('default',['templates','scripts','styles','images','vendor:js','vendor:css','vendor:fonts'], function() {
  gulp.watch('./src/jade/**/*.jade', ['templates']);
  gulp.watch('./src/js/**/*.js', ['scripts']);
  gulp.watch('./src/styl/**/*.styl', ['styles']);
});