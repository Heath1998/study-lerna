// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';

import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';

export default {
  // 入口
  input: 'src/index.ts',
  output: [
    {
      // 打包后文件
      file: 'dist/index.js',
      // 编译格式 commonjs umd amd
      format: 'cjs',
      name: '@anles/utils',
    },
    {
      // 打包后文件
      file: 'dist/index.mjs',
      // 编译格式 commonjs umd amd
      format: 'esm',
      name: '@anles/utils',
    }
  ],
  plugins: [
    resolve(),
    typescript(),
    babel({
      // exclude: 'node_modules/**',
      babelHelpers: 'runtime',
      extensions: ['.js', '.ts'],
    }),

  ],
};
