/*
 * @Description: 
 * @Author: Rabbiter
 * @Date: 2023-09-07 20:58:35
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports={
  publicPath: process.env.NODE_ENV === 'production'?'/dist/':'/',
    devServer:{
    // host:"59.110.94.218",
    host:"localhost",
    port: 9292
  },
}

