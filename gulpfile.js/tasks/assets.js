"use strict";

const gulp = require('gulp');

function assets() {
    return gulp.src('src/assets/**/*')
        .pipe(gulp.dest('./dist/assets'));
}

module.exports = assets;