var gulp = require('gulp');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');



gulp.task('uglify', function() {
    return gulp.src('client/src/**/*.js')
      .pipe(babel())
      .pipe(uglify())
      .pipe(gulp.dest('client/dist'));
});

gulp.task('watch', function() {
  gulp.watch('client/src/**/*.js', ['uglify'])
})

// gulp.task('babel', function(){
//   gulp.src('client/src/**/*.js')
//       .pipe(babel())
//       .pipe(gulp.dest('client/dist'));
// });





