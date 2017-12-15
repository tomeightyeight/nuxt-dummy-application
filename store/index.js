export const state = () => ({
  example: ''
})

export const types = {
  SET_EXAMPLE: 'SET_EXAMPLE'
}

export const mutations = {
  [types.SET_EXAMPLE] (state, payload) {
    state.example = payload.text
  }
}

export const actions = {
  setExample ({ commit }, text) {
    commit({
      type: types.SET_EXAMPLE,
      payload: {
        text: text
      }
    })
  }
}
