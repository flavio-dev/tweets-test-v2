var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var del = require('del');

var paths = {
  scripts: ['website/scripts/**/*.js'],
  styles: ['website/styles/**/*.scss', 'website/styles/**/*.css'],
  images: ['website/images/**/*.png']
};


gulp.task('clean', function() {
  return del(['html/assets']);
});

gulp.task('clean-css', function() {
  return del(['html/assets/css']);
});

gulp.task('clean-images', function() {
  return del(['html/assets/images']);
});

gulp.task('clean-js', function() {
  return del(['html/assets/js']);
});

gulp.task('scripts', ['clean-js'], function() {
  return gulp.src(paths.scripts)
  	.pipe(babel())
    .pipe(jshint())
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('html/assets/js'));
});

gulp.task('styles', ['clean-css'], function() {
  return gulp.src(paths.styles)
    .pipe(sass())
	.pipe(autoprefixer())
	.pipe(concat('all.min.css'))
    .pipe(gulp.dest('html/assets/css'));
});

gulp.task('images', ['clean-images'], function() {
    return gulp.src(paths.images)
      .pipe(gulp.dest('html/assets/images'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.images, ['images']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['clean', 'scripts', 'styles', 'images', 'watch']);
