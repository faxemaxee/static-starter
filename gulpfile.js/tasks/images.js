"use strict";

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');

function compressImages() {
    return gulp.src(['src/img/**/*', '!src/img/uncompressed/**/*'])
        .pipe(changed('./dist/img'))
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
}

function copyImages() {
    return gulp.src('src/img/uncompressed/**/*')
        .pipe(changed('./dist/img'))
        .pipe(gulp.dest('./dist/img'));
}

module.exports = gulp.parallel(compressImages, copyImages);