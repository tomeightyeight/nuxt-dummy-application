<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">Something</el-menu-item>
    <el-submenu index="2">
      <template slot="title">Something Else</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
'use strict'

import {
  Menu,
  Submenu,
  MenuItem
} from 'element-ui'

export default {
  name: 'header-container',

  components: {
    'ElMenu': Menu,
    'ElSubmenu': Submenu,
    'ElMenuItem': MenuItem
  },

  data () {
    return {
      activeIndex2: ''
    }
  }
}
</script>

<style lang="scss">

</style>