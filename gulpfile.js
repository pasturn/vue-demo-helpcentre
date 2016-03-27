var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task('webpack',function(){
    return gulp.src('./')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['webpack']);