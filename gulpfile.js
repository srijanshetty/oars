var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    usemin = require('gulp-usemin'),
    concat = require('gulp-concat'),
    cache = require('gulp-cache'),
    clean = require('gulp-clean'),
    connect = require('connect'),
    morgan = require('morgan'),
    serveStatic = require('serve-static'),
    http = require('http');

var config = {
    port: 8082,
    root: 'dist/'
};

gulp.task('build', ['jshint'], function() {
  return gulp.src('src/*.html')
    .pipe(usemin({
        css: [autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'), minifycss(), 'concat'],
        js: [uglify(), 'concat']
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('jshint', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
});

gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('serve', function(){
	var app = connect();
	app.use(morgan('dev'));
	app.use(serveStatic(config.root));
	http.createServer(app).listen(config.port);
});

gulp.task('clean', function() {
  return gulp.src(['dist/scripts', 'dist/styles', 'dist/**/*.html', 'dist/images'], {read: false})
    .pipe(clean());
});

gulp.task('default', ['clean'], function () {
    gulp.start('images', 'build', 'serve');
});
