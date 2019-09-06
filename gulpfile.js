var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');


var cssDest = 'style';
var cssInputFile = 'source/style.scss';
var watchedFile = 'source/**/*.scss';

gulp.task('buildcss', function(){
	return gulp.src(cssInputFile)
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(autoprefixer({
            
        }))
        .pipe(sourcemaps.write('../maps'))
		.pipe(gulp.dest(cssDest));
});

gulp.task('watch', function(){
	gulp.watch(watchedFile, gulp.series('buildcss'));
});