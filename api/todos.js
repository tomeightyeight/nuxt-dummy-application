'use strict'

import axios from 'axios'

export default {
  uri: 'https://jsonplaceholder.typicode.com',

  async fetchAll () {
    try {
      return await axios.get(`${this.uri}/todos?userId=1`)
    } catch (e) {
      console.warn(e)
    }
  },

  async fetch (id) {
    try {
      return await axios.get(`${this.uri}/todos/${id}`)
    } catch (e) {
      console.warn(e)
    }
  }
}
