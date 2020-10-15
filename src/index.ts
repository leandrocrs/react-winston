import useLogger from './hooks/useLogger';
import useWinston from './hooks/useWinston';
import WinstonProvider from './provider/WinstonProvider';

const ReactWinston = {
  WinstonProvider,
  useWinston,
  useLogger,
};

export default ReactWinston;
