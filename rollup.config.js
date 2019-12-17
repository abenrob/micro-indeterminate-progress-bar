// rollup.config.js
import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";

const name = 'mipb';

export default {
    input: './src/index.js',
    context: 'window',
    output: {
        file: `./dist/${name}.min.js`,
        format: 'iife',
        name: name
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        uglify()
    ]
}
