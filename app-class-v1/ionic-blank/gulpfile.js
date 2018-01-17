'use strict';

const gulp = require('gulp'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  jshint = require('gulp-jshint'),
  htmlify = require('gulp-angular-htmlify'),
  sourceMaps = require('gulp-sourcemaps'),
  ngAnnotate = require('gulp-ng-annotate'),
  iife = require('gulp-iife'),
  templateCache = require('gulp-angular-templatecache'),
  envfile = require('envfile'),
  notify = require('gulp-notify'),
  uglify = require('gulp-uglify'),
  babel = require('gulp-babel');

var paths = {
  watch : {
    js : 'www/js/**/*.js',
    html : 'www/js/**/*.html'
  }
};

var jsDeps = [
  'www/lib/ionic/js/ionic.bundle.min.js'
];

var cssDeps = [
  'www/lib/font-awesome/css/font-awesome.min.css',
  'www/css/ionic.app.css'
];

gulp.task('css-deps', function () {
  gulp.src(cssDeps)
    .pipe(concat('deps.css'))
    .pipe(gulp.dest('./www/dist/css'));

  gulp.src(['www/lib/ionic/fonts/*.*'])
    .pipe(gulp.dest('./www/dist/lib/ionic/fonts'));

  gulp.src(['www/lib/font-awesome/fonts/*'])
    .pipe(gulp.dest('./www/dist/fonts/'));
});

gulp.task('scripts', function () {
  var baseDir = __dirname + '/www/js',
    outputDir = __dirname + '/www/dist/js',
    outputFilename = 'app.js';

  gulp.src([
    baseDir + "/*module.js",
    baseDir + "/**/*module.js",
    baseDir + "/**/*.js"
  ])
    // .pipe(iife())
    .pipe(jshint({esversion: 6}))
    .pipe(jshint.reporter('default'))
    .pipe(sourceMaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat(outputFilename))
    .pipe(ngAnnotate())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest(outputDir));
});

gulp.task('js-deps', function () {
  gulp.src(jsDeps)
    .pipe(concat('deps.js'))
    .pipe(gulp.dest('./www/dist/js'));
});

gulp.task('templates', function () {
  gulp.src([
    'www/js/**/*.html'
  ])
    .pipe(htmlify({
      customPrefixes: ['view-']
    }))
    .pipe(templateCache({
      standalone: true
    }))
    .pipe(gulp.dest('./www/dist/js'));
});

gulp.task('watch', function () {
  gulp.watch(paths.watch.js, ['scripts']);
  gulp.watch(paths.watch.html, ['templates']);
});


gulp.task('dev', ['scripts', 'templates', 'js-deps', 'css-deps', 'watch']);
gulp.task('default', ['dev']);
