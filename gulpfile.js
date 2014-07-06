var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    usemin = require('gulp-usemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    clean = require('gulp-clean'),
    open = require('gulp-open'),
    clean = require('gulp-clean'),
    open = require('gulp-open'),
    livereload = require('gulp-livereload'),
    connect = require('connect'),
    morgan = require('morgan'),
    serveStatic = require('serve-static'),
    http = require('http'),
    server = (require('tiny-lr'))();

var config = {
    port: 8082,
    root: 'dist/'
};

gulp.task('styles', function() {
  return gulp.src('src/*.html')
    .pipe(usemin({
        css: [autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'), rename({ suffix: '.min' }), minifycss(), 'concat']
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(livereload(server));
    // .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('html', function() {
    return gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'))
    .pipe(livereload(server));
    // .pipe(notify({message: 'Copy Task complete' }));
});

gulp.task('scripts', function() {
  return gulp.src('src/*.html')
    .pipe(usemin({
        js: [jshint('.jshintrc'), jshint.reporter('default'), 'concat', uglify()]
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(livereload(server));
    // .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(livereload(server))
    .pipe(gulp.dest('dist/images'));
    // .pipe(notify({ message: 'Images task complete' }));
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

gulp.task('watch', function() {
  // Listen on port 35729
  server.listen(35729, function (err) {
    if (err) {
      return console.log(err)
    };

    gulp.watch('src/styles/**/*.css', ['styles']);
    gulp.watch('src/scripts/**/*.js', ['scripts']);
    gulp.watch('src/images/**/*', ['images']);
    gulp.watch('src/*.html', ['html']);
  });
});

gulp.task('default', ['clean', 'styles', 'scripts', 'images', 'html', 'serve', 'watch']);
