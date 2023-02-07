const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');

function convert() {
    return gulp.src('./styles/style.sass')
        .pipe(rename({ suffix: '.min' }))
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
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

function startServe(done) {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 3000
    });
    done();
}

// gulp.task(convert);
// gulp.task('default', gulp.parallel(watchServer, startServe));

exports.default = gulp.parallel(convert, watchServer, startServe);
