const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,//控制是否将制定的依赖项进行编译转译
  lintOnSave:false,//取消EsLint检查
})
