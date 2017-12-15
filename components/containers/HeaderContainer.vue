<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">
      <nuxt-link to="/">Index</nuxt-link>
    </el-menu-item>
    <el-menu-item index="2">
      <nuxt-link to="/todos">Something</nuxt-link>
    </el-menu-item>    
    <el-submenu index="3">
      <template slot="title">Something Else</template>
      <el-menu-item index="3-1">item one</el-menu-item>
      <el-menu-item index="3-2">item two</el-menu-item>
      <el-menu-item index="3-3">item three</el-menu-item>
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
    'el-menu': Menu,
    'el-submenu': Submenu,
    'el-menu-item': MenuItem
  },

  data () {
    return {
      activeIndex2: ''
    }
  }
}
</script>

<style lang="scss">
.el-menu-item a {
  text-decoration: none;
}
</style>