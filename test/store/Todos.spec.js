/* eslint-disable */
import {
  state, 
  types,
  getters,
  mutations
} from '@/store/todos.js'

let baseStore

beforeEach(() => {
  baseStore = state();
})

describe('mutations', () => {
  it('adds a todo to the list array', () => {
    const text = 'foo'
    mutations[types.ADD_TODO](baseStore, { text: text })
    const item = baseStore.list.pop()

    expect(item.text).toBe(text)
  })

  it('removes a todo from the list array by index', () => {
    const first = baseStore.list[0]
    mutations[types.REMOVE_TODO](baseStore, { index: 0 })
    
    expect(first.text).not.toBe(baseStore.list[0].text)
  })
})

describe('getters', () => {
  it('returns a count of all the completed todos', () => {
    const actual = baseStore.list.filter(todo => todo.completed).length
    const completed = getters.completedToDos(baseStore)

    expect(completed).toBe(actual)
  })   
})
