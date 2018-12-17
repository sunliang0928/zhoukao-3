/*
 * @Author: sunliang 
 * @Date: 2018-12-17 08:50:49 
 * @Last Modified by: sunliang
 * @Last Modified time: 2018-12-17 10:08:44
 */

var gulp = require('gulp');
var server = require('gulp-webserver');
var scss = require('gulp-sass');

//编译scss
gulp.task('scss', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(scss())
        .pipe(gulp.dest('./src/css'))
})

//gulp服务
gulp.task('server', function() {
    return gulp.src('./src')
        .pipe(server({
            port: 9090,
            proxies: [
                { source: '/users/', target: 'http://localhost:3000/users/' }
            ]
        }))
})

//监听scss
gulp.task('watch', function() {
    gulp.watch('./src/scss/*.scss', gulp.series('scss'))
})

gulp.task('default', gulp.series('scss', 'server', 'watch'));