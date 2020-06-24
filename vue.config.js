/*
 * @Author: Vimalakirti
 * @Date: 2020-06-24 22:56:43
 * @LastEditTime: 2020-06-24 22:56:44
 * @Description: 
 * @FilePath: \Code\memo\vue.config.js
 */ 
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
          .set('@$', resolve('src'))
          .set('assets',resolve('src/assets'))
          .set('components',resolve('src/components'))
          .set('layout',resolve('src/layout'))
          .set('base',resolve('src/base'))
          .set('static',resolve('src/static'))
    },
    publicPath:'./'
}