module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    //设置"script"（默认）或"module"如果你的代码是在ECMAScript中的模块。
    parser: 'babel-eslint'
  },
  rules: {
    /**
     *"off"或者0    //关闭规则关闭
      "warn"或者1    //在打开的规则作为警告（不影响退出代码）
      "error"或者2    //把规则作为一个错误（退出代码触发时为1） */
    //禁止使用console
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    //函数定义时括号前面要不要有空格
    "space-before-function-paren": 0,
    "no-unused-vars": [2, {
      // 允许声明未使用变量
      "vars": "local",
      // 参数不检查
      "args": "none"
    }],
    // 关闭语句强制分号结尾
    "semi": [0],
    //空行最多不能超过100行
    "no-multiple-empty-lines": [0, {
      "max": 100
    }],
    //关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": [0],
    "quotes": [1, "single"], //引号类型 `` "" ''
    //"quote-props": [2, "always"], //对象字面量中的属性名是否强制双引号
  }
}
