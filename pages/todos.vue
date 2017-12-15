<template>
  <section class="section">
    <ul>
      <li v-for="(item, index) in list" 
        :key="index">
        {{ item }}
      </li>
    </ul>

    <el-input></el-input>
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
      // local state
    }
  },

  computed: {
    ...mapState('todos', {
      list: state => state.list
    })
  },

  methods: {
    ...mapActions('todos', [
      'addToDo'
    ]),

    submit () {
      this.addToDo({
        text: 'example state'
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
  height: 1em;
}
</style>