// eslint-disable-next-line import/no-extraneous-dependencies
import { Config } from 'bili';

const config: Config = {
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    moduleName: 'ReactWinston',
    format: [
      'amd',
      'amd-min',
      'cjs',
      'cjs-min',
      'commonjs',
      'es',
      'es-min',
      'esm',
      'esm-min',
      'iife',
      'iife-min',
      'module',
      'system',
      'system-min',
      'systemjs',
      'umd',
      'umd-min',
    ],
  },
};

export default config;
