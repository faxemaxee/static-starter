"use strict";

const del = require('del');

function clean() {
    return del([
        'dist/**/*.!(php|html|gitkeep|htaccess)',
        'dist/js',
        'dist/img',
        'dist/assets',
    ])
}

module.exports = clean;