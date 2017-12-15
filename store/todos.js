export const state = () => ({
  list: [
    'first example item',
    'second example item'
  ]
})

export const types = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO'
}

export const mutations = {
  [types.ADD_TODO] (state, { text }) {
    state.list.push(text)
  },

  [types.REMOVE_TODO] (state, { index }) {
    state.list.splice(index, 1)
  }
}

export const actions = {
  addToDo ({ commit }, text) {
    commit({
      type: types.ADD_TODO,
      payload: {
        text: text
      }
    })
  }
}
