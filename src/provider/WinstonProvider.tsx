import React from 'react';
import winston, { Logger } from 'winston';
import WinstonContext from '../WinstonContext';

type WinstonProviderProps = {
  children: React.ReactNode;
  logger?: Logger;
};

const WinstonProvider: React.FC<WinstonProviderProps> = ({
  children,
  logger,
}: WinstonProviderProps) => (
  <WinstonContext.Provider value={{ winston, logger }}>
    {children}
  </WinstonContext.Provider>
);

WinstonProvider.displayName = 'WinstonProvider';

WinstonProvider.defaultProps = {
  logger: undefined,
};

export default WinstonProvider;
