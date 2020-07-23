// const { series,parallel } = require('gulp')

// function defaultTask(cb){
//     cb()
// }

// const javascript = cb =>cb()

// const css = cb => cb()

// exports.builds = series(defaultTask, parallel(javascript,css))

const { src, dest, series} = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const rename =  require('gulp-rename')
const fs = require('fs')

function streamTask(){
    return src('entry/*.js')
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(src('index.js'))
    .pipe(dest('output'))
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(dest('output'))
}

async function promse(){
 const { version } = fs.readFileSync('package.json')
 console.log(version)
 await Promise.resolve('promise')
}

exports.promse = promse

exports.default = series(streamTask, promse)