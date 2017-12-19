/* eslint-disable */
'use strict'

import { shallow, mount, createLocalVue } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

import Vuex from 'vuex'
import { state } from '@/store/todos.js'

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

  it('snapshot: has same HTML structure', () => {
    const renderer = createRenderer()
    const wrapper = mount(TodosView, { store, localVue })
    
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) {
        throw new Error(err)
      }

      expect(str).toMatchSnapshot()
    })   
  })

  it('renders li for each item in store', () => {
    const wrapper = shallow(TodosView, { store, localVue })
    const items = wrapper.findAll('li')

    expect(items).toHaveLength(store.state.todos.list.length)
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

  it('does not dispatch store action addToDo if input empty', () => {
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
