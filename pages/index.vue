<template>
  <section class="section">
    <el-form ref="form" :model="sizeForm" label-width="120px" size="mini">
      <el-form-item label="Activity name">
        <el-input v-model="sizeForm.name"></el-input>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
'use strict'

import {
  Form,
  FormItem,
  Input,
  Button
} from 'element-ui'

export default {
  name: 'index-view',

  components: {
    'el-form': Form,
    'el-form-item': FormItem,
    'el-input': Input,
    'el-button': Button
  },

  data () {
    return {
      sizeForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>