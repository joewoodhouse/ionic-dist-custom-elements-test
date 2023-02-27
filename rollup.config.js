import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
export default {
    input: 'src/index.ts',
    output: [{ dir: path.resolve('dist/'), format: 'es' }],
    plugins: [
        resolve(),
        commonjs(),
        postcss({
            extensions: ['.css'],
        }),
        typescript()
    ],
};