/* eslint-disable */
export default {
  get: jest.fn(() => Promise.resolve({
    data: {
      foo: 'bar'
    }
  }))
}
 