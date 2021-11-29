var syntax        = 'sass', // Syntax: sass or scss;
		gulpversion   = '4'; // Gulp version: 3 or 4


var gulp          = require('gulp'),
connect = require('gulp-connect-php');
		gutil         = require('gulp-util' ),
		sass          = require('gulp-sass'),
		sass = require('gulp-sass')(require('sass')),
		browserSync   = require('browser-sync'),
		concat        = require('gulp-concat'),
		uglify        = require('gulp-uglify'),
		cleancss      = require('gulp-clean-css'),
		rename        = require('gulp-rename'),
		autoprefixer  = require('gulp-autoprefixer'),
		notify        = require('gulp-notify'),
		rsync         = require('gulp-rsync');

gulp.task('browser-sync', function() {
	browserSync({
		proxy: 'http://localhost/worldcamp2019/app/',
		notify: false,
		// open: false,
		// online: false, // Work Offline Without Internet Connection
		// tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
	})
});

gulp.task('styles', function() {
	return gulp.src('app/'+syntax+'/**/*.'+syntax+'')
	.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
	.pipe(rename({ suffix: '.min', prefix : '' }))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream())
});

gulp.task('scripts', function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/jquery.easing/jquery.easing.min.js',
		'app/libs/headhesive/dist/headhesive.min.js',
		'app/libs/waypoints/waypoints.min.js',
		'app/libs/animate/animate-css.js',		
		'app/libs/owl2/owl.carousel.min.js',
		'app/libs/imagesloaded/imagesloaded.pkgd.min.js',	
		'app/libs/Magnific-Popup/jquery.magnific-popup.min.js',	
		'app/libs/isotope/isotope.pkgd.min.js',
		'app/libs/jquery-countdown/jquery.plugin.min.js',					
		'app/libs/jquery-countdown/jquery.countdown.min.js',								
		'app/js/common.js' // Always at the end
		])
	.pipe(concat('scripts.min.js'))
	// .pipe(uglify()) // Mifify js (opt.)
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('code', function() {
	return gulp.src('app/*.html')
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('code_php', function() {
	return gulp.src('app/*.php')
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('rsync', function() {
	return gulp.src('app/**')
	.pipe(rsync({
		root: 'app/',
		hostname: 'username@yousite.com',
		destination: 'yousite/public_html/',
		// include: ['*.htaccess'], // Includes files to deploy
		exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
		recursive: true,
		archive: true,
		silent: false,
		compress: true
	}))
});

// if (gulpversion == 3) {
// 	gulp.task('watch', ['styles', 'scripts', 'browser-sync'], function() {
// 		gulp.watch('app/'+syntax+'/**/*.'+syntax+'', ['styles']);
// 		gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['scripts']);
// 		gulp.watch('app/*.html', ['code'])
// 	});
// 	gulp.task('default', ['watch']);
// }

if (gulpversion == 4) {
	gulp.task('watch', function() {
		gulp.watch('app/'+syntax+'/**/*.'+syntax+'', gulp.parallel('styles'));
		gulp.watch(['libs/**/*.js', 'app/js/common.js'], gulp.parallel('scripts'));
		gulp.watch('app/*.html', gulp.parallel('code'));
		gulp.watch('app/*.php', gulp.parallel('code_php'))
	});
	gulp.task('default', gulp.parallel('watch', 'styles', 'scripts', 'browser-sync'));
}
