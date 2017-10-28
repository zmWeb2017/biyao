var gulp=require('gulp'),
	sass=require('gulp-sass'),
	uglify=require("gulp-uglify");
//sass编译的任务
gulp.task("sass",function(){
	gulp.src("demo.scss").pipe(sass()).pipe(gulp.dest("css"));
});