// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    env: {
      browser: true,
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    extends: 'vue',
    // required to lint *.vue files
    plugins: [
      'vuefix',
      'html'
    ],
    // add your custom rules here
    'rules': {
      // allow paren-less arrow functions
      'arrow-parens': 0,
      // allow async-await
      'generator-star-spacing': 0,
      "space-before-function-paren": ["error", "never"],
      //大括号都不需要空格
      'space-before-blocks': ["error", "never"],
      //if等语句不需要空格
      'keyword-spacing': 0,
      // 参数任意命名形式，尽量使用驼峰，向后台传参数的时候使用下划线
      "camelcase" : 0,
      "no-unused-vars": 0,
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    },
    globals:{
      http:false
    }
  }
  