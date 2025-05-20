const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildSass() {
    return src('src/styles/main.sass') // nebo src/styles/...
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'));

}
function watchSass() {
    watch('src/styles/**/*.sass', buildSass);
}

exports.default = watchSass;
exports.build = buildSass;
