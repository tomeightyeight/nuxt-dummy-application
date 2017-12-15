<template lang="html">
  <section class="section">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Example field">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type"></el-checkbox>
          <el-checkbox label="Promotion activities" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor"></el-radio>
          <el-radio label="Venue"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">Create</el-button>
        <el-button @click="submit()">Cancel</el-button>
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
  Button,
  RadioGroup,
  Radio,
  CheckboxGroup,
  Checkbox,
  Switch,
  Col,
  DatePicker,
  Select,
  Option
} from 'element-ui'

export default {
  name: 'index-view',

  components: {
    'el-form': Form,
    'el-form-item': FormItem,
    'el-input': Input,
    'el-button': Button,
    'el-radio-group': RadioGroup,
    'el-radio': Radio,
    'el-checkbox-group': CheckboxGroup,
    'el-checkbox': Checkbox,
    'el-switch': Switch,
    'el-col': Col,
    'el-date-picker': DatePicker,
    'el-select': Select,
    'el-option': Option
  },

  data () {
    return {
      form: {
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
  },

  method: {
    submit () {
      console.log('submit')
    }
  }
}
</script>

<style lang="scss" scoped>
.line {
  text-align: center;
}
</style>