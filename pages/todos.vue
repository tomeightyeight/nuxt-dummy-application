<template>
  <section class="section">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item }}
        <el-button @click="remove(index)">X</el-button>
      </li>
    </ul>

    <el-input v-model="input"></el-input>
    <el-button @click="submit()">Submit</el-button>
  </section>
</template>

<script>
'use strict'

import {
  Input,
  Button
} from 'element-ui'

import {
  mapState,
  mapActions
} from 'vuex'

export default {
  name: 'todos-view',

  components: {
    'el-input': Input,
    'el-button': Button
  },

  data () {
    return {
      input: ''
    }
  },

  computed: {
    ...mapState('todos', {
      list: state => state.list
    })
  },

  methods: {
    ...mapActions('todos', [
      'addToDo',
      'removeToDo'
    ]),

    submit () {
      this.addToDo({
        text: this.input
      })
    },

    remove (index) {
      this.removeToDo({
        index: index
      })
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  height: auto;
}

li {
  line-height: 1;
  height: 3em;
}
</style>