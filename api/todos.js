'use strict'

import axios from 'axios'

export default {
  async fetchAll () {
    try {
      return await axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos?userId=1'
      })
    } catch (e) {
      console.warn(e)
    }
  },

  async fetch (id) {
    try {
      return await axios({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/todos/${id}`
      })
    } catch (e) {
      console.warn(e)
    }
  }
}
