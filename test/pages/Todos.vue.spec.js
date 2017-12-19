/* eslint-disable */
'use strict'

import { 
  mount,
  createLocalVue 
} from 'vue-test-utils'

import Vuex from 'vuex'
import state from '@/store/todos.js'

import TodosView from '@/pages/todos.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('todos.vue', () => {
  let actions
  let getters
  let store

  beforeEach(() => {

    // mock the store

    actions = {
      addToDo: jest.fn(),
      removeToDo: jest.fn(),
      fetchToDos: jest.fn()
    }

    getters = {
      completedToDos: jest.fn()
    }

    store = new Vuex.Store({
      modules: {
        todos: {
          namespaced: true,
          state,
          getters,
          actions
        }
      }
    })
  })

  it('dispatch store action addToDo when submit button clicked', () => {
    const wrapper = mount(TodosView, { store, localVue })
    
    expect(wrapper.contains('.btn-submit')).toBe(true)
    
    const button = wrapper.find('.btn-submit')
    button.trigger('click')
    
    expect(actions.addToDo).toBeCalled()
  })

  it('dispatch store action removeToDo when remove button is clicked', () => {
    const wrapper = mount(TodosView, { store, localVue })   
    
    expect(wrapper.contains('.btn-remove')).toBe(true)
    
    const button = wrapper.find('.btn-remove')
    button.trigger('click')

    expect(actions.removeToDo).toBeCalled()
  })

  it('dispatch store action fetchToDos when fetch button is clicked', () => {
    const wrapper = mount(TodosView, { store, localVue })
    
    expect(wrapper.contains('.btn-fetch')).toBe(true)
    
    const button = wrapper.find('.btn-fetch')
    button.trigger('click')

    expect(actions.fetchToDos).toBeCalled()
  })
})
