<template>
  <section class="section">
    <el-form ref="form" :model="exampleForm">
      <el-form-item label="Example first">
        <el-input v-model="exampleForm.first"></el-input>
      </el-form-item>
      <el-form-item label="Example second">
        <el-input v-model="exampleForm.second"></el-input>
      </el-form-item>
      <el-form-item label="Example third">
        <el-input v-model="exampleForm.third"></el-input>
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
    'ElForm': Form,
    'ElFormItem': FormItem,
    'ElInput': Input,
    'ElButton': Button
  },

  data () {
    return {
      exampleForm: {
        first: '',
        second: '',
        third: ''
      }
    }
  }
}
</script>

<style lang="scss">

</style>