const assert = require('assert')

const Kury = require('../')

describe('Operators', () => {
  describe('op(add, 4)', () => {
    
    const add = (a, b) => a + b
    const addCurry = Kury.op(add, 4)

    describe('Same output', () => {
      describe('(1)(2)(3)(4)', () => {
        const expected = 1 + 2 + 3 + 4
        const got = addCurry(1)(2)(3)(4)

        it('curry returns same value', () => {
          assert.equal(expected, got)
        })
      })

      describe('(5, -7, 8)(6)', () => {
        const expected = 5 - 7 + 8 + 6
        const got = addCurry(5, -7, 8)(6)

        it('curry returns same value', () => {
          assert.equal(expected, got)
        })
      })

      describe('(20)(Infinity, 40)(-70)', () => {
        const expected = 20 + Infinity + 40 - 70
        const got = addCurry(20)(Infinity, 40)(-70)

        it('curry returns same value', () => {
          assert.equal(expected, got)
        })
      })
    })
    
  })
})