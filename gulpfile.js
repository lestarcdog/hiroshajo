var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var routes = {
    root : "WebContent",
    src : "WebContent/src/*"
};

// Static server
gulp.task('devserver', function() {
    browserSync.init({
        server : {
            baseDir : "WebContent",
            open : true
        }
    });

    browserSync.watch(routes.root + "/**").on("change", browserSync.reload);
});


gulp.task("default", function() {
   console.log("do nothing"); 
});