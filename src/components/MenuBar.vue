<!--
 * @Author: Vimalakirti
 * @Date: 2020-06-24 14:53:33
 * @LastEditTime: 2020-06-24 18:23:59
 * @Description: 
 * @FilePath: \Code\memo\src\components\MenuBar.vue
--> 
<template>
  <div>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand">
          <img height="40" src="../assets/logo.png" />
        </a>
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          aria-expanded="false"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse navbar-right">
        <ul class="nav navbar-nav">
          <li class="add dropdown">
            <a class="create-new dropdown-toggle" data-toggle="dropdown">新建</a>
            <ul class="dropdown-menu">
              <li>
                <a @click="showAdd">文本便签</a>
              </li>
            </ul>
          </li>
          <li class="categories dropdown">
            <a class="current-category dropdown-toggle" data-toggle="dropdown">
              全部
              <span class="count badge">{{doFilter(-1)}}</span>
            </a>
            <ul class="dropdown-menu">
              <li class="total" @click="doFilterByCateId(-1)">
                <a>
                  全部
                  <span class="count badge">{{doFilter(-1)}}</span>
                </a>
              </li>
              <li class="divider"></li>
              <li @click="doFilterByCateId(0)">
                <a>
                  工作
                  <span class="count badge">{{doFilter(0)}}</span>
                </a>
              </li>
              <li @click="doFilterByCateId(1)">
                <a>
                  生活
                  <span class="count badge">{{doFilter(1)}}</span>
                </a>
              </li>
              <li @click="doFilterByCateId(2)">
                <a>
                  学习
                  <span class="count badge">{{doFilter(2)}}</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
</template>

<script lang='ts'>
  import {Component,Vue} from 'vue-property-decorator'
@Component
export default class MenuBar extends Vue{
  showAdd(){}
  doFilter(){}
  doFilterByCateId(){}
}
</script>

<style lang="scss" scoped>

</style>