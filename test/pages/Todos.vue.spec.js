/* eslint-disable */
'use strict'

import { 
  mount,
  createLocalVue 
} from 'vue-test-utils'

import { 
  createRenderer 
} from 'vue-server-renderer'

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

  it ('renders li for each item in store.state.list', () => {
    const wrapper = mount(TodosView, { store, localVue })
    // console.log(wrapper)
  })

  it ('has same HTML structure', () => {
    const renderer = createRenderer()
    const wrapper = mount(TodosView, { store, localVue })
    
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })   
  })

  it ('input element exists and renders', () => {
    const wrapper = mount(TodosView, { store, localVue })
    expect(wrapper.contains('.input-new-todo')).toBe(true)
  })

  it ('submit button exists and renders', () => {
    const wrapper = mount(TodosView, { store, localVue })
    expect(wrapper.contains('.btn-submit')).toBe(true)
  })

  it ('fetch button exists and renders', () => {
    const wrapper = mount(TodosView, { store, localVue })
    expect(wrapper.contains('.btn-fetch')).toBe(true)
  })

  it('dispatch store action addToDo when submit button clicked', () => {
    const wrapper = mount(TodosView, { store, localVue })
    const button = wrapper.find('.btn-submit')

    wrapper.setData({
      input: 'foo'
    })
    
    button.trigger('click')
    
    expect(actions.addToDo).toBeCalled()
  })

  it('does not dispatch store action addToDo when submit button clicked if input empty', () => {
    const wrapper = mount(TodosView, { store, localVue })
    const input = wrapper.find('.input-new-todo')
    const button = wrapper.find('.btn-submit')

    wrapper.setData({
      input: ''
    })

    expect(actions.addToDo).not.toBeCalled()
  })

  it('dispatch store action removeToDo when remove button is clicked', () => {
    const wrapper = mount(TodosView, { store, localVue })       
    const button = wrapper.find('.btn-remove')
    
    button.trigger('click')

    expect(actions.removeToDo).toBeCalled()
  })

  it('dispatch store action fetchToDos when fetch button is clicked', () => {
    const wrapper = mount(TodosView, { store, localVue })  
    const button = wrapper.find('.btn-fetch')
    
    button.trigger('click')

    expect(actions.fetchToDos).toBeCalled()
  })
})
