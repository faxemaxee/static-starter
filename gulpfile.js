// Include gulp

const gulp = require('gulp');
const suitcss = require('gulp-suitcss');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');


gulp.task('images', function () {
    gulp.src('src/img/**/*')
        .pipe(changed('./dist/img'))
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('javascript', () => {
    gulp.src('src/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('dist'))
})

gulp.task('suitcss', () =>
    gulp.src('src/css/index.css')
        .pipe(suitcss({
            minify: true,
        }))
        .pipe(gulp.dest('dist'))
);
// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch('src/css/**/*.css', ['suitcss']);
    gulp.watch('src/js/*.js', ['javascript']);
});

// Default Task
gulp.task('default', ['suitcss', 'javascript', 'watch']);