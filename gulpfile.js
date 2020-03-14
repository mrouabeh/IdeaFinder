const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();

function defaultTask()
{
	browserSync.init(
		{
			server: {
				baseDir: 'src/'
			}
		}
	);

	gulp.watch("./src/scss/**/*.scss", style);
	gulp.watch(["./src/**/*.html", "./src/script/**/*.js"]).on("change", browserSync.reload);
}

function style()
{
	return (
		gulp.src("./src/scss/**/*.scss")
		.pipe(sass({outputStyle: "compressed"}))
		.pipe(autoprefixer())
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest("./src/css"))
		.pipe(browserSync.stream())
	);
}

exports.default = defaultTask;
exports.style = style;