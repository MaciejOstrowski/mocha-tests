const { Calculator } = require('../src/calc')
const assert = require('assert')

describe('Calculator', () => {
    it('it should add numbers', () => {
        
        assert.equal(Calculator.add(2,2), 4)
        Calculator.add(2,2) == 4
    })
})

