var gulp = require('gulp'),
    handlebars = require('gulp-handlebars'),
    declare = require('gulp-declare'),
    concat = require('gulp-concat');

var paths = {
    handlebars: {
        input: "resources/views/handlebars/*.handlebars",
        output: "public/js/"
    }
}

gulp.task('handlebars', function()
{
    return gulp.src(paths.handlebars.input)
        .pipe(handlebars({
            wrapped: true
        }))
        .pipe(declare({
            namespace: 'Handlebars.templates'
        }))
        .pipe(concat("template.js"))
        .pipe(gulp.dest(paths.handlebars.output));
});

gulp.task('default', function()
{
   gulp.start('handlebars');
});