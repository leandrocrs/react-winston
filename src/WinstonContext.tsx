import React from 'react';
import winston, { Logger } from 'winston';

export type WinstonContextProps = {
  winston: typeof winston;
  logger?: Logger;
};

export const WinstonContext = React.createContext<WinstonContextProps>({
  winston,
});

if (process.env.NODE_ENV !== 'production') {
  WinstonContext.displayName = 'ReactWinston';
}

export default WinstonContext;
