const assert = require('assert')

const Kury = require('../')

describe('Fixed Function', () => {
  describe('Alternating Sum 4', () => {
    
    const alternatingSum4 = (a, b, c, d) => a - b + c - d
    const alternatingSum4Curry = Kury.fixed(alternatingSum4)

    describe('Same output', () => {
      describe('(1)(2)(3)(4)', () => {
        const expected = alternatingSum4(1,2,3,4)
        const got = alternatingSum4Curry(1)(2)(3)(4)
        it('curry returns same value', () => {
          assert.equal(expected, got)
        })
      })
      describe('(5, -7, 8)(6)', () => {
        const expected = alternatingSum4(5, -7, 8, 6)
        const got = alternatingSum4Curry(5, -7, 8)(6)
        it('curry returns same value', () => {
          assert.equal(expected, got)
        })
      })
      describe('(20)(Infinity, 40)(-70)', () => {
        const expected = alternatingSum4(20, Infinity, 40, -70)
        const got = alternatingSum4Curry(20)(Infinity, 40)(-70)
        it('curry returns same value', () => {
          assert.equal(expected, got)
        })
      })
    })
  })
})