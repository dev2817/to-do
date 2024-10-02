import { createLogger, format, transports } from 'winston';
const { combine, timestamp, printf, colorize } = format;

// Custom log format
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

// Create logger instance
const logger = createLogger({
  format: combine(
    colorize(),  // Add colors to the log levels
    timestamp(), // Add timestamp to logs
    logFormat
  ),
  transports: [
    new transports.Console(), // Log to console
    new transports.File({ filename: 'logs/error.log', level: 'error' }), // Log errors to file
    new transports.File({ filename: 'logs/combined.log' }) // Log all messages to file
  ]
});

// If in production, remove the console logger
if (process.env.NODE_ENV === 'production') {
  logger.remove(new transports.Console());
}

export default logger;
