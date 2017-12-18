'use strict'

import axios from 'axios'

export const state = () => ({
  list: [
    {
      'userId': 1,
      'id': 1,
      'title': 'delectus aut autem original',
      'completed': true
    },
    {
      'userId': 1,
      'id': 2,
      'title': 'quis ut nam facilis et officia qui original',
      'completed': false
    }
  ]
})

export const types = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  SET_TODOS: 'SET_TODOS'
}

export const getters = {
  completedToDos: state => state.list.filter(todo => todo.completed).length
}

export const mutations = {
  [types.ADD_TODO] (state, { title }) {
    state.list.push({
      title: title,
      completed: true
    })
  },

  [types.REMOVE_TODO] (state, { index }) {
    state.list.splice(index, 1)
  },

  [types.SET_TODOS] (state, { todos }) {
    state.list = todos
  }
}

export const actions = {
  addToDo ({ commit }, { title }) {
    commit({
      type: types.ADD_TODO,
      title: title
    })
  },

  removeToDo ({ commit }, { index }) {
    commit({
      type: types.REMOVE_TODO,
      index: index
    })
  },

  async fetchToDos ({commit}) {
    let response

    try {
      response = await axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos?userId=1'
      })
    } catch (e) {
      console.warn(e)
    }

    commit({
      type: types.SET_TODOS,
      todos: JSON.parse(response)
    })
  }
}
