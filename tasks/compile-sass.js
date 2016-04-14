module.exports = (gulp, config) => () => {
  const gulpSass = require('gulp-sass');
  const gulpAutoPrefixer = require('gulp-autoprefixer');
  const gulpFlatten = require('gulp-flatten');
  const path = require('path');

  return gulp.src(path.join(config.srcDir, '**', '*.scss'))
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(gulpAutoPrefixer('last 2 versions'))
    .pipe(gulpFlatten())
    .pipe(gulp.dest(config.srcDir));
};
