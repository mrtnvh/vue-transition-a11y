import typescript from 'rollup-plugin-typescript2';
import shared from './rollup.shared';
import pkg from './package.json';

export default {
  ...shared,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
  ],
  plugins: [typescript()],
};
