module.exports = function() {
  $.gulp.task('downloads', function() {
    return $.gulp
      .src(['./src/downloads/*.pdf'])
      .pipe($.gulp.dest('./dest/downloads/'))
      .pipe($.debug({ title: 'downloads' }))
  })
}
