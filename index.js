/**
 * Good Logs
 * Copyright(c) 2024 Bally Lomibao
 * MIT Licensed
 */
import 'colors'
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
const goodlog = {
  // @type - custom
  custom: (color, ...message) => console.log(message.join('')[color]),
  // @type - log :Default
  log: (...message) => console.log(message.join(' ').yellow),
  // @type - info
  info: (...message) => console.log(message.join(' ').bgCyan),
  // @type - warn
  warn: (...message) => console.warn(message.join(' ').bgYellow),
  // @type - table -for array and obj
  tbl: (...message) => console.table(message),
  // @type - error
  error: (...message) => console.log(message.join('').red.bold),
  // @type - debug
  debug: (...message) => console.debug(message.join(' ').bgRed),
  req: (req, res) => {
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
  server: (port, apiRoot, isProd, isConnected) => {
    console.log(Key.ServerPort.bgYellow, port.yellow)
    console.log(Key.ServerAPIVersion.bgYellow, apiRoot.yellow)
    if (isProd) {
      console.log(Key.Environment.bgYellow, Key.Production.blue.bold)
    } else {
      console.log(Key.Environment.bgYellow, Key.Development.white.bold)
    }
    if (isConnected) {
      console.log(Key.ServerStatus.bgYellow, Key.Connected.green.bold)
    } else {
      console.log(Key.ServerStatus.bgYellow, Key.NotConnected.red.bold)
    }
  },
  // @preset - database
  db: (host, dbName, isConnected) => {
    const DB_LOG = [
      {
        HOST: host,
        DATABASE: dbName,
        STATUS: isConnected ? Key.Connected : Key.NotConnected,
      },
    ]
    console.table(DB_LOG)
  },
}
export default goodlog
