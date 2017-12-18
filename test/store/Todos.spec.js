/* eslint-disable */
'use strict'

import {
  state, 
  types,
  getters,
  mutations,
  actions
} from '@/store/todos.js'

let mockState

beforeEach(() => {
  mockState = state()
})

describe('mutations', () => {
  it('ADD_TODO', () => {
    const title = 'foo'
    mutations[types.ADD_TODO](mockState, { title: title })
    const item = mockState.list.pop()

    expect(item.title).toBe(title)
  })

  it('REMOVE_TODO', () => {
    const first = mockState.list[0]
    mutations[types.REMOVE_TODO](mockState, { index: 0 })
    
    expect(first.title).not.toBe(mockState.list[0].title)
  })

  it ('SET_TODOS', () => {
    const todos = [
      {
        'userId': 1,
        'id': 1,
        'title': 'test todo',
        'completed': false
      }
    ]

    mutations[types.SET_TODOS](mockState, { todos: todos })

    expect(todos).toEqual(mockState.list)
  })
})

describe('getters', () => {
  it('completedToDos', () => {
    const actual = mockState.list.filter(todo => todo.completed).length
    const completed = getters.completedToDos(mockState)

    expect(completed).toBe(actual)
  })   
})

describe('actions', () => {
  beforeEach(() => {

    // mock API service and store commit method

    const toDoService = {
      fetchAll: jest.fn(),
      fetch: jest.fn()
    }

    const commit = jest.fn()
  })

  it('fetchToDos invokes API service fetchAll', () => {
    (async function() {
        await actions.fetchToDos({ commit: commit })
        expect(toDoService.fetchAll).toBeCalled()
    })
  })

  it('fetchToDos commits SET_TODOS mutation', () => {
    (async function() {
      await actions.fetchToDos({ commit: commit })
      expect(commit).toBeCalled()
    })
  })
  it('fetchToDo invokes API service fetch', () => {
    (async function() {
      await actions.fetchToDo ({ commit }, { id: 1 })
      expect(toDoService.fetch).toBeCalled()
    })
  })
})
