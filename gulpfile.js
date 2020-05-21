
"use strict";

const gulp = require('gulp'),
			sass = require('gulp-sass'),
			plumber = require("gulp-plumber");

// CSS task
function css() {
  return gulp
    .src("scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("css/"))
}

// Watch files
function watchFiles() {
  gulp.watch("scss/**/*", css);
}

// Define complex tasks
const build = gulp.series(gulp.parallel(css));
const watch = gulp.parallel(watchFiles);

// Export tasks
exports.css = css;
exports.build = build;
exports.watch = watch;
exports.default = build;
