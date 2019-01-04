"use strict";

const gulp = require('gulp');
const concat = require('gulp-concat');

function bundlejs() {
    return gulp.src('src/js/bundle/*.js')
        .pipe(concat('bundle.min.js'))
        .pipe(gulp.dest('dist/js'));
}

function copyjs() {
    return gulp.src(['src/js/*.js', 'src/js/*.js.map'])
        .pipe(gulp.dest('dist/js'));
}

module.exports = gulp.parallel(bundlejs, copyjs);
