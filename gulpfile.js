'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');
var livereload = require('gulp-livereload');

var development = 'development';
var env = process.env.NODE_ENV || development;

var publicPath = path.join(__dirname, 'public/')
var paths = {
  sassPath: publicPath + 'sass/',
  cssPath: publicPath + 'stylesheets/'
}

var isDev = function() {
  return env === development ? true : false;
};

gulp.task('sass', function() {
  return gulp.src(paths.sassPath + 'screen.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: isDev() ? 'expanded' : 'compressed',
      sourceComments: isDev() ? true : false
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.cssPath))
    .pipe(livereload());
});

gulp.task('default', function() {
    gulp.start('sass')
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(paths.sassPath + '**/*.scss', ['sass']);
});
