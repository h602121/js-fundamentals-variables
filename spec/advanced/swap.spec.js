let { a, b } = require('../../src/advanced/swap.js')
a = a + b
b = a - b
a = a - b
describe('swap variables', () => {
  it("check variables were swapped'", () => {
    expect(a).toEqual(10)
    expect(b).toEqual(8)
  })
})
