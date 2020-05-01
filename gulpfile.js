const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();
// const uglify = require('gulp-uglify');
const minify = require('gulp-minify');
const csso = require('gulp-csso');

const paths = {
	src: {
		base: "./src/",
		scss: "./src/scss/",
		css: "./src/css/",
		script: "./src/script/"
	},
	dist: {
		base: "./doc",
		css: "./doc/css",
		script: "./doc/script"
	}
};



function defaultTask()
{
	browserSync.init(
		{
			server: {
				baseDir: paths.src.base
			}
		}
	);

	gulp.watch(paths.src.scss + "/**/*.scss", style);
	gulp.watch([paths.src.base + "/**/*.html", paths.src.script + "/**/*.js"]).on("change", browserSync.reload);
}



function style()
{
	return (
		gulp.src(paths.src.scss + "/**/*.scss")
			.pipe(sass())
			.pipe(autoprefixer())
			.pipe(gulp.dest(paths.src.css))
			.pipe(browserSync.stream())
	);
}



function htmlBuild() {
	return (
		gulp.src(paths.src.base + "/**/*.html")
			.pipe(gulp.dest(paths.dist.base))
	);
}



function cssBuild() {
	return (
		gulp.src(paths.src.css + "/**/*.css")
			.pipe(csso())
			.pipe(rename({ suffix: ".min" }))
			.pipe(gulp.dest(paths.dist.css))
	);
}



function jsBuild()
{
	return (
		gulp.src(paths.src.script + "/**/*.js")
			.pipe(minify({
				ext: {
					src: '.js',
					min: '.min.js'
				}
			}))
			.pipe(gulp.dest(paths.dist.script))
	);
}



exports.default = defaultTask;
exports.style = style;
exports.build = gulp.series(htmlBuild, cssBuild, jsBuild);