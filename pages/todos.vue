<template lang="html">
  <section class="section">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item.title }}
        <el-button class="btn-remove" @click.prevent="remove(index)">X</el-button>
      </li>
    </ul>

    <el-input class="input-new-todo" v-model="input"></el-input>
    <el-button class="btn-submit" @click.prevent="submit()">Submit</el-button>
    <el-button class="btn-fetch" @click.prevent="fetch()">Fetch</el-button>

    <div>
      <span class="some-test-class">Completed: {{ completedToDos }}</span>
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
      'removeToDo',
      'fetchToDos'
    ]),

    submit () {
      if (this.input !== '') {
        this.addToDo({
          title: this.input
        })
      }
    },

    remove (index) {
      this.removeToDo({
        index: index
      })
    },

    fetch () {
      this.fetchToDos()
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