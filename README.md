<br/>

<html>

<div align="right">

[![NPM](https://nodei.co/npm/good-logs.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/good-logs/)

</div>

</html>

# Good Logs

[![npm version](https://badge.fury.io/js/good-logs.svg)](https://badge.fury.io/js/good-logs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<br/>

Logging. Simplified.

<br/>

Good-logs provide a custom logging for your application. It uses the 'colors' package to colorize console output for better readability.

## Usage

Import good-logs into your file:

```typescript
import goodlog from 'good-logs'

custom(color: any, ...message: string[]): Logs a custom message with the specified color.

log(...message: string[]): Logs a message in yellow.

info(...message: string[]): Logs an informational message in cyan.

warn(...message: string[]): Logs a warning message in yellow.

tbl(...message: any[]): Logs a table for arrays and objects.

error(...message: string[]): Logs an error message in red.

debug(...message: string[]): Logs a debug message in red.

req(req, res): Logs request details.

server(port: any, apiRoot: any, isProd: boolean, isConnected: boolean): Logs server details.

db(host: any, dbName: any, isConnected: boolean): Logs database details.

```

## Example

```typescript
import goodlog from 'good-logs'

goodlog.log('Hello, world!')

goodlog.info('This is an informational message.')
```

<br/>

<div align="center">

<img src='https://i.ibb.co/rZ2j5JX/good-logs-1-2-5.png' height='150'>

</div>

<br/>

## Contributing

We welcome contributions from the community. Please refer to the [contributing guidelines](#)

<br/>

## Credits

This module makes use of the following open-source packages:

- [Colors](https://www.npmjs.com/package/colors): Used to colorize console output for better readability.
- [Express](https://www.npmjs.com/package/express): Used to handle HTTP requests and responses.

We are grateful to the authors of these packages for their work.

<br/>

## License

This module is open-source and available under the [MIT License](#).

<br/>
<br/>

These definitions were written by [Bally Lomibao](https://github.com/ballyalley-o).
