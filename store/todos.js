'use strict'

import toDoService from '@/api/todos.js'
import { uuid } from '@/utils/uuid.js'

export const state = () => ({
  list: [
    {
      'userId': 1,
      'id': uuid(),
      'title': 'delectus aut autem original',
      'completed': true
    },
    {
      'userId': 1,
      'id': uuid(),
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
  completedToDos: state => state.list
    .filter(todo => todo.completed).length
}

export const mutations = {
  [types.ADD_TODO] (state, { title }) {
    state.list.push({
      userId: null,
      id: uuid(),
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

  async fetchToDos ({ commit }) {
    const response = await toDoService.fetchAll()

    commit({
      type: types.SET_TODOS,
      todos: response.data
    })
  },

  async fetchToDo ({ commit }, { id }) {
    const response = await toDoService.fetch(id)

    commit({
      type: types.SET_TODOS,
      todos: response.data
    })
  }
}
