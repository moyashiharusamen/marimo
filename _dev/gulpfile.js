var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var cssbeautify = require('gulp-cssbeautify');
var header = require('gulp-header');
var ejs = require('gulp-ejs');
var browserSync =require('browser-sync');

var charset = '@charset "UTF-8";\n\n\n';
var dir = {
  dev : './',
  browsers : 'last 2 versions, ie >= 11'
}

gulp.task('sass', function(){
  gulp.src(dir.dev + 'sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: dir.browsers,
      cascade: true,
      grid : true
    }))
    .pipe(cssbeautify({
      indent: ' ',
      openbrace: 'end-of-line',
      autosemicolon: true
    }))
    .pipe(header(charset))
    .pipe(gulp.dest('../css'));
});

gulp.task('ejs', function(){
  gulp.src(
    [dir.dev + 'ejs/**/*.ejs','!' + dir.dev + 'ejs/**/_*.ejs']
  )
    .pipe(plumber())
    .pipe(ejs( {}, {
      ext: '.html'
    }))
    .pipe(gulp.dest('../'));
});

gulp.task('browser-sync', function() {
  browserSync({
     server: {
       baseDir: "../",
       index : "index.html"
    }
  });
});

gulp.task('default', ['sass', 'ejs', 'browser-sync'] , function(){
  gulp.watch(dir.dev + 'sass/**/*.scss', ['sass']);
  gulp.watch(dir.dev + 'ejs/**/*.ejs', ['ejs']);
});