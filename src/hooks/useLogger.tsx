import Winston, { Logger, LoggerOptions } from 'winston';
import useWinston from './useWinston';

const useLogger = (
  loggerName?: string,
  options?: LoggerOptions,
): typeof Winston | Logger => {
  const winston = useWinston();

  if (loggerName != null) {
    if (winston.loggers.has(loggerName)) {
      return winston.loggers.get(loggerName);
    }

    return winston.loggers.add(loggerName, options);
  }

  return winston;
};

export default useLogger;
