const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
const del = require('del');
const babel = require('gulp-babel');
const uglify  = require('gulp-uglify');

function convert() {
    return gulp.src('./styles/style.sass')
        .pipe(rename({ suffix: '.min' }))
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());
}

function convertJS() {
    return gulp.src('./menu.js')
        .pipe(babel())
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());
}

function reload(done) {
    browserSync.reload();
    done();
}

function watchServer() {
    gulp.watch("./**/*.html", reload);
    gulp.watch("./**/*.js", reload);
    gulp.watch("./**/*.sass", reload);
}

function clear() {
    return del('./dist/');
}

function startServe() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 3000
    });
    gulp.watch("./**/*.html", reload);
    gulp.watch("./**/*.js", gulp.series(clear, convertJS, reload));
    gulp.watch("./**/*.sass", gulp.series(clear, convert, reload));
}

exports.default = gulp.series(clear, convert, convertJS,  startServe);
