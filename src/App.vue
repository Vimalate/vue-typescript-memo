<!--
 * @Author: Vimalakirti
 * @Date: 2020-06-24 14:35:02
 * @LastEditTime: 2020-06-24 14:57:35
 * @Description: 
 * @FilePath: \Code\memo\src\App.vue
--> 
<template>
  <div id="app">
    <menu-bar></menu-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuBar from './components/MenuBar.vue'
@Component({
  components: {
    MenuBar
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
