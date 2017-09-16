// Include gulp

const gulp = require('gulp');
const suitcss = require('gulp-suitcss');

gulp.task('suitcss', () =>
    gulp.src('src/css/index.css')
        .pipe(suitcss({
            minify: true,
        }))
        .pipe(gulp.dest('dist'))
);
// Watch Files For Changes
gulp.task('watch', function () {
    // gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('src/css/**/*.css', ['suitcss']);
});

// Default Task
gulp.task('default', ['suitcss', 'watch']);