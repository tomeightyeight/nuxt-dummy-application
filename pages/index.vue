<template>
  <section>
    <el-button>Example Button</el-button>
  </section>
</template>

<script>
'use strict'

import { Button } from 'element-ui'

export default {
  name: 'index-view',

  components: {
    'el-button': Button
  },

  data () {
    return {
      filename: 'index.vue'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>