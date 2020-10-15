import Winston from 'winston';
import useWinstonContext from './useWinstonContext';

const useWinston = (): typeof Winston => {
  const { winston } = useWinstonContext();

  return winston;
};

export default useWinston;
