/* eslint-disable import/no-extraneous-dependencies */
import typescript from 'rollup-plugin-typescript2';
import shared from './rollup.shared';
import pkg from './package.json';

export default {
  ...shared,
  output: [
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    typescript({
      extends: './tsconfig',
      compilerOptions: {
        target: 'esnext',
        outDir: 'build/module',
        module: 'esnext',
      },
    }),
  ],
};
