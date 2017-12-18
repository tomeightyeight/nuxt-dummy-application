/* eslint-disable */
'use strict'

import {
  state, 
  types,
  getters,
  mutations
} from '@/store/todos.js'

let mockState

beforeEach(() => {
  mockState = state()
})

describe('mutations', () => {
  it('adds a todo to the list array', () => {
    const title = 'foo'
    mutations[types.ADD_TODO](mockState, { title: title })
    const item = mockState.list.pop()

    expect(item.title).toBe(title)
  })

  it('removes a todo from the list array by index', () => {
    const first = mockState.list[0]
    mutations[types.REMOVE_TODO](mockState, { index: 0 })
    
    expect(first.title).not.toBe(mockState.list[0].title)
  })

  it ('sets todos on the store', () => {
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
  it('returns a count of all the completed todos', () => {
    const actual = mockState.list.filter(todo => todo.completed).length
    const completed = getters.completedToDos(mockState)

    expect(completed).toBe(actual)
  })   
})

describe('actions', () => {
  it('fetch todos from endpoint and and commit to store', () => {
    //
  })
})
