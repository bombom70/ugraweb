const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function cope() {
    return gulp.src('./styles/*.scss')
        .pipe(sass().on('error', sass.logError))
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
    gulp.watch("./**/*.scss", reload);
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

gulp.task('default', gulp.parallel(watchServer, startServe));
// gulp.task(cope);