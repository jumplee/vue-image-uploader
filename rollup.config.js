import image from '@rollup/plugin-image'
import postcss from 'rollup-plugin-postcss'
import html from 'rollup-plugin-html'
import { uglify } from 'rollup-plugin-uglify'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
var config = {
  input: 'src/index.js',

  plugins: [
    commonjs(),
    resolve(),
    html({
      include: '**/*.html'
    }),
    image(),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
      extensions: ['css', 'scss']
    })
  ]
}

if (process.env.NODE_ENV === 'dev'){
  Object.assign(config, {
    output: {
      name: 'VueUploader',
      file: 'dist/vueUploader.js',
      format: 'iife',
      sourcemap: true
    }
  })
  config.plugins.push(babel({
    exclude: 'node_modules/**',
    babelHelpers: 'bundled'
  }))
}

if (process.env.NODE_ENV === 'production'){
  Object.assign(config, {
    output: {
      name: 'VueUploader',
      file: 'dist/vueUploader.min.js',
      format: 'iife',
      sourcemap: true
    }
  })
  config.plugins.push(babel({
    exclude: 'node_modules/**',
    babelHelpers: 'bundled'
  }))
  // 压缩
  config.plugins.push(uglify())
}
if (process.env.NODE_ENV === 'es'){
  Object.assign(config, {
    output: {
      file: 'dist/vueUploader.es.js',
      format: 'es'
    }
  })
}

export default config
