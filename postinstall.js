'use strict'
require('shelljs/global')
var isArray = require('util').isArray

var args
try {
    args = JSON.parse(process.env.npm_config_argv).original
} finally {
    if (!isArray(args)) {
        args = []
    }
}
var targetArgs = args.filter(function (arg) {
    return /^--(runtime|target)/.test(arg)
})
var targetStr = targetArgs.reduce(function (m, arg) {
    return m + ' ' + arg
}, '')

// windows
// todo: pass build args
// exec('npm install sqlite3 --build-from-source' + targetStr)
cd('node_modules/sqlite3')
exec('npm i --build-from-source' + targetStr)
