<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <navigation-container />
      </el-aside>
      <el-container>
        <el-main>
          <nuxt />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
'use strict'

import {
  Container,
  Header,
  Aside,
  Main,
  Footer
} from 'element-ui'

import NavigationContainer from '../components/containers/NavigationContainer'

export default {
  name: 'default',

  components: {
    'ElContainer': Container,
    'ElHeader': Header,
    'ElAside': Aside,
    'ElMain': Main,
    'ElFooter': Footer,
    NavigationContainer
  },

  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss">
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
