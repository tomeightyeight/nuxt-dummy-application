<template>
  <main class="main">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <nuxt />
        </div>
      </el-col>
    </el-row>
  </main>
</template>

<script>
'use strict'

import { Row, Col } from 'element-ui'

export default {
  name: 'default',

  components: {
    'el-row': Row,
    'el-col': Col
  },

  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  //
}
</style>
