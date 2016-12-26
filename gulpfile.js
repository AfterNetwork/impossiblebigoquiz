var gulp = require('gulp');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var concat = require('gulp-concat');



gulp.task('uglify', function() {
    return gulp.src('client/src/**/*.js')
      .pipe(babel())
      .pipe(uglify())
      .pipe(concat('all.js'))
      .pipe(gulp.dest('client/dist'));
});

gulp.task('watch', function() {
  gulp.watch('client/src/**/*.js', ['uglify'])
})







