/*
 * @Author: Vimalakirti
 * @Date: 2020-06-24 14:38:41
 * @LastEditTime: 2020-06-24 20:59:55
 * @Description: 
 * @FilePath: \Code\memo\src\main.ts
 */ 
import Vue from 'vue'
import App from './App.vue'
import CateEnum from './model/CateEnum'
import ItemData from './model/ItemData'
import ActionHelper from './store/ActionHelper'
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store 
}).$mount('#app')

// let ah=new ActionHelper()
// console.log(ah.memoList)
// 新增
// let newItem=new ItemData(-1,CateEnum.Life,'生活','欺骗')
// newItem.id=ah.add(newItem)
// console.log(newItem)
// 修改
// let newItem=new ItemData(2,CateEnum.Life,'害怕','快乐')
// ah.edit(newItem)
// 删除
// ah.remove(3)