/// <binding AfterBuild='copy' />
/// <binding Clean='clean' />

var gulp = require('gulp');
//var sass = require('gulp-sass');

var paths = {
    npmSrc: "./node_modules/",
    libTarget: "./wwwroot/libs/",
    views: ["views/*.html"],
    scss: ["content/css/*.css"],
    appFolder: 'wwwroot/app'
};

var libsToMove = [
   paths.npmSrc + '/angular2/bundles/angular2-polyfills.js',
   paths.npmSrc + '/systemjs/dist/system.js',
   paths.npmSrc + '/systemjs/dist/system-polyfills.js',
   paths.npmSrc + '/rxjs/bundles/Rx.js',
   paths.npmSrc + '/angular2/bundles/angular2.dev.js',
   paths.npmSrc + '/es6-shim/es6-shim.min.js',
   paths.npmSrc + 'angular2/es6/dev/src/testing/es6-shim.min.js',
   paths.npmSrc + 'angular2/bundles/router.dev.js'
];
gulp.task('moveToLibs', function () {
    return gulp.src(libsToMove).pipe(gulp.dest(paths.libTarget));
});

gulp.task('copyViews', function () {
    return gulp.src(paths.views)
                .pipe(gulp.dest(paths.appFolder + '/views'));
})

gulp.task('buildCopyCSS', function () {
    return gulp.src(paths.scss)
                 //.pipe(sass())
                .pipe(gulp.dest(paths.appFolder + '/content/css'));
})

gulp.task('copy', ['moveToLibs', 'copyViews', 'buildCopyCSS'], function () {
    
})

gulp.task('clean', function () {
});
