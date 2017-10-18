var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var pug = require('gulp-pug');
var server = require('gulp-server-livereload');



gulp.task('default', [
  'assets',
  'styles',
  'scripts',
  'views',
  'webserver',
  'styles:watch',
  'scripts:watch',
  'views:watch',
]);



gulp.task('webserver', function() {
  gulp.src('./dst')
    .pipe(server({
      defaultFile: 'index.html',
      livereload: true,
    }));
});



gulp.task('assets', function () {
  return gulp.src('./src/assets/**/*.*')
    .pipe(gulp.dest('./dst/assets'));
});

gulp.task('styles', function () {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dst'));
});

gulp.task('scripts', function () {
  return gulp.src('./src/scripts/**/*.js')
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['env']
  }))
  .pipe(concat('bundle.js'))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('dst'));
});

gulp.task('views', function buildHTML() {
  return gulp.src('./src/views/*.pug')
  .pipe(pug({
    // Your options in here. 
  }))
  .pipe(gulp.dest('dst'));
});



gulp.task('styles:watch', function () {
  gulp.watch('./src/**/*.scss', ['styles']);
});

gulp.task('scripts:watch', function () {
  gulp.watch('./src/**/*.js', ['scripts']);
});

gulp.task('views:watch', function () {
  gulp.watch('./src/**/*.pug', ['views']);
});
