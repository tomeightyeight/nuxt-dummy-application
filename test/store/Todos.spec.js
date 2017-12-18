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
  mockState = state();
})

describe('mutations', () => {
  it('adds a todo to the list array', () => {
    const text = 'foo'
    mutations[types.ADD_TODO](mockState, { text: text })
    const item = mockState.list.pop()

    expect(item.text).toBe(text)
  })

  it('removes a todo from the list array by index', () => {
    const first = mockState.list[0]
    mutations[types.REMOVE_TODO](mockState, { index: 0 })
    
    expect(first.text).not.toBe(mockState.list[0].text)
  })
})

describe('getters', () => {
  it('returns a count of all the completed todos', () => {
    const actual = mockState.list.filter(todo => todo.completed).length
    const completed = getters.completedToDos(mockState)

    expect(completed).toBe(actual)
  })   
})
