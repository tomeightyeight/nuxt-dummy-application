/* eslint-disable */
'use strict'

import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import TodosView from '@/pages/todos.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('todos.vue', () => {
  let actions
  let getters
  let store
  let state

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

    state = {
      list: [
        //
      ]
    }

    store = new Vuex.Store({
      modules: {
        todos: {
          state,
          getters,
          actions
        }
      }
    })
  })

  it('invokes store action addToDo when submit button clicked', () => {
    // const wrapper = shallow(TodosView, { store, localVue })
    
    // console.log(wrapper)

    // const button = wrapper.find('.btn-submit')
    // button.trigger('click')
    // expect(actions.addToDo).toHaveBeenCalled()
  })

  it('invokes store action remoteToDo when remove button is clicked', () => {
    //
  })

  it ('invokes store action fetchToDos when fetch button is clicked', () => {
    //
  })
})