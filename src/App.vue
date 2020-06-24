<!--
 * @Author: Vimalakirti
 * @Date: 2020-06-24 14:35:02
 * @LastEditTime: 2020-06-24 22:18:24
 * @Description: 
 * @FilePath: \Code\memo\src\App.vue
--> 
<template>
  <div id="app">
    <menu-bar></menu-bar>
    <item-list></item-list>
    <memo-editor v-if="$store.state.isShow"></memo-editor>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuBar from './components/MenuBar.vue'
import ItemList from './components/ItemList.vue'
import MemoEditor from './components/MemoEditor.vue'
@Component({
  components: {
    MenuBar,
    ItemList,
    MemoEditor
  },
})
export default class App extends Vue {}
</script>

<style>

</style>
