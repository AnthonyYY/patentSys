/**
 * Created by 叶家洪 on 2016/11/13.
 */
const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('compile-less',function () {
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css/'));
});

gulp.task('less',['compile-less'],function () {
    gulp.watch(['less/*.less','less/**.*'], ['compile-less'])
});