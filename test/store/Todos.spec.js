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

describe('mutations', () => {
  beforeEach(() => {
    mockState = state()
  })

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
  beforeEach(() => {
    mockState = state()
  })

  it('completedToDos', () => {
    const actual = mockState.list.filter(todo => todo.completed).length
    const completed = getters.completedToDos(mockState)

    expect(completed).toBe(actual)
  })   
})

describe('actions', () => {
  let toDoService
  let commit

  beforeEach(() => {

    // mock API service and store commit method

    toDoService = {
      uri: '',
      fetchAll: jest.fn(),
      fetch: jest.fn()
    }

    commit = jest.fn()
  })

  it('fetchToDos invokes API service fetchAll', async () => {
    await actions.fetchToDos({ commit: commit })
    expect(toDoService.fetchAll).toBeCalled()
  })

  it('fetchToDos commits SET_TODOS mutation', async () => {
    await actions.fetchToDos({ commit: commit })
    expect(commit).toBeCalled()
  })
  
  it('fetchToDo invokes API service fetch', async () => {
    await actions.fetchToDo({ commit: commit }, { id: 1 })
    // expect(toDoService.fetch).toBeCalled()
  })
})
