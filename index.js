'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
require('colors')
/**
 * Good Logs
 * Copyright(c) 2024 Bally Lomibao
 * MIT Licensed
 */
var Key
;(function (Key) {
  // @error keys
  Key['Connected'] = 'CONNECTED \uD83D\uDFE2'
  Key['NotConnected'] = 'NOT CONNECTED \uD83D\uDD34'
  Key['Environment'] = ' ENVIRONMENT: '
  Key['Production'] = 'production'
  Key['Development'] = 'development'
  // @logger - req
  Key['ReqMethod'] = ' Request Method: '
  Key['ReqURL'] = ' Request URL: '
  Key['ReqTime'] = ' Request Time: '
  // @logger - server
  Key['ServerPort'] = ' SERVER PORT: '
  Key['ServerAPIVersion'] = ' API VERSION: '
  Key['ServerStatus'] = ' SERVER STATUS: '
})(Key || (Key = {}))
var goodlog = {
  // @type - custom
  custom: function (color) {
    var message = []
    for (var _i = 1; _i < arguments.length; _i++) {
      message[_i - 1] = arguments[_i]
    }
    return console.log(message.join('')[color])
  },
  // @type - log :Default
  log: function () {
    var message = []
    for (var _i = 0; _i < arguments.length; _i++) {
      message[_i] = arguments[_i]
    }
    return console.log(message.join(' ').yellow)
  },
  // @type - info
  info: function () {
    var message = []
    for (var _i = 0; _i < arguments.length; _i++) {
      message[_i] = arguments[_i]
    }
    return console.log(message.join(' ').bgCyan)
  },
  // @type - warn
  warn: function () {
    var message = []
    for (var _i = 0; _i < arguments.length; _i++) {
      message[_i] = arguments[_i]
    }
    return console.warn(message.join(' ').bgYellow)
  },
  // @type - table -for array and obj
  tbl: function () {
    var message = []
    for (var _i = 0; _i < arguments.length; _i++) {
      message[_i] = arguments[_i]
    }
    return console.table(message)
  },
  // @type - error
  error: function () {
    var message = []
    for (var _i = 0; _i < arguments.length; _i++) {
      message[_i] = arguments[_i]
    }
    return console.log(message.join('').red.bold)
  },
  // @type - debug
  debug: function () {
    var message = []
    for (var _i = 0; _i < arguments.length; _i++) {
      message[_i] = arguments[_i]
    }
    return console.debug(message.join(' ').bgRed)
  },
  req: function (req, res) {
    console.log('')
    console.log(Key.ReqMethod.dim, req.method.yellow.bold)
    console.log(Key.ReqURL.dim, req.url.yellow.bold)
    console.log(Key.ReqTime.dim, new Date().toString().yellow.bold)
    console.log('')
  },
  /**
   *
   * @param port - server port
   * @param apiRoot - api version
   * @param isProd - send the status of the server environment
   * @param isConnected - send the status of the server connection
   * @return void
   */
  server: function (port, apiRoot, isProd, isConnected) {
    console.log(Key.ServerPort.dim, port.yellow)
    console.log(Key.ServerAPIVersion.dim, apiRoot.yellow)
    if (isProd) {
      console.log(Key.Environment.dim, Key.Production.blue.bold)
    } else {
      console.log(Key.Environment.dim, Key.Development.white.bold)
    }
    if (isConnected) {
      console.log(Key.ServerStatus.dim, Key.Connected.green.bold)
    } else {
      console.log(Key.ServerStatus.dim, Key.NotConnected.red.bold)
    }
  },
  // @preset - database
  db: function (host, dbName, isConnected) {
    var DB_LOG = [
      {
        HOST: host,
        DATABASE: dbName,
        STATUS: isConnected ? Key.Connected : Key.NotConnected,
      },
    ]
    console.table(DB_LOG)
  },
}

module.exports = goodlog
