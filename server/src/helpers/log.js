/**
 * PLEASE DON'T USE CONSOLE.LOG
 *
 * Examples:
 * log.info('inform')
 * out: [2020-04-21 12:55:22.337 ] [INFO]: inform
 *
 * log.info({label:'Received message', message: 'inform'})
 * out: [2020-04-21T12:37:53.252Z] [INFO] [Received message]: inform
 */
import { createLogger, transports, format } from 'winston';

const mFormat = format.printf(({ level, message, timestamp, label }) => {
  if (!label)
    return `[${timestamp
      .replace('T', ' ')
      .replace('Z', '')}] [${level.toUpperCase()}]: ${message}`;
  return `[${timestamp
    .replace('T', ' ')
    .replace('Z', '')}] [${level.toUpperCase()}] [${label}]: ${message}`;
});

const log = createLogger({
  format: format.combine(format.timestamp(), mFormat),
});

if (process.env.NODE_ENV !== 'PRODUCTION') {
  log.add(new transports.Console());
}

export default log;
