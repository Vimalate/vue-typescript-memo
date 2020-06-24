<!--
 * @Author: Vimalakirti
 * @Date: 2020-06-24 14:35:02
 * @LastEditTime: 2020-06-24 21:00:37
 * @Description: 
 * @FilePath: \Code\memo\src\App.vue
--> 
<template>
  <div id="app">
    <menu-bar></menu-bar>
    {{$store.state.title}}
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

</style>
