[![Made with TypeScript](https://img.shields.io/badge/-Made_with_TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](#)

<br/>

> Module


# Good Logs

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
 V1.3.0
```

## Example

```typescript
import goodlog from 'good-logs'

goodlog.log('Hello, world!')

goodlog.info('This is an informational message.')
```

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