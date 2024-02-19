/**
 * Good Logs
 * Copyright(c) 2024 Bally Lomibao
 * MIT Licensed
 */
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
   * @return void
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

declare enum Key {
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
