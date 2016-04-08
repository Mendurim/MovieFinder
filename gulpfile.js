var gulp = require('gulp'); 
var browserify = require('browserify'); 
var reactify = require('reactify'); 
var source = require('vinyl-source-stream'); 


// gulp tasks for browserify 
gulp.task('browserify', function(){
	browserify('./src/js/main.js') // location of the main.js 
	    .transform('reactify')     // transform jsx into js 
	    .bundle()				   // bundle all actions together(actions, stores)
	    .pipe(source('main.js'))   //
	    .pipe(gulp.dest('dist/js'))// output destionation for our compiler, it creates auto the dest folder

}); 

gulp.task('copy', function(){
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist')); 
	gulp.src('src/css/*.*')             // *.* any files on that particular folder
		.pipe(gulp.dest('dist/css')); 
	gulp.src('src/js/vendors/*.*')      // *.* any files on that particular folder
		.pipe(gulp.dest('dist/js')); 
}); 

gulp.task('default', ['browserify', 'copy'], function(){
	return gulp.watch('src/**/*.*', ['browserify', 'copy']);   //auto compile autom while updating // ** => any folder *.* => any file
}); 