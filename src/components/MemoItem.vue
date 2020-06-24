<!--
 * @Author: Vimalakirti
 * @Date: 2020-06-24 21:14:51
 * @LastEditTime: 2020-06-24 22:05:15
 * @Description: 
 * @FilePath: \Code\memo\src\components\MemoItem.vue
--> 
<template>
  <div>
    <div class="memo-container">
    <div class="memo">
      <div class="mark"></div>
      <div class="memo-heading">
        <h5 class="title">{{memo.title}}</h5>
        <ul class="tools">
          <li class="edit" @click="showEdit"></li>
          <li class="delete" @click="doDel"></li>
        </ul>
      </div>
      <h6 class="memo-info">
        <span class="timeStamp">{{memo.createTime}}</span>
        <span class="category">分类: {{$store.state.aHelper.getCategoryName(memo.categoryId) }}</span>
      </h6>
      <div class="content">
        <div class="text">{{memo.content}}</div>
      </div>
    </div>
  </div>
  </div>
</template>

<script lang='ts'>
import {Component,Prop,Vue} from 'vue-property-decorator'
import ItemData from '../model/ItemData'
@Component
export default class MemoItem extends Vue{
@Prop()  memo!:ItemData
showEdit(){
  // 创建副本
  let newMemo= JSON.parse(JSON.stringify(this.memo))
  // 传递transmemo
  this.$store.commit('showEditMemo',newMemo)
}
doDel():void{
  // 是否删除
  if(!window.confirm(`确认删除【${this.memo.title}】`)) return
  // 确认删除则
  this.$store.state.aHelper.remove(this.memo.id)
}
}
</script>

