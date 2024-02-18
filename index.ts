import 'colors'

import { Request, Response, NextFunction } from 'express'

export interface IRequestExtended extends Request {
  body: { [key: string]: string | undefined }
}

export interface IExpressController {
  (req: IRequestExtended, res: Response, next: NextFunction): void
}

interface IGoodLog {
  /**
   * Custom log
   * @param message
   * @param color
   */
  custom(color: any, ...message: string[]): void

  /**
   * log message to console
   * @param message - message to log : default
   */
  log(...message: string[]): void

  /**
   * log message in type info
   * @param message - message to log : type info
   */
  info(...message: string[]): void

  /**
   * log message in type warn
   * @param message - message to log : type warn
   */
  warn(...message: string[]): void

  /**
   * log message in type array in a table
   * @param message - message to log : type array/object
   */
  tbl(...message: any[]): void

  /**
   * log message in type error
   * @param message - message to log : type error
   */
  error(...message: string[]): void

  /**
   * log message in type debug
   * @param message - message to log : type debug
   */
  debug(...message: string[]): void

  req: IExpressController

  /**
   *
   * @param port - server port
   * @param apiRoot - api version
   * @param isProd - send the status of the server environment
   * @param isConnected - send the status of the server connection
   */
  server(
    port: number,
    apiRoot: string,
    isProd: boolean,
    isConnected: boolean
  ): void

  /**
   * Preset log type for connection status update in the console
   * @param db - connection call
   * @param isConnected - send the status of the db connection
   */
  db(host: any, dbName: any, isConnected: boolean): void
}

enum Key {
  // @error keys
  Connected = 'CONNECTED 🟢',
  NotConnected = 'NOT CONNECTED 🔴',
  Environment = ' ENVIRONMENT: ',
  Production = 'production',
  Development = 'development',

  // @logger - req
  ReqMethod = ' Request Method: ',
  ReqURL = ' Request URL: ',
  ReqTime = ' Request Time: ',

  // @logger - server
  ServerPort = ' SERVER PORT: ',
  ServerAPIVersion = ' API VERSION: ',
  ServerStatus = ' SERVER STATUS: ',
}

declare module 'colors' {
  interface String {
    yellow: string
    bgCyan: string
    bgRed: string
    red: string
    bgYellow: string
  }
}

const goodlog: IGoodLog = {
  // @type - custom
  custom: (color: any, ...message: string[]) =>
    console.log(message.join('')[color]),

  // @type - log :Default
  log: (...message: string[]) => console.log(message.join(' ').yellow),

  // @type - info
  info: (...message: string[]) => console.log(message.join(' ').bgCyan),

  // @type - warn
  warn: (...message: string[]) => console.warn(message.join(' ').bgYellow),

  // @type - table -for array and obj
  tbl: (...message: any[]) => console.table(message),

  // @type - error
  error: (...message: string[]) => console.log(message.join('').red.bold),

  // @type - debug
  debug: (...message: string[]) => console.debug(message.join(' ').bgRed),

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
  server: (port: any, apiRoot: any, isProd: boolean, isConnected: boolean) => {
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
  db: (host: any, dbName: any, isConnected: boolean) => {
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
