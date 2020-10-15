import { useContext } from 'react';
import WinstonContext, { WinstonContextProps } from '../WinstonContext';

const useWinstonContext = (): WinstonContextProps => {
  const context = useContext(WinstonContext);

  return context;
};

export default useWinstonContext;
