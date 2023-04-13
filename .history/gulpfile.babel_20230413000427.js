const gulp = require("gulp");
const connect = require("gulp-connect");
const del = require("del");
const sass = require("gulp-sass")(require("sass"));
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");
const fileinclude = require("gulp-file-include");
const prettier = require("gulp-prettier");
const autoprefixer = require("gulp-autoprefixer");
// const htmllint = require("gulp-htmllint");
const fancyLog = require("fancy-log");
const colors = require("ansi-colors");
const browserify = require('gulp-browserify');
const jsImport = require('gulp-js-import');
const uglify = require('gulp-uglify-es').default; // minify

const src = "src";
const dist = "dist";

const paths = {
  js: src + "/assets/js/**/*.js",
  css: src + "/assets/css/**",
  scss: src + "/assets/scss/**/*.scss",
  html: src + "/**/*.html",
  img: src + "/assets/images/**",
  favicon: src + "/assets/favicon/**",
  font: src + "/assets/fonts/**",
  lib: src + "/assets/lib/**",
  bundle: src + "/assets/data/*.js",
  importjs: src + "/assets/data/*.js",
};

// eslint-disable-next-line no-unused-vars
function done(cb) {
  console.log("Finished");
  cb();
}

export const clean = () => del(["dist"]);




// function htmllintReporter(filepath, issues) {
//   if (issues.length > 0) {
//     issues.forEach(function (issue) {
//       fancyLog(colors.blue("[gulp-htmllint] ") + colors.white(filepath + " [" + issue.line + "," + issue.column + "]: ") + colors.red("(" + issue.code + ") " + issue.msg + colors.cyan("(" + issue.rule + ") ")));
//     });

//     process.exitCode = 1;
//   }
// }

function html() {
  return gulp
    .src([paths.html])
    // .pipe(htmllint({}, htmllintReporter))
    .pipe(
      fileinclude({
        prefix: "@@", //사용할땐 앞에@@ 를 붙이면됨
        basepath: "@file",
      })
    )
    .pipe(prettier({ singleQuote: true, printWidth: 300 }))
    .pipe(gulp.dest(dist))
    .pipe(connect.reload());
}

// function js() {
//   return gulp
//     .src(paths.js) //소스파일
//     // .pipe(babel()) // es6 -> es5로 컴파일
//     .pipe(gulp.dest(dist + "/assets/js")) // dist에 복사
//     .pipe(connect.reload()); //변경되면 실시간 새로고침
// }

// function bundle() {
//   return gulp
//     .src(paths.js) //소스파일
//     .pipe(browserify())
//     .pipe(gulp.dest(dist + "/assets/data")) // dist에 복사
//     .pipe(connect.reload()); //변경되면 실시간 새로고침
// }

// function importjs(){
//   return gulp.src(paths.importjs)
//   .pipe(jsImport({
//       hideConsole: true, //콘솔 숨기기
//       importStack: true //한 번만 파일 가져오기
//   }))
//   .pipe(gulp.dest(dist + "/assets/data"));
// }


//minify
function ugly() {
  return gulp.src('src/**/*.js') //src/ 폴더 내에 js 파일 모두 minify(uglify)
  .pipe(uglify())
  .pipe(gulp.dest(dist + "/assets")) // dist에 복사
  .pipe(connect.reload()); //변경되면 실시간 새로고침
}

// gulp.task('import', function() {
//   return gulp.src(paths.js)
//         .pipe(jsImport({
//             hideConsole: true,
//             importStack: true
//         }))
//         .pipe(gulp.dest('dist'));
// });

function scss() {
  return gulp
    .src(paths.scss) //소스파일
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError)) // 사스로 컴파일
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("./maps")) // 소스맵생성
    .pipe(gulp.dest(dist + "/assets/css")) // dist에 복사
    .pipe(connect.reload()); //변경되면 실시간 새로고침
}

function lib() {
  return gulp
    .src(paths.lib) //소스파일
    .pipe(gulp.dest(dist + "/assets/lib/")) // dist에 복사
    .pipe(connect.reload()); //변경되면 실시간 새로고침
}

function font() {
  return gulp
    .src(paths.font) //소스파일
    .pipe(gulp.dest(dist + "/assets/fonts")) // dist에 복사
    .pipe(connect.reload()); //변경되면 실시간 새로고침
}

function image() {
  return gulp
    .src(paths.img) //개발용 이미지 위치
    .pipe(gulp.dest(dist + "/assets/images")) // dist에 복사
    .pipe(connect.reload()); //변경되면 실시간 새로고침
}

function favicon() {
  return gulp
    .src(paths.favicon) //개발용 이미지 위치
    .pipe(gulp.dest(dist + "/assets/favicon")) // dist에 복사
    .pipe(connect.reload()); //변경되면 실시간 새로고침
}


function server(done) {
  connect.server({
    root: "./dist/",
    livereload: true,
    //host: "192.168.0.138",
    port: 8080,
  });

  done();
}

function watcher(done) {
  gulp.watch(paths.js, gulp.series(js));
  gulp.watch(paths.scss, gulp.series(scss));
  gulp.watch(paths.html, gulp.series(html));
  gulp.watch(paths.img, gulp.series(image));
  //gulp.watch(paths.favicon, gulp.series(favicon));
  gulp.watch(paths.lib, gulp.series(lib));
  // gulp.watch(paths.bundle, gulp.series(bundle));
  gulp.watch(paths.importjs, gulp.series(importjs));
  gulp.watch(paths.js, gulp.series(uglify));

  done();
}

const build = gulp.series(clean, gulp.parallel(js, font, image, favicon, scss, html, lib, watcher, server, importjs, ugly));

exports.default = build;
