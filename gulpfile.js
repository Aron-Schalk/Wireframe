var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require("browser-sync").create();

gulp.task('serve', ['sass'], function() {

    bs.init({
        server: "./"
    });

    gulp.watch("./scss/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', bs.reload);
});

gulp.task('sass', function() {
    return gulp.src("./scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"))
        .pipe(bs.stream());
});

gulp.task('default', ['serve']);