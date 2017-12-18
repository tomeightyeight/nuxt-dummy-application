/* eslint-disable */
'use strict'

import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import TodosView from '@/pages/todos.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Todos.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      addToDo: jest.fn(),
      removeToDo: jest.fn(),
      'fetchToDos': jest.fn()
    }

    store = new Vuex.Store({
      state: {},
      actions
    })
  })

  it ('invokes store action addToDo when submit button clicked', () => {

  })

  it('invokes store action remoteToDo when delete button is clicked', () => {

  })

  it ('invokes store action fetchToDos when fetch button is clicked', () => {

  })
})