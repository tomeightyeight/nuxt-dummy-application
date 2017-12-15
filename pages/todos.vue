<template lang="html">
  <section class="section">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item.text }}
        <el-button @click="remove(index)">X</el-button>
      </li>
    </ul>

    <el-input v-model="input"></el-input>
    <el-button @click="submit()">Submit</el-button>

    <div>
      <span>Completed: {{ completedToDos }}</span>
    </div>
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
  mapGetters,
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
    }),

    ...mapGetters('todos', [
      'completedToDos'
    ])
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